import React, { useState } from 'react';
import MediaGrid from './mediaGrid';
import StarRating from './StarRating';
import Artist from './artist';
import '../App.css';

const ContactInfo = ({ artist }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleClick = () => {
    setShowInfo(!showInfo);
  };

  const boxStyle = {
    opacity: showInfo ? 1 : 0,
    transform: showInfo ? 'scale(1)' : 'scale(0.5)',
  };

  return (
    <div>
      <button onClick={handleClick} className="artistContactButton">
        {showInfo ? 'Hide Info' : 'Show Info'}
      </button>
      <div className="contact-info-box" style={boxStyle}>
        <p className="contact-info-item">
          <strong>Email:</strong> <br></br>
          {artist.email}
        </p>
        <p className="contact-info-item">
          <strong>Phone:</strong> <br></br>
          {artist.phone}
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
