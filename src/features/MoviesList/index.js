import classNames from "classnames";
import { Movie } from "../../entities/Movie";
import styles from "./MoviesList.module.css";

function MoviesList({ movies = [], button, className }) {
  return (
    <section className={classNames(styles.movies, className)}>
      {movies.map((movie, i) => (
        <Movie
          key={movie.movieId}
          name={movie.nameRU}
          duration={movie.duration}
          image={movie.image}
          trailerLink={movie.trailerLink}
          button={button(movie)}
        />
      ))}
    </section>
  );
}

export default MoviesList;
