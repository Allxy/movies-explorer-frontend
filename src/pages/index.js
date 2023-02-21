import { useEffect } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { useSession } from "../entities/Session";
import { mainApi } from "../shared/api/MainApi";
import { Preloader } from "../shared";
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

const AuthLayout = () => {
  const [user] = useSession();

  if (user) {
    return <Navigate to="/" />;
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
      setLoading(false)
    }
  }, []);

  if (loading) {
    return <Preloader></Preloader>;
  }

  return <Outlet />;
};

const PrivateOutlet = () => {
  const [user] = useSession();

  if (!user) {
    return <Navigate to="/signin" />;
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
            <Route element={<PrivateOutlet />}>
              <Route path="/movies" element={<Movies />} />
              <Route path="/saved-movies" element={<SavedMovies />} />
            </Route>
          </Route>
          <Route element={<PrivateOutlet />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
        <Route path="" element={<AuthLayout />}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default Routing;
