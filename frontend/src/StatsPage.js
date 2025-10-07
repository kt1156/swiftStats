import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import TrackTable from './components/TrackTable';

function StatsPage() {
  const navigate = useNavigate();
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [tracks, setTracks] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const album = localStorage.getItem('selectedAlbum');
    const trackData = localStorage.getItem('tracks');

    if (album && trackData) {
      setSelectedAlbum(album);
      setTracks(JSON.parse(trackData));
    }
  }, [location]); // depends on location to re-run fetch and pull latest album from localStorage
  
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', background: 'linear-gradient(to right, pink, lightblue)' }}>
      <button
        onClick={() => navigate('/')}
        style={{
          background: 'none',
          border: 'none',
          color: '#1db954',
          fontWeight: 'bold',
          fontSize: '1rem',
          cursor: 'pointer',
          marginBottom: '1rem'
        }}
      >
       &lt; Back
      </button>

      {selectedAlbum && (
        <>
          <h2 style={{ fontSize: '2rem', color: '#242022ff', textAlign: 'center' }}>
            Tracks from '{selectedAlbum}' by Taylor Swift'
          </h2>
          <TrackTable tracks={tracks} />
        </>
      )}
    </div>
  );
}

export default StatsPage;