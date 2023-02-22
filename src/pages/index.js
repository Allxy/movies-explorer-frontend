import { useEffect } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { useSession } from "../entities/Session";
import { Preloader } from "../shared";
import { mainApi } from "../shared/api/MainApi";
import { Footer, Header } from "../widgets";
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

const AuthLayout = ({ auth = false, to = "/" }) => {
  const [user] = useSession();

  if (!user === auth) {
    return <Navigate to={to} />;
  }

  return <Outlet />;
};

const SessionLayout = () => {
  const [, setUser, loading, setLoading] = useSession();

  useEffect(() => {
    if (mainApi.getToken()) {
      mainApi
        .check()
        .then((data) => setUser(data))
        .catch(() => mainApi.removeToken())
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <Preloader></Preloader>;
  }

  return <Outlet />;
};

function Routing() {
  return (
    <Routes>
      <Route element={<SessionLayout />}>
        <Route element={<HeaderLayout />}>
          <Route element={<FooterLayout />}>
            <Route path="/" element={<Main />} />
            <Route element={<AuthLayout auth={true} />}>
              <Route path="/movies" element={<Movies />} />
              <Route path="/saved-movies" element={<SavedMovies />} />
            </Route>
          </Route>
          <Route element={<AuthLayout auth={true} />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
        <Route path="" element={<AuthLayout to={"/movies"} />}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default Routing;
