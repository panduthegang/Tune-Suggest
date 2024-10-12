import React from "react";

const FavouritesList = ({ favourites, removeFromFavourites }) => {
  return (
    <div>
      <h2>Favourites</h2>
      <ul>
        {favourites.length > 0 ? (
          favourites.map((song) => (
            <li key={song.id}>
              {song.title} - {song.artist} ({song.genre})
              <button onClick={() => removeFromFavourites(song)}>Remove from Favourites</button>
            </li>
          ))
        ) : (
          <p>No favourites added yet.</p>
        )}
      </ul>
    </div>
  );
};

export default FavouritesList;
