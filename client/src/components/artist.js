import '../App.css';
import MultiUpload from './artistMedia';

export function Artist({ artist }) {
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
        <MultiUpload />
      </div>
      <div className="artisLoadedMedia">media preview</div>
    </div>
  );
}

export default Artist;
