import { useEffect, useState, Suspense } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { fetchMovieDetails } from "../services/api"; // Your API function
import styles from "../components/MovieDetails.module.css";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  const { title, overview, genres, poster_path, vote_average } = movie;

  return (
    <div className={styles.container}>
      <Link to={location.state?.from || "/"} className={styles.backButton}>
        ← Go Back
      </Link>

      <div className={styles.movieDetails}>
        <img
          src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : "https://via.placeholder.com/300x450?text=No+Image"}
          alt={title}
          className={styles.poster}
        />
        <div className={styles.info}>
          <h2>{title}</h2>
          <p>User Score: {Math.round(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map((genre) => genre.name).join(", ")}</p>
        </div>
      </div>

      <h3>Additional Information</h3>
      <ul>
        <li>
          <Link to="cast" state={{ from: location.state?.from }}>Cast</Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: location.state?.from }}>Reviews</Link>
        </li>
      </ul>

      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
