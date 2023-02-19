import Footer from "../../features/Footer";
import Header from "../../features/Header";
import AboutMe from "../../widgets/AboutMe";
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
        <AboutMe />
        <Footer />
      </main>
    </>
  );
}

export default Main;
