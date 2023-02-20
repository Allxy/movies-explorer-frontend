import { useNavigate } from "react-router-dom";
import { Heading, Link } from "../../shared";
import styles from "./NotFound.module.css";

function NotFound() {
  const nav = useNavigate();
  return (
    <main className={styles.notfound}>
      <div className={styles.notfound__info}>
        <Heading className={styles.notfound__code}>404</Heading>
        <p className={styles.notfound__error}>Страница не найдена</p>
      </div>
      <Link className={styles.notfound__back} onClick={() => nav(-1)}>
        Назад
      </Link>
    </main>
  );
}

export default NotFound;
