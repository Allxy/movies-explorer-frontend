import MoviesList from "../../features/MoviesList";
import SearchForm from "../../features/SearchForm";
import { Container, Preloader, Switcher } from "../../shared";
import IconRoundButton from "../../shared/ui/IconRoundButton";
import styles from "./SavedMoviesSearch.module.css";
import { useEffect, useMemo, useState } from "react";
import { mainApi } from "../../shared/api/MainApi";
import { useMovieFilter } from "../../entities/Movie";

function SavedMoviesSearch(params) {
  const [savedMovies, setSavedMovies] = useState([]);
  const [shorts, setShorts] = useState(false);
  const [filter, setFilter] = useState("");

  const controllers = useMemo(
    () => ({
      duration: (value) => (shorts ? value <= 40 : value > 40),
    }),
    [shorts]
  );
  const filteredMovies = useMovieFilter(savedMovies, filter, controllers);

  useEffect(() => {
    mainApi.movies().then((data) => setSavedMovies(data.reverse()));
  }, []);

  const handleSearch = (value) => {
    setFilter(value);
  };

  const handleDelete = (id) => {
    mainApi
      .deleteMovie(id)
      .then(() => setSavedMovies(savedMovies.filter((el) => el._id !== id)));
  };

  return (
    <Container className={styles.savedmoviessearch}>
      <SearchForm
        onSubmit={handleSearch}
        value={filter}
        className={styles.savedmoviessearch__search}
      >
        <Switcher
          name="shorts"
          onChange={(e) => setShorts(e.target.checked)}
          value={shorts}
        >
          Короткометражки
        </Switcher>
      </SearchForm>
      {filteredMovies ? (
        <MoviesList
          movies={filteredMovies}
          button={({ _id }) => (
            <IconRoundButton
              onClick={() => handleDelete(_id)}
              variant="close"
            />
          )}
        />
      ) : (
        <Preloader />
      )}
    </Container>
  );
}

export default SavedMoviesSearch;
