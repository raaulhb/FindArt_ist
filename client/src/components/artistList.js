import Artist from './artist';
import { getArtists } from './apiService';
import { useState, useEffect } from 'react';
import Header from './header';

function ArtistList({ artists }) {
  const [artistList, setArtist] = useState([]);

  const selectedHandler = (event) => {
    console.log(event.target.value);
    setArtist(
      artistList.filter((artist) => artist.style === event.target.value)
    );
  };

  useEffect(() => {
    getArtists().then((res) => {
      setArtist(res);
    });
  }, []);

  return (
    <>
      <Header
        selectedHandler={selectedHandler}
        setArtist={setArtist}
        artistList={artistList}></Header>
      <div className="artist-list">
        {artistList.map((artist) => (
          <Artist artist={artist} key={artist._id} />
        ))}
      </div>
    </>
  );
}
export default ArtistList;
