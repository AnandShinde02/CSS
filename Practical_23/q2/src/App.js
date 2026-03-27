import React, { useRef, useState } from "react";
import "./App.css";

const songs = [
  {
    title: "Chill Vibes",
    artist: "Lo-fi Beats",
    src: "/assets/song1.mp3",
    cover: "/assets/cover1.jpg"
  },
  {
    title: "Night Drive",
    artist: "Synth Wave",
    src: "/assets/song2.mp3",
    cover: "/assets/cover2.jpg"
  }
];

function App() {
  const audioRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentSong = songs[currentIndex];

  const playPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    setCurrentIndex((currentIndex + 1) % songs.length);
    setIsPlaying(false);
  };

  const prevSong = () => {
    setCurrentIndex(
      (currentIndex - 1 + songs.length) % songs.length
    );
    setIsPlaying(false);
  };

  return (
    <div className="app">

      {/* Sidebar */}
      <div className="sidebar">
        <h2>🎵 Spotify</h2>
        <p>Home</p>
        <p>Search</p>
        <p>Your Library</p>
      </div>

      {/* Main Content */}
      <div className="main">

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search songs..."
          className="search"
        />

        <h2>Trending Songs</h2>

        <div className="song-list">
          {songs.map((song, index) => (
            <div
              key={index}
              className={
                index === currentIndex
                  ? "song-card active"
                  : "song-card"
              }
              onClick={() => setCurrentIndex(index)}
            >
              <img src={song.cover} alt="" />
              <h4>{song.title}</h4>
              <p>{song.artist}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Player */}
      <div className="player-bar">

        <div className="song-info">
          <img src={currentSong.cover} alt="" />
          <div>
            <p>{currentSong.title}</p>
            <span>{currentSong.artist}</span>
          </div>
        </div>

        <div className="controls">
          <button onClick={prevSong}>⏮</button>
          <button onClick={playPause}>
            {isPlaying ? "⏸" : "▶"}
          </button>
          <button onClick={nextSong}>⏭</button>
        </div>

        <audio ref={audioRef} src={currentSong.src}></audio>

      </div>

    </div>
  );
}

export default App;