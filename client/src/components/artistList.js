import Artist from './artist';
import { getArtists } from './apiService';
import { useState, useEffect } from 'react';
import Header from './header';

function ArtistList({ artists }) {
  const [artistList, setArtist] = useState([]);
  const [fullArtistList, setFullArtistList] = useState([]);

  const selectedHandler = (event) => {
    const selectedStyle = event.target.value;
    console.log(selectedStyle);
    if (selectedStyle === 'All') {
      setArtist(fullArtistList);
    } else {
      const filteredArtists = fullArtistList.filter(
        (artist) => artist.style === selectedStyle
      );
      setArtist(filteredArtists);
    }
  };

  useEffect(() => {
    getArtists().then((res) => {
      setArtist(res);
      setFullArtistList(res);
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
