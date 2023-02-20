import { Outlet, Route, Routes } from "react-router-dom";
import { Footer, Header } from "../features";
import Main from "./Main";
import Movies from "./Movies";
import Profile from "./Profile";
import SavedMovies from "./SavedMovies";

const HeaderLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const FooterLayout = () => (
  <>
    <Outlet />
    <Footer />
  </>
);

function Routing() {
  return (
    <Routes>
      <Route element={<HeaderLayout />}>
        <Route element={<FooterLayout />}>
          <Route path="/" element={<Main />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/saved-movies" element={<SavedMovies />}></Route>
        </Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Route>
    </Routes>
  );
}

export default Routing;
