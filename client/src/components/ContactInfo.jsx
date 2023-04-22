import React, { useState } from 'react';

const ContactInfo = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button className="artistContactButton" onClick={handleOpen}>
        Artist Contacts
      </button>
      {isOpen && (
        <div className="contact-info-box">
          <p>Email: {props.email}</p>
          <p>Phone: {props.phone}</p>
          <p>Ratings: {props.ratings}/5</p>
          {/* <a href={props.instagramLink}>Instagram</a> */}
          <button onClick={handleClose}>Close</button>
        </div>
      )}
    </div>
  );
};

export default ContactInfo;
