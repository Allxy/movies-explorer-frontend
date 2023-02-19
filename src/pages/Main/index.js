import AboutMe from "../../widgets/AboutMe";
import AboutProject from "../../widgets/AboutProject";
import Promo from "../../widgets/Promo";
import Techs from "../../widgets/Techs";

function Main() {
  return (
    <main>
      <Promo />
      <AboutProject id="about" />
      <Techs />
      <AboutMe />
    </main>
  );
}

export default Main;
