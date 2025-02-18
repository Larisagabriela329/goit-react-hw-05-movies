import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "../services/api"; // Your API function
import styles from "./Cast.module.css";

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]); // ✅ Initialize with an empty array

  useEffect(() => {
    fetchMovieCredits(movieId)
      .then((data) => setCast(data.cast || [])) // ✅ Ensure `cast` is always an array
      .catch((error) => {
        console.error("Error fetching cast:", error);
        setCast([]); // ✅ Prevent errors in case of API failure
      });
  }, [movieId]);

  if (!cast.length) return <p>No cast information available.</p>; // ✅ Safe check

  return (
    <ul className={styles.castList}>
      {cast.map(({ id, name, character, profile_path }) => (
        <li key={id} className={styles.castItem}>
          <img
            src={profile_path ? `https://image.tmdb.org/t/p/w200${profile_path}` : "https://via.placeholder.com/200x300?text=No+Image"}
            alt={name}
            className={styles.profile}
          />
          <p><strong>{name}</strong></p>
          <p>as {character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
