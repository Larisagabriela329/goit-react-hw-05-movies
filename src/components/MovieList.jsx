import PropTypes from "prop-types";
import MovieItem from "../components/MovieItem";
import styles from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  return (
    <ul className={styles.movieList}>
      {movies.map(({ id, title, poster_path }) => (
        <MovieItem key={id} id={id} title={title} posterPath={poster_path} />
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ).isRequired,
};

export default MovieList;
