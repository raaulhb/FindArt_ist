import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { Container } from 'reactstrap';
import axios from 'axios';
import { editArtist } from './apiService';

const MultiUpload = ({ media, setMedia, loading, setLoading, _id }) => {
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
          'https://api.cloudinary.com/v1_1/df8esp18z/auto/upload',
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
          return data.secure_url;
        });
    });
    axios.all(uploaders).then(() => {
      // console.log(uploaders);
      setLoading('false');
    });
    Promise.all(uploaders).then((res) => {
      const body = { _id, media: res };
      editArtist(body);
    });
  };

  return (
    <Container className="MediaContainer">
      <p className="UploadPic">Upload your media</p>
      <div className="upload-container">
        <Dropzone
          className="dropzone"
          onDrop={handleDrop}
          onChange={(e) => setMedia(e.target.value)}
          value={media}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps({ className: 'dropzone' })}>
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
