import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../services/movieService';
import { useFavorites } from '../hooks/useFavorites';
import './MovieDetailPage.css';

const MovieDetailPage = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getMovieById(id);
      setMovie(data);
    };

    fetchMovie();
  }, [id]);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <video
        ref={videoRef}
        src={movie.videoUrl}
        controls
        autoPlay
        width="100%"
        onPlay={handlePlay}
        onPause={handlePause}
        className={isPlaying ? 'playing' : ''}
      />
      {isFavorite(movie.id) ? (
        <button onClick={() => removeFavorite(movie.id)}>Remove from Favorites</button>
      ) : (
        <button onClick={() => addFavorite(movie)}>Add to Favorites</button>
      )}
    </div>
  );
};

export default MovieDetailPage;
