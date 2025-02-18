import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./MovieItem.module.css";

const MovieItem = ({ id, title, posterPath }) => {
  const location = useLocation(); // Preserve navigation state

  return (
    <li className={styles.movieItem}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <img
          src={
            posterPath
              ? `https://image.tmdb.org/t/p/w500${posterPath}`
              : "https://via.placeholder.com/200x300?text=No+Image"
          }
          alt={title}
          className={styles.poster}
        />
        <p>{title}</p>
      </Link>
    </li>
  );
};

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  posterPath: PropTypes.string,
};

export default MovieItem;
