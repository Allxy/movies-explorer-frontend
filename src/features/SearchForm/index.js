import classNames from "classnames";
import { useRef } from "react";
import { Button, Flex, Switcher } from "../../shared";
import styles from "./SearchForm.module.css";

function SearchForm({ className, onSubmit, value, children }) {
  const ref = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    onSubmit(ref.current.value);
  };

  return (
    <form
      onSubmit={handleSearch}
      className={classNames(styles.search, className)}
    >
      <Flex className={styles.search__field}>
        <input
          placeholder="Фильм"
          ref={ref}
          defaultValue={value}
          required
          className={styles.search__input}
        ></input>
        <Button type="submit" variant="blue" className={styles.search__button}>
          Поиск
        </Button>
      </Flex>
      <Flex className={styles.search__constols}>{children}</Flex>
    </form>
  );
}

export default SearchForm;
