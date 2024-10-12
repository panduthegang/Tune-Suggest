import React from 'react';

const Recommendations = ({ favourites, songs }) => {
  if (!favourites || !songs || songs.length === 0) return <p>No recommendations yet.</p>;

  if (favourites.length === 0) return <p>No recommendations yet.</p>;

  const favouriteGenres = favourites.map(song => song.genre);

  const recommendedSongs = songs.filter(song => {
    const isNotInFavourites = !favourites.some(fav => fav.id === song.id);
    const isSameGenre = favouriteGenres.includes(song.genre);
    return isNotInFavourites && isSameGenre;
  });

  return (
    <div>
      <h2>Recommendations</h2>
      <ul>
        {recommendedSongs.length > 0 ? (
          recommendedSongs.map(song => (
            <li key={song.id}>
              {song.title} - {song.artist} ({song.genre})
            </li>
          ))
        ) : (
          <p>No recommendations available based on your favourites.</p>
        )}
      </ul>
    </div>
  );
};

export default Recommendations;
