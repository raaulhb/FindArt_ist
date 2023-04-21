import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { Container } from 'reactstrap';
import axios from 'axios';
import Header from './header';
import ArtistList from './artistList';
import Artist from './artist';

const MultiUpload = ({ media, setMedia, loading, setLoading }) => {
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
          //post media url to db
          let specificArrayInObject = media.array;
          specificArrayInObject.push(mediaUrl);
          const newObj = { ...media, specificArrayInObject };
          setMedia(newObj);
          console.log(media);
        });
    });
    axios.all(uploaders).then(() => {
      console.log(uploaders);
      setLoading('false');
    });
  };

  return (
    <Container className="MediaContainer">
      <h3 className="text-center">Upload your media</h3>
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
      </div>
    </Container>
  );
};

export default MultiUpload;
