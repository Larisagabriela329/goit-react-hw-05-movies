import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../services/api";
import MovieList from "../components/MovieList";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
