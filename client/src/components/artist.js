import React, { useState } from 'react';
import '../App.css';
import MultiUpload from './artistMedia';
import MediaGrid from './mediaGrid';
import StarRating from './StarRating';
import ContactInfo from './ContactInfo';

const Artist = ({ artist }) => {
  const [media, setMedia] = useState({ array: [] });
  const [loading, setLoading] = useState('');
  const [showInfoBox, setShowInfoBox] = useState(false);

  const handleArtistClick = () => {
    setShowInfoBox(!showInfoBox);
    // console.log('artist', artist);
  };

  console.log(artist);

  return (
    <div className="artist">
      <div className="artistDetails">
        <div className="artistProfilePic">
          <img
            className="artistProfilePic"
            src={artist.profilePic}
            alt={artist.name}
          />
        </div>

        <div className="artistName">
          <h1>{artist.name}</h1>
        </div>

        <div className="ratings">
          <StarRating />
        </div>
        <div className="artistInfo">
          <p>
            My art: <br />
            {artist.style}
          </p>
          <br />
          <p>
            About the artist: <br />
            {artist.about}
          </p>
        </div>

        <div>
          <ContactInfo artist={artist} />
        </div>

        <MultiUpload
          _id={artist._id}
          media={media}
          setMedia={setMedia}
          loading={loading}
          setLoading={setLoading}
        />
      </div>
      <div className="artistLoadedMedia">
        <MediaGrid media={{ array: artist.artistMedia }} loading="false" />
        <MediaGrid media={media} loading={loading} />
      </div>
    </div>
  );
};

export default Artist;
