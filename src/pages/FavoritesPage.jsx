import React from 'react';
import { useFavorites } from '../hooks/useFavorites';
import { Link } from 'react-router-dom';

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <div>
      <h1>My Favorites</h1>
      <div className="movie-grid">
        {favorites.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-card">
            <img src={movie.imageUrl} alt={movie.title} />
            <h3>{movie.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
