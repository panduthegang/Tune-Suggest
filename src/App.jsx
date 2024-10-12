import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SongList from "./components/SongList";
import Recommendations from "./components/Recommendations";
import songsData from "./data/songs.json"; 

const App = () => {
  const [favourites, setFavourites] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 

  const addToFavourites = (song) => {
    if (!favourites.some(fav => fav.id === song.id)) {
      setFavourites([...favourites, song]);
    }
  };

  const removeFromFavourites = (song) => {
    setFavourites(favourites.filter(fav => fav.id !== song.id));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <Navbar
        favourites={favourites}
        songs={songsData}
        addToFavourites={addToFavourites}
        removeFromFavourites={removeFromFavourites}
        onSearchChange={handleSearchChange}
      />

      <div className="song-list-container">
        <SongList 
          songs={songsData} 
          addToFavourites={addToFavourites} 
          favourites={favourites} 
          searchTerm={searchTerm}
        />
      </div>
    </div>
  );
};

export default App;
