import Artist from './artist';

export function ArtistList({ artists }) {
  // console.log(artists);
  return (
    <>
      <div className="artist-list">
        {artists.map((artist) => (
          <Artist artist={artist} key={artist._id} />
        ))}
      </div>
    </>
  );
}
export default ArtistList;
