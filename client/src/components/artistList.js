import Artist from './artist';
import { getArtists } from './apiService';
import { useState, useEffect } from 'react';
import Header from './header';
import MultiUpload from './artistMedia';
import ContactInfo from './ContactInfo';

function ArtistList({ artists }) {
  const [artistList, setArtist] = useState([]);

  useEffect(() => {
    getArtists().then((res) => {
      // console.log(res);
      setArtist(res);
    });
  }, []);

  return (
    <>
      <Header></Header>
      <div className="artist-list">
        {artistList.map((artist) => (
          <Artist artist={artist} key={artist._id} />
        ))}
      </div>
    </>
  );
}
export default ArtistList;
