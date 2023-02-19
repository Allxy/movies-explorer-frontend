import Title from "../../features/Title";
import Container from "../../shared/ui/Container";
import Flex from "../../shared/ui/Flex";
import Button from "../../shared/ui/Button";
import Heading from "../../shared/ui/Heading";
import styles from "./Techs.module.css";

const techs = [
  ["HTML", "https://developer.mozilla.org/ru/docs/Web/HTML"],
  ["CSS", "https://developer.mozilla.org/ru/docs/Web/CSS"],
  ["JS", "https://developer.mozilla.org/ru/docs/Web/JavaScript"],
  ["React", "https://ru.reactjs.org/"],
  ["Git", "https://git-scm.com/"],
  ["Express.js", "https://expressjs.com/"],
  ["mongoDB", "https://www.mongodb.com"],
];

function Techs() {
  return (
    <section className={styles.techs}>
      <Container>
        <Title className={styles.techs__title}>Технологии</Title>
        <Heading
          component="strong"
          variant="h1"
          className={styles.techs__subtitle}
        >
          {techs.length} технологий
        </Heading>
        <p className={styles.techs__paragraph}>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <Flex component="ul" className={styles.techs__list}>
          {techs.map((tech, i) => (
            <li key={i}>
              <Button
                component="a"
                variant="lightgray"
                href={tech[1]}
                target="_blank"
                className={styles.techs__link}
              >
                {tech[0]}
              </Button>
            </li>
          ))}
        </Flex>
      </Container>
    </section>
  );
}

export default Techs;
