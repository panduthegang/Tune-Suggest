import React from 'react';

const SongList = ({ addToFavourites, favourites, songs, searchTerm }) => {
  const filteredSongs = songs
    .filter(song => 
      song.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      song.artist.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(song => !favourites.some(fav => fav.id === song.id));

  return (
    <div>
      <h2>Song List</h2>
      <ul>
        {filteredSongs.length > 0 ? (
          filteredSongs.map(song => (
            <li key={song.id}>
              {song.title} - {song.artist} ({song.genre})
              <button onClick={() => addToFavourites(song)}>Add to Favourites</button>
            </li>
          ))
        ) : (
          <p>No songs available matching your search!</p>
        )}
      </ul>
    </div>
  );
};

export default SongList;
