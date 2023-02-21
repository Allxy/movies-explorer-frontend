import { Flex } from "../../shared";
import styles from "./Movie.module.css";

function Movie({ name = "Без названия", trailer, time = 0, button, image }) {
  const hours = Math.floor(time / 60);
  const min = time - hours * 60;

  return (
    <article className={styles.movie}>
      <a href={trailer} className={styles.movie__link}>
        <Flex
          component="header"
          justify="space-between"
          align="center"
          className={styles.movie__header}
        >
          <div>
            <p className={styles.movie__name}>{name}</p>
            <span className={styles.movie__time}>
              {hours}ч {min}м
            </span>
          </div>
        </Flex>
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
