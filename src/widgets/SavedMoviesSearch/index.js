import MoviesList from "../../features/MoviesList";
import SearchForm from "../../features/SearchForm";
import { Container } from "../../shared";
import IconRoundButton from "../../shared/ui/IconRoundButton";
import styles from "./SavedMoviesSearch.module.css";
import pic from "../../shared/images/pic.png";

function SavedMoviesSearch(params) {
  return (
    <Container className={styles.savedmoviessearch}>
      <SearchForm className={styles.savedmoviessearch__search} />
      <MoviesList
        movies={[
          { name: "33 слова о дизайне", image: pic, time: 100, isSaved: true  },
          { name: "Привет Андрей", image: pic, time: 160 },
          { name: "50 оттенков фронтенда", image: pic, time: 100 },
          { name: "Приключения шарика", image: pic, time: 110 },
          { name: "Бить или не бить", image: pic, time: 100},
          { image: pic, time: 100},
        ]}
        button={({id}) => (
          <IconRoundButton variant="close" />
        )}
      />
    </Container>
  );
}

export default SavedMoviesSearch;
