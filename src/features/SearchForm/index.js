import classNames from "classnames";
import { useState } from "react";
import { Button, Flex, Switcher } from "../../shared";
import styles from "./SearchForm.module.css";

function SearchForm({ className }) {
  const [enabled, setEnabled] = useState(false);

  return (
    <form className={classNames(styles.search, className)}>
      <Flex className={styles.search__field}>
        <input placeholder="Фильм" required className={styles.search__input}></input>
        <Button variant="blue" className={styles.search__button}>
          Поиск
        </Button>
      </Flex>
      <Flex className={styles.search__constols}>
        <Switcher value={enabled}>Короткометражки</Switcher>
      </Flex>
    </form>
  );
}

export default SearchForm;
