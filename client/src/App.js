import './App.css';
import { useEffect, useState } from 'react';
import StarRating from './components/StarRating';
import Header from './components/header';
import React from 'react';
import CreateArtist from './components/createArtist';
import { getArtists, postArtist } from './components/apiService';
import ArtistList from './components/artistList';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MultiUpload from './components/artistMedia';

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
