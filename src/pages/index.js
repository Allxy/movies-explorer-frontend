import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import Footer from "../features/Footer";
import Header from "../features/Header";
import Main from "./Main";
import Movies from "./Movies";

const HeaderLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

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
          <Route path="/profile" element={<Movies />}></Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default Routing;
