import React, { useState, useEffect } from 'react';
import '../App.css';

function MediaGrid({ loading, media }) {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [hasMedia, setHasMedia] = useState(false);

  // console.log(media);

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
        {media.array.map((item) => {
          if (
            item.includes('.mp4') ||
            item.includes('.webm') ||
            item.includes('.ogv')
          ) {
            return (
              <video
                key={item}
                className={`media ${selectedMedia === item ? 'selected' : ''}`}
                controls
                onClick={() => setSelectedMedia(item)}>
                <source src={item} type="video/mp4" />
                <source src={item} type="video/webm" />
                <source src={item} type="video/ogg" />
              </video>
            );
          } else if (
            item.includes('.mp3') ||
            item.includes('.ogg') ||
            item.includes('.wav')
          ) {
            return (
              <audio
                key={item}
                className={`media ${selectedMedia === item ? 'selected' : ''}`}
                controls
                onClick={() => setSelectedMedia(item)}>
                <source src={item} type="audio/mpeg" />
                <source src={item} type="audio/ogg" />
                <source src={item} type="audio/wav" />
              </audio>
            );
          } else {
            return (
              <img
                key={item}
                alt="uploaded media"
                className={`media ${selectedMedia === item ? 'selected' : ''}`}
                src={item}
                onClick={() => setSelectedMedia(item)}
              />
            );
          }
        })}
      </div>
    );
  }
}

export default MediaGrid;
