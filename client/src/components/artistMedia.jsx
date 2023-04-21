import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { Container } from 'reactstrap';
import axios from 'axios';
import Header from './header';
import ArtistList from './artistList';
import Artist from './artist';

const MultiUpload = (props) => {
  const [media, setMedia] = useState({ array: [] });
  const [loading, setLoading] = useState('');

  const handleDrop = (files) => {
    const uploaders = files.map((file) => {
      const formData = new FormData();

      formData.append('file', file);
      formData.append('tags', `codeinfuse, medium, gist`);
      formData.append('upload_preset', 'FindArtist');
      formData.append('api_key', '518696466957192');
      formData.append('timestamp', (Date.now() / 1000) | 0);
      setLoading('true');
      return axios
        .post(
          'https://api.cloudinary.com/v1_1/df8esp18z/image/upload',
          formData,
          {
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
          }
        )
        .then((response) => {
          const data = response.data;
          const mediaUrl = data.secure_url;
          let specificArrayInObject = media.array;
          specificArrayInObject.push(mediaUrl);
          const newObj = { ...media, specificArrayInObject };
          setMedia(newObj);
          console.log(media);
        });
    });
    axios.all(uploaders).then(() => {
      setLoading('false');
    });
  };

  function MediaPreview() {
    if (loading === 'true') {
      return <h3>Loading...</h3>;
    }
    if (loading === 'false') {
      return (
        <div className="artisLoadedMedia">
          <h3>
            {media.array.length <= 0
              ? 'No media'
              : media.array.map((item) => (
                  <img
                    key={item}
                    alt="uploaded media"
                    style={{
                      width: '200px',
                      height: '200px',
                      backgroundSize: 'cover',
                      paddingRight: '15px',
                    }}
                    src={item}
                  />
                ))}
          </h3>
        </div>
      );
    }
  }

  return (
    <Container className="MediaContainer">
      <h1 className="text-center">Upload your media</h1>
      <div className="upload-container">
        <Dropzone
          className="dropzone"
          onDrop={handleDrop}
          onChange={(e) => setMedia(e.target.value)}
          value={media}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps({ className: 'dropzone' })}>
                <span>folder</span>
                <p>Drag 'n' drop your media here</p>
              </div>
            </section>
          )}
        </Dropzone>
        <MediaPreview />
      </div>
    </Container>
  );
};

export default MultiUpload;
