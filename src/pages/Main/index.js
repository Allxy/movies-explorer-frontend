import { AboutMe, AboutProject, Promo, Techs } from "../../widgets";

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
