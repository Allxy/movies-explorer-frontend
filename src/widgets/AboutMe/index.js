import classNames from "classnames";
import { Links, Title } from "../../features";
import { Container, Flex, Heading } from "../../shared";
import author from "../../shared/images/author.jpg";
import styles from "./AboutMe.module.css";

function AboutMe() {
  return (
    <Container className={styles.about} component="section">
      <Title>Студент</Title>
      <Flex
        component="article"
        className={classNames(styles.about__article, styles.article)}
      >
        <div className={styles.article__typography}>
          <Heading
            className={styles.article__title}
            component="header"
            variant="h1"
          >
            Алексей
          </Heading>
          <p className={styles.article__subtitle}>
            Фронтенд-разработчик, 27 лет
          </p>
          <p className={styles.article__text}>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a className={styles.article__link} href="https://github.com/Allxy">
            Github
          </a>
        </div>
        <img
          src={author}
          className={styles.article__photo}
          alt="Фотография автора"
        />
      </Flex>
      <Links className={styles.about__portfolio} title="Портфолио">
        <Links.Link href="">Статичный сайт</Links.Link>
        <Links.Link href="">Адаптивный сайт</Links.Link>
        <Links.Link href="">Одностраничное приложение</Links.Link>
      </Links>
    </Container>
  );
}

export default AboutMe;
