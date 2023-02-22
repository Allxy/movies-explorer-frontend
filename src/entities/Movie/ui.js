import styles from "./Movie.module.css";

function Movie({ name = "Без названия", trailerLink, duration = 0, button, image }) {
  const hours = Math.floor(duration / 60);
  const min = duration - hours * 60;

  return (
    <article className={styles.movie}>
      <a href={trailerLink} target="_blank" rel="noreferrer" className={styles.movie__link}>
        <header
          className={styles.movie__header}
        >
          <p className={styles.movie__name}>{name}</p>
          <span className={styles.movie__time}>
            {hours}ч {min}м
          </span>
        </header>
        <div className={styles.movie__imgwrapper}>
          <img
            src={image}
            alt={"Картинка фильма " + name}
            className={styles.movie__image}
          />
        </div>
      </a>
      <div className={styles.movie__btnwrapper}>{button}</div>
    </article>
  );
}

export default Movie;
