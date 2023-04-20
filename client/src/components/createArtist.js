import { useState } from 'react';
import '../App.css';
import { postArtist, getArtists } from './apiService';

export function CreateArtist({ artistList, setArtist }) {
  console.log('CreateArtist');
  const [file, setFile] = useState();
  const [newArtist, setNewArtist] = useState({
    name: '',
    style: '',
    ratings: 0,
    about: '',
    portfolio: '',
  });

  function handleChange(event) {
    console.log('handleChange');
    const { name, value } = event.target;
    setNewArtist({ ...newArtist, [name]: value });
  }

  function handleSubmit(newArtist) {
    if (
      !newArtist.name ||
      !newArtist.style ||
      !newArtist.about ||
      !newArtist.portfolio
    ) {
      alert('Mantatory fields must be filled');
      return;
    }

    console.log('HandleSubmit');

    const createdArtist = {
      name: newArtist.name,
      style: newArtist.style,
      ratings: newArtist.ratings,
      about: newArtist.about,
      portfolio: newArtist.portfolio,
    };

    postArtist(createdArtist).then((savedArtist) => {
      setArtist([...artistList, savedArtist]);
    });
  }

  function handleFormSubmit(event) {
    console.log('handleFormSubmit');
    event.preventDefault();
    setNewArtist({
      name: '',
      style: '',
      ratings: 0,
      about: '',
      portfolio: '',
    });
  }

  async function handleCreateButtonClick() {
    console.log('handleCreateButtonClick');
    console.log(newArtist.name);
    console.log(newArtist.style);
    console.log(newArtist.about);
    console.log('this is portfolio', newArtist.portfolio);

    console.log(file);
    let url = '';
    if (file) {
      url = await uploadToCloud(file);
    }

    newArtist.portfolio = url;
    console.log('newArtis', newArtist);
    handleSubmit(newArtist);
  }

  const uploadToCloud = async (file) => {
    const formData = new FormData();
    console.log(' file', file);
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
    console.log('response', response);
    return response.url;
  };

  function handleImageChange(e) {
    console.log('handleImageChange');
    setFile(e.target.files[0]);
  }

  return (
    <>
      <div className="artist-creator">
        <h3 className="createNewArtistText">Create Artist Profile Here:</h3>

        <form onSubmit={handleFormSubmit}>
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

          <div className="ArtistStyle">
            <label>Style:</label>
            <br></br>
            <input
              className="input"
              type="text"
              placeholder="Insert your art style here"
              name="style"
              value={newArtist.style}
              onChange={handleChange}
              required></input>
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

          <div className="Artistportfolio">
            <label>Select portfolio media:</label>
            <br></br>
            <input
              className="input"
              type="file"
              name="portfolio"
              onChange={handleImageChange}
              required></input>
          </div>

          <div className="button-submit">
            <button
              className="CreateArtistButton"
              type="submit"
              onClick={handleCreateButtonClick}>
              Create Artist
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateArtist;
