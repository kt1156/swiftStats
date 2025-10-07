import './AlbumGrid.css';

function AlbumGrid({ albums, getCoverFileName, onSelectAlbum, selectedAlbum }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)', // 4 albums per row
        gap: '1rem',
        justifyContent: 'center',
        padding: '1rem'
      }}
    >
      {albums.map(albumName => {
        const coverUrl = getCoverFileName(albumName);
        return (
          <div
            key={albumName}
            className="album-card"
            onClick={() => onSelectAlbum(albumName)}
          >
            {/* Cover Image */}
            <div
              style={{
                backgroundImage: `url('${coverUrl}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%',
                width: '220px'
              }}
            />

            {/* Info Section */}
            <div style={{ padding: '1rem', color: 'white', flex: 1 }}>
              <p style={{ margin: 0, textShadow: '1px 1px 2px black' }}>
                <strong>{albumName}</strong>
              </p>
                <a
                  href={`https://open.spotify.com/search/${encodeURIComponent(albumName)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()} // prevents triggering album click
                  className="spotify-link"
                >
                  Spotify 🔗
                </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AlbumGrid;