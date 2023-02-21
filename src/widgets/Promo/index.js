import { Button, Container, Flex, Heading } from "../../shared";
import web from "../../shared/images/web.png";
import styles from "./Promo.module.css";

function Promo() {
  return (
    <section className={styles.promo}>
      <Container>
        <Flex className={styles.promo__content}>
          <div>
            <Heading className={styles.promo__title}>
              Учебный проект студента факультета{" "}
              <span className={styles.web}>Веб-разработки</span>.
            </Heading>
            <p className={styles.promo__subtitle}>
              Листайте ниже, чтобы узнать больше про этот проект и его
              создателя.
            </p>
          </div>
          <img src={web} alt="Планета из слова web" className={styles.promo__web}></img>
        </Flex>
        <Button component="a" href="#about" className={styles.promo__more}>
          Узнать больше
        </Button>
      </Container>
    </section>
  );
}

export default Promo;
