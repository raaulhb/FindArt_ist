import { useState } from 'react';
import '../App.css';
import { useLocation } from 'react-router-dom';

function Profile(props) {
  const { state } = useLocation();
  console.log('inside profile', state);
  return <>'hello world im a profile'</>;
}

export default Profile;
