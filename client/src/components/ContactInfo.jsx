import React, { useState } from 'react';
import '../App.css';

const ContactInfo = (props) => {
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
          <strong>Email:</strong> {props.email}
        </p>
        <p className="contact-info-item">
          <strong>Phone:</strong> {props.phone}
        </p>
        <p className="contact-info-item">
          <a href={props.instagramLink}>Instagram</a>
        </p>
        {/* <button onClick={handleClick} className="contact-info-close"></button> */}
      </div>
    </div>
  );
};

export default ContactInfo;
