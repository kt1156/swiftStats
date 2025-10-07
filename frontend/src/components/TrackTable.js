import './TrackTable.css';

function TrackTable({ tracks }) {
  return (
    <>
      {/* Valence Explanation */}
      <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#2c2929ff', fontStyle: 'italic', textAlign: 'center' }}>
        <strong>Valence</strong> measures the musical positivity of a track. Higher values mean happier, more cheerful songs. (0-1)
      </p>
      <table className="track-table">
        <thead>
          <tr>
            <th>Song</th>
            <th>Album</th>
            <th>Danceability</th>
            <th>Energy</th>
            <th>Tempo</th>
            <th>Valence</th>
            <th>Spotify</th>
          </tr>
        </thead>
        <tbody>
          {tracks.map(track => (
            <tr key={track.id}>
              <td>{track.name}</td>
              <td>{track.album}</td>
              <td>{track.danceability}</td>
              <td>{track.energy}</td>
              <td>{track.tempo}</td>
              <td>{track.valence}</td>
              <td>
                <a href={`https://open.spotify.com/track/${track.id}`} target="_blank" rel="noopener noreferrer" className="spotify-link">
                  🔗
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TrackTable;