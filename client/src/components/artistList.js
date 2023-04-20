import Artist from './artist';
import { getArtists } from './apiService';
import { useState, useEffect } from 'react';

export function ArtistList({ artists }) {
  const [artistList, setArtist] = useState([]);

  useEffect(() => {
    getArtists().then((res) => {
      setArtist(res);
    });
  }, []);

  // console.log(artists);
  return (
    <>
      <div className="artist-list">
        {artistList.map((artist) => (
          <Artist artist={artist} key={artist._id} />
        ))}
      </div>
    </>
  );
}
export default ArtistList;
