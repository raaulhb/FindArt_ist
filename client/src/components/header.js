export function Header({ artistList, setArtist, selectedHandler }) {
  return (
    <div className="headerText">
      <h2>FindArt_ist</h2>
      <select className="selectStyle" onChange={selectedHandler}>
        <option value="">Select an art style</option>
        <option value="Tattoo">Tattoo</option>
        <option value="Painting">Painting</option>
        <option value="Street Art">Street Art</option>
        <option value="DJ">DJ</option>
        <option value="Live Band">Live Band</option>
        <option value="Pottery">Pottery</option>
        <option value="Other">Other</option>
      </select>
    </div>
  );
}

export default Header;
