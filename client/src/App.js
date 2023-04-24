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
      <div className="header">
        <Header />
      </div>
      <div className="createList">
        <div className="createArtist">
          <CreateArtist artistList={artistList} setArtist={setArtist} />
        </div>
      </div>
    </div>
  );
}

export default App;
