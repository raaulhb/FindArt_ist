function MediaGrid({ loading, media }) {
  if (loading === 'true') {
    return <h3>Loading...</h3>;
  }
  if (loading === 'false') {
    return (
      <div className="artisLoadedMedia">
        <h3>
          {media.array.length <= 0
            ? 'No media'
            : media.array.map((item) => (
                <img
                  key={item}
                  alt="uploaded media"
                  style={{
                    width: '200px',
                    height: '200px',
                    backgroundSize: 'cover',
                    paddingRight: '15px',
                  }}
                  src={item}
                />
              ))}
        </h3>
      </div>
    );
  }
}

export default MediaGrid;
