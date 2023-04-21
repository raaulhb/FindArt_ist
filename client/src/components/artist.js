import '../App.css';
import MultiUpload from './artistMedia';
import MediaGrid from './mediaGrid';
import { useState, useEffect } from 'react';
import { editArtist } from './apiService';

export function Artist({ artist }) {
  const [media, setMedia] = useState({ array: [] });
  const [loading, setLoading] = useState('');

  useEffect(() => {
    if (loading === 'false') {
      editArtist({ media: media.array, _id: artist._id }).catch((e) =>
        console.log(e)
      );
    }
  }, [loading]);

  return (
    <div className="artist">
      <div className="artistDetails">
        <div className="artist-name">
          <h1>{artist.name}</h1>
        </div>
        <div className="artist-info">
          <p>My art: {artist.style}</p>
          <br></br>
          <p>
            About the artist: <br></br>
            {artist.about}
          </p>
        </div>

        <div className="artistMedia">
          <img className="media" src={artist.portfolio} />
        </div>
        <MultiUpload
          media={media}
          setMedia={setMedia}
          loading={loading}
          setLoading={setLoading}
        />
      </div>
      <div className="artisLoadedMedia">
        <MediaGrid media={{ array: artist.artistMedia }} loading="false" />
        <MediaGrid media={media} loading={loading} />
      </div>
    </div>
  );
}

export default Artist;
