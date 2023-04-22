import React, { useState, useEffect } from 'react';
import '../App.css';

function MediaGrid({ loading, media }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hasMedia, setHasMedia] = useState(false);

  useEffect(() => {
    if (media.array.length > 0) {
      setHasMedia(true);
    }
  }, [media]);

  if (loading === 'true') {
    return <h3>Loading...</h3>;
  }

  if (loading === 'false') {
    return (
      <div className="artistLoadedMedia">
        {media.array.length <= 0 && hasMedia && <h3>No media</h3>}
        {media.array.map((item) => (
          <img
            key={item}
            alt="uploaded media"
            className={`mediaImage ${selectedImage === item ? 'selected' : ''}`}
            src={item}
            onClick={() => setSelectedImage(item)}
          />
        ))}
      </div>
    );
  }
}

export default MediaGrid;
