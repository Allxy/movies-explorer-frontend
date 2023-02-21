import classNames from "classnames";
import Movie from "../../entities/Movie";
import styles from "./MoviesList.module.css";

function MoviesList({ movies = [], button, className }) {
  return (
    <section className={classNames(styles.movies, className)}>
      {movies.map(({ name, time, isSaved, image, id }, i) => (
        <Movie
          // TO-DO заменить на id
          key={i}
          name={name}
          time={time}
          image={image}
          button={button({ isSaved, id })}
        />
      ))}
    </section>
  );
}

export default MoviesList;
