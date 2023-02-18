import Header from "../../features/Header";
import AboutProject from "../../main/AboutProject";
import Promo from "../../main/Promo";
import styles from "./Main.module.css";

function Main() {
  return (
    <>
      <Header></Header>
      <main>
        <Promo />
        <AboutProject />
      </main>
    </>
  );
}

export default Main;
