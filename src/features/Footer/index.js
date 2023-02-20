import { Container, Flex, Link } from "../../shared";
import styles from "./Footer.module.css";

function Footer(params) {
  return (
    <Container component="footer" className={styles.footer}>
      <p className={styles.footer__info}>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <hr className={styles.footer__divider} />
      <Flex className={styles.footer__copy}>
        <span>@ {new Date().getFullYear()}</span>
        <Flex className={styles.footer__links}>
          <Link
            href="https://practicum.yandex.ru/"
            target="_blank"
            rel="noreferrer"
            className={styles.footer__link}
          >
            Яндекс.Практикум
          </Link>
          <Link
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Footer;
