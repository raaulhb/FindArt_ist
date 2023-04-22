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
        <div className="artistProfilePic">
          <img className="artistProfilePic" src={artist.profilePic} />
        </div>

        <div className="artistName">
          <h1>{artist.name}</h1>
        </div>
        <div className="artistInfo">
          <p>
            My art: <br></br>
            {artist.style}
          </p>
          <br></br>
          <p>
            About the artist: <br></br>
            {artist.about}
          </p>
        </div>

        <MultiUpload
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
}

export default Artist;
