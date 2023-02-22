import { useEffect, useMemo, useState } from "react";
import { useMovieFilter } from "../../entities/Movie";
import { useMovieCount } from "../../entities/Movie/hooks";
import MoviesList from "../../features/MoviesList";
import SearchForm from "../../features/SearchForm";
import { Button, Container, Preloader, Switcher } from "../../shared";
import { mainApi } from "../../shared/api/MainApi";
import { moviesApi } from "../../shared/api/MoviesApi";
import IconRoundButton from "../../shared/ui/IconRoundButton";
import styles from "./MoviesSearch.module.css";

function MoviesSearch(params) {
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [shorts, setShorts] = useState(false);
  const [filter, setFilter] = useState("");
  const [start, current, resetCurrent, loadMore] = useMovieCount();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    mainApi.movies().then(setSavedMovies);
  }, []);

  useEffect(() => {
    const data = sessionStorage.getItem("all_movies");
    const shorts = sessionStorage.getItem("shorts");
    const filter = sessionStorage.getItem("filter");
    data && setMovies(JSON.parse(data));
    shorts && setShorts(JSON.parse(shorts));
    filter && setFilter(JSON.parse(filter));
    resetCurrent();
  }, []);

  const controllers = useMemo(
    () => ({
      duration: (value) => (shorts ? value <= 40 : value > 40),
    }),
    [shorts]
  );
  const filteredMovies = useMovieFilter(movies, filter, controllers);

  const handleSearch = (value) => {
    if (!sessionStorage.getItem("all_movies")) {
      setLoading(true);
      setError(false);
      moviesApi
        .movies()
        .then((data) => {
          data = data.map(({ created_at, updated_at, id, image, ...movie }) => {
            movie.thumbnail =
              "https://api.nomoreparties.co" + image?.formats?.thumbnail?.url;
            movie.image = "https://api.nomoreparties.co" + image?.url;
            movie.movieId = id;
            return movie;
          });
          sessionStorage.setItem("all_movies", JSON.stringify(data));
          setMovies(data);
        })
        .catch((err) => {
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    sessionStorage.setItem("shorts", JSON.stringify(shorts));
    sessionStorage.setItem("filter", JSON.stringify(value));
    setFilter(value);
    resetCurrent();
  };

  const handleSave = (data) => {
    mainApi
      .saveMovie(data)
      .then((resp) => setSavedMovies([...savedMovies, resp]));
  };

  const handleDelete = (id) => {
    mainApi
      .deleteMovie(id)
      .then(() =>
        setSavedMovies(savedMovies.filter((movie) => movie._id !== id))
      );
  };

  return (
    <Container className={styles.moviessearch}>
      <SearchForm
        onSubmit={handleSearch}
        value={filter}
        className={styles.moviessearch__search}
      >
        <Switcher
          name="shorts"
          onChange={(e) => {
            setShorts(e.target.checked)
            sessionStorage.setItem("shorts", e.target.checked )
          }}
          value={shorts}
        >
          Короткометражки
        </Switcher>
      </SearchForm>

      {filteredMovies.length > 0 && !error && (
        <MoviesList
          key={filteredMovies}
          movies={filteredMovies.slice(0, current)}
          button={(movie) => {
            const saved = savedMovies.find(
              (el) => el.movieId === movie.movieId
            );
            return saved ? (
              <IconRoundButton
                onClick={() => handleDelete(saved._id)}
                variant={"favvis"}
              />
            ) : (
              <IconRoundButton
                onClick={() => handleSave(movie)}
                variant={"fav"}
              />
            );
          }}
        />
      )}

      {isLoading && <Preloader />}

      {filteredMovies.length === 0 && !error && filter && !isLoading && (
        <p>Ничего не найдено...</p>
      )}

      {error && (
        <p>
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз.
        </p>
      )}

      {current < filteredMovies.length && (
        <Button
          onClick={loadMore}
          variant="gray"
          className={styles.moviessearch__more}
        >
          Ещё
        </Button>
      )}
    </Container>
  );
}

export default MoviesSearch;
