import { Flex } from "../../shared";
import styles from "./Movie.module.css";

function Movie({ name = "Без названия", trailer, time = 0, button, image }) {
  const hours = Math.floor(time / 60);
  const min = time - hours * 60;

  return (
    <a href={trailer} className={styles.movie}>
      <article className={styles.movie__article}>
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
          {button}
        </Flex>
        <div className={styles.movie__imgwrapper}>
          <img src={image} alt="" className={styles.movie__image} />
        </div>
      </article>
    </a>
  );
}

export default Movie;
