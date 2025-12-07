import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CylindricalCarousel from '../components/CylindricalCarousel';
import ThemeToggle from '../components/ThemeToggle';
import { getMovies } from '../services/movieService';

const HomePage = () => {
  const [movies, setMovies] =useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies();
      setMovies(data);
      setFilteredMovies(data);
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    const results = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(results);
  }, [searchTerm, movies]);

  return (
    <div>
      <ThemeToggle />
      <h1>VexoStream</h1>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Link to="/movies">All Movies</Link>
      <Link to="/favorites">My Favorites</Link>
      <CylindricalCarousel items={filteredMovies} />
    </div>
  );
};

export default HomePage;