import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/header';
import React from 'react';
import CreateArtist from './components/createArtist';
import { getArtists, postArtist } from './components/apiService';

function App() {
  const [artistList, setArtist] = useState([]);

  useEffect(() => {
    getArtists().then((res) => {
      setArtist(res);
    });
  }, []);

  return (
    <div className="App">
      <Header />

      <div className="createList">
        <div className="createArtist">
          <CreateArtist artistList={artistList} setArtist={setArtist} />
        </div>
      </div>
      <div className="appDescriptionList">
        Gain visibility, interact with other artists, build a community, support
        small and local businesses.
      </div>
      <div className="appDescription">
        FindArt_ist is a project that offers a platform for artists to display
        their artwork, receive bookings, and feedback. It aims to provide a
        reliable and useful platform for artists and customers to connect, with
        the goal of generating income and visibility for emerging artists in
        various creative fields.
      </div>
    </div>
  );
}

export default App;
