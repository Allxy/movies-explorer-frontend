import { Timeline, Title } from "../../features";
import { Container, Flex } from "../../shared";
import styles from "./AboutProject.module.css";

function AboutProject({ id }) {
  return (
    <section id={id} className={styles.about}>
      <Container>
        <Title className={styles.about__title}>О проекте</Title>
        <Flex className={styles.about__content}>
          <div className={styles.post}>
            <strong className={styles.post__title}>
              Дипломный проект включал 5 этапов
            </strong>
            <p className={styles.post__content}>
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className={styles.post}>
            <strong className={styles.post__title}>
              На выполнение диплома ушло 5 недель
            </strong>
            <p className={styles.post__content}>
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </Flex>
        <Timeline className={styles.timeline}>
          <Timeline.Section
            size="1"
            className={styles.timeline__begin}
            times="неделя"
          >
            Back-end
          </Timeline.Section>
          <Timeline.Section
            size="4"
            className={styles.timeline__end}
            times="недели"
          >
            Front-end
          </Timeline.Section>
        </Timeline>
      </Container>
    </section>
  );
}

export default AboutProject;
