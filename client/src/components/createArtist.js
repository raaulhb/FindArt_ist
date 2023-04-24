import { useState } from 'react';
import '../App.css';
import { postArtist, getArtists } from './apiService';
import { useNavigate } from 'react-router-dom';

export function CreateArtist({ artistList, setArtist }) {
  const [file, setFile] = useState();
  const [newArtist, setNewArtist] = useState({
    name: '',
    email: '',
    phone: '',
    style: '',
    ratings: 0,
    about: '',
    profilePic: '',
  });

  const navigate = useNavigate(); // use to redirect the pages

  function handleChange(event) {
    const { name, value } = event.target;
    setNewArtist({ ...newArtist, [name]: value });
  }

  function handleSubmit(newArtist) {
    if (
      //all this filds are mandatory when creating a new artist profile
      !newArtist.name ||
      !newArtist.email ||
      !newArtist.phone ||
      !newArtist.style ||
      !newArtist.about ||
      !newArtist.profilePic
    ) {
      alert('Mantatory fields must be filled');
      return;
    }

    const createdArtist = {
      name: newArtist.name,
      email: newArtist.email,
      phone: newArtist.phone,
      style: newArtist.style,
      ratings: newArtist.ratings,
      about: newArtist.about,
      profilePic: newArtist.profilePic,
    };

    postArtist(createdArtist).then((savedArtist) => {
      setArtist([...artistList, savedArtist]);
      navigate('/artistList', {
        state: savedArtist,
      }); //after submiting the form, it redirects you to next page
    });
  }

  async function handleCreateButtonClick(event) {
    event.preventDefault();

    let url = '';
    if (file) {
      url = await uploadToCloud(file);
    }

    newArtist.profilePic = url;
    handleSubmit(newArtist);
  }

  const uploadToCloud = async (file) => {
    const formData = new FormData();
    // console.log(' file', file);
    formData.append('file', file);
    formData.append('upload_preset', 'FindArtist');
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/df8esp18z/image/upload',
      {
        method: 'POST',
        body: formData,
      }
    );

    const response = await res.json();
    // console.log('response', response);
    return response.url;
  };

  function handleImageChange(e) {
    setFile(e.target.files[0]);
  }

  return (
    <>
      <div className="artist-creator">
        <h3 className="createNewArtistText">Create Artist Profile Here:</h3>

        <form onSubmit={handleCreateButtonClick}>
          <div className="ArtistName">
            <label>Name:</label>
            <br></br>
            <input
              className="input"
              type="text"
              placeholder="Insert your artistic name here"
              name="name"
              value={newArtist.name}
              onChange={handleChange}
              required></input>
          </div>

          <div className="ArtistEmail">
            <label>Email to be contact:</label>
            <br></br>
            <input
              className="input"
              type="text"
              placeholder="Enter your email address"
              name="email"
              value={newArtist.email}
              onChange={handleChange}
              required></input>
          </div>

          <div className="ArtistPhone">
            <label>Phone number to be contact:</label>
            <br></br>
            <input
              className="input"
              type="text"
              placeholder="Enter your phone number"
              name="phone"
              value={newArtist.phone}
              onChange={handleChange}></input>
          </div>

          <div className="ArtistStyle">
            <label>Style:</label>
            <br />
            <select
              className="ArtStyleSelect"
              name="style"
              value={newArtist.style}
              onChange={handleChange}
              required>
              <option value="">Select an art style</option>
              <option value="Tattoo">Tattoo</option>
              <option value="Painting">Painting</option>
              <option value="Street Art">Street Art</option>
              <option value="DJ">DJ</option>
              <option value="Live Band">Live Band</option>
              <option value="Pottery">Pottery</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="ArtistAbout">
            <label>About the Artist and their art:</label>
            <br></br>
            <input
              className="input"
              type="text"
              placeholder="A little about you and your art"
              name="about"
              value={newArtist.about}
              onChange={handleChange}
              required></input>
          </div>

          <div className="ArtistprofilePic">
            <label>Select profilePic:</label>
            <br></br>
            <input
              className="input"
              type="file"
              name="profilePic"
              onChange={handleImageChange}
              required></input>
          </div>

          <div className="button-submit">
            <button className="CreateArtistButton" type="submit">
              Create Artist
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateArtist;
