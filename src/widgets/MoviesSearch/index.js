import MoviesList from "../../features/MoviesList";
import SearchForm from "../../features/SearchForm";
import { Button, Container } from "../../shared";
import IconRoundButton from "../../shared/ui/IconRoundButton";
import styles from "./MoviesSearch.module.css";
import pic from "../../shared/images/pic.png";

function MoviesSearch(params) {
  return (
    <Container className={styles.moviessearch}>
      <SearchForm className={styles.moviessearch__search} />
      <MoviesList
        movies={[
          { name: "33 слова о дизайне", image: pic, time: 100, isSaved: true },
          { name: "dadsa", image: pic, time: 100 },
          { name: "dadsa", image: pic, time: 100 },
          { name: "dadsa", image: pic, time: 100 },
          { name: "dadsa", image: pic, time: 100 },
          { image: pic, time: 100 },
        ]}
        button={({ isSaved, id }) => (
          <IconRoundButton variant={isSaved ? "favvis" : "fav"} />
        )}
      />
      <Button variant="gray" className={styles.moviessearch__more}>
        Ещё
      </Button>
    </Container>
  );
}

export default MoviesSearch;
