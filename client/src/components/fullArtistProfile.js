import { useState } from 'react';
import '../App.css';
import { useLocation } from 'react-router-dom';
import MultiUpload from './artistMedia';

function Profile(props) {
  const { state } = useLocation();
  // console.log('inside profile', state);
  return (
    <>
      <div>
        <MultiUpload></MultiUpload>
      </div>
    </>
  );
}

export default Profile;
