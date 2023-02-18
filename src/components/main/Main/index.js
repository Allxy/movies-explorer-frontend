import Header from "../../layout/Header";
import AboutProject from "../AboutProject";
import Promo from "../Promo";
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
