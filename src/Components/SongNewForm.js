import { useState} from 'react';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

function SongNewForm() {

  let navigate = useNavigate();

  const [song, setSong] = useState({
    name: '',
    artist: '',
    album: '',
    time:'',
    is_favorite: false
  });

  const addSong = (newSong) => {
    axios
      .post(`${API}/songs`, newSong)
      .then(
        () => {
          navigate(`/songs`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn('catch', c));
  };

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  

  const handleSubmit = (event) => {
    event.preventDefault();
    addSong(song);
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Song"
          required
        />
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          type="text"
          value={song.artist}
          placeholder="Name of Artist"
          onChange={handleTextChange}
        />
        <label htmlFor="album">Album:</label>
        <input
          id="album"
          type="text"
          value={song.album}
          placeholder="educational, inspirational, ..."
          onChange={handleTextChange}
        />
         <label htmlFor="time">Time:</label>
        <input
          id="time"
          type="text"
          value={song.time}
          placeholder="3.30"
          onChange={handleTextChange}
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
        />

        <br />

        <input type="submit" />
      </form>
    </div>
  );
}

export default SongNewForm;