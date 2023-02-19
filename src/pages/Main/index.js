import Header from "../../features/Header";
import AboutProject from "../../widgets/AboutProject";
import Promo from "../../widgets/Promo";
import Techs from "../../widgets/Techs";
import styles from "./Main.module.css";

function Main() {
  return (
    <>
      <Header className={styles.header}></Header>
      <main>
        <Promo />
        <AboutProject id="about" />
        <Techs />
      </main>
    </>
  );
}

export default Main;
