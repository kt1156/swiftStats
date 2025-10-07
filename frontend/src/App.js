import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AlbumGrid from './components/AlbumGrid';
import StatsPage from './StatsPage';


function App() {
  const [albums, setAlbums] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const navigate = useNavigate();

// Normalise album names to image filenames
  const getCoverFileName = (albumName) => {
    const map = {
      "evermore": "evermore.png",
      "THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY": "tortured-poets-anthology.webp",
      "Red": "red.png",
      "folklore": "folklore.png",
      "1989": "1989.png",
      "THE TORTURED POETS DEPARTMENT": "tortured-poets.jpg",
      "Midnights (3am Edition)": "midnights-3am.webp",
      "evermore (deluxe version)": "evermore-deluxe.png",
      "reputation": "reputation.jpg",
      "Midnights": "midnights.webp",
      "1989 (Taylor's Version) [Deluxe]": "1989-taylors-deluxe.png",
      "Red (Deluxe Edition)": "red-deluxe.jpg",
      "1989 (Deluxe)": "1989-deluxe.jpg",
      "Fearless (Platinum Edition)": "fearless-platinum.png",
      "Speak Now World Tour Live": "speak-now-live.jpg",
      "Red (Taylor's Version)": "red-taylors.jpg",
      "1989 (Taylor's Version)": "1989-taylors.webp",
      "Speak Now (Taylor's Version)": "speak-now-taylors.jpg",
      "Midnights (The Til Dawn Edition)": "midnights-til-dawn.png",
      "folklore (deluxe version)": "folklore-deluxe.png",
      "Fearless (Taylor's Version)": "fearless-taylors.png",
      "folklore: the long pond studio sessions (from the Disney+ special) [deluxe edition]": "folklore-longpond.webp",
      "Lover": "lover.png",
      "reputation Stadium Tour Surprise Song Playlist": "reputation-tour.jpg",
      "Speak Now": "speak-now.jpg",
      "Speak Now (Deluxe Package)": "speak-now-deluxe.jpg",
      "Fearless (International Version)": "fearless-international.webp",
      "Live From Clear Channel Stripped 2008": "clear-channel-2008.png",
      "Taylor Swift (Deluxe Edition)": "taylor-swift-deluxe.jpg"
    };
    return `/images/albums/${map[albumName] || 'default.png'}`;
  };
  
  useEffect(() => {
    // Fetch all albums
    fetch('/tracks/albums') // starts a HTTP request to backend at /albums -> returns a Promise (gets Response object)
      .then(res => res.json()) // takes the raw Response and parses it to be used in JS
      .then(data => setAlbums(data)) // updates React state with album list
      .catch(err => console.error('Error fetching albums:', err)); // handles errors if server is down/endpoing doesn't exist/response isn't valid JSON
  }, []);

  const handleSelectAlbum = (albumName) => {
    setSelectedAlbum(albumName);
    localStorage.setItem('selectedAlbum', albumName)
    fetch(`/tracks/album/${encodeURIComponent(albumName)}`)
      .then(res => res.json())
      .then(data => {
        setTracks(data);
        localStorage.setItem('tracks', JSON.stringify(data));
        navigate('/stats');
      })
      .catch(err => console.error('Error fetching tracks:', err));
  };
  
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', background: 'linear-gradient(to right, pink, lightblue)' }}>
            <h1 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: '6rem', color: 'white' }}>
              SwiftStats
            </h1>
            <p style={{ background: '#1f1f1f', borderRadius: '12px', padding: '2rem', marginBottom: '2rem', textAlign: 'center', fontSize: '1.5rem', color: 'white' }}>
              Welcome to SwiftStats! To get started, select an album {'>'} choose a track {'>'} display the stats!
            </p>

            <AlbumGrid
              albums={albums}
              getCoverFileName={getCoverFileName}
              onSelectAlbum={(albumName) => {
                handleSelectAlbum(albumName);
                navigate('/stats');
              }}
              selectedAlbum={selectedAlbum}
            />
          </div>
        }
      />
      <Route
        path="/stats"
        element={<StatsPage selectedAlbum={selectedAlbum} tracks={tracks} />}
      />
    </Routes>
  );
}

export default App;