import React, { useState } from "react";
import "./styles.css";

const albumsDB = {
  pop: [
    { name: "Thriller", rating: "5/5" },
    { name: "Bad", rating: "4.5/5" },
    { name: "Dangerous", rating: "4/5" }
  ],
  rap: [
    { name: "2pac", rating: "5/5" },
    { name: "Eminem", rating: "5/5" },
    { name: "Drake", rating: "4/5" }
  ],
  Rock: [
    { name: "The Beatles", rating: "5/5" },
    { name: "AC/DC", rating: "4.5/5" },
    { name: "The Rolling Stones", rating: "4/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("rap");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>🎧MusicalGenres</h1>
      <p style={{ fontSize: "smaller" }}>
        Checkout my favourite music genres.select a genre to get started
      </p>
      <div>
        {Object.keys(albumsDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            key={genre}
            style={{
              border: "1px solid black",
              width: "15%",
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
              margin: "0.5rem",
              cursor: "pointer"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul>
          {albumsDB[selectedGenre].map((albums) => (
            <li
              key={albums.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "60%",
                margin: "2rem",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "larger" }}>{albums.name}</div>
              <div style={{ fontSize: "smaller" }}>{albums.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
