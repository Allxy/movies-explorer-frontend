import { Outlet, Route, Routes } from "react-router-dom";
import { Footer, Header } from "../features";
import Main from "./Main";
import Movies from "./Movies";
import NotFound from "./NotFound";
import Profile from "./Profile";
import SavedMovies from "./SavedMovies";
import Signin from "./Signin";
import Signup from "./Signup";

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
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Routing;
