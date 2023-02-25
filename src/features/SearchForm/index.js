import classNames from "classnames";
import { useRef, useState } from "react";
import { Button, Flex, Switcher } from "../../shared";
import styles from "./SearchForm.module.css";

function SearchForm({ className, onSubmit, value, children }) {
  const ref = useRef(null);
  const [error, setError] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e);
    if(e.target.checkValidity()) {
      setError(false)
      onSubmit(ref.current.value);
    } else {
      setError(true)
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className={classNames(styles.search, className)}
      noValidate
    >
      <Flex className={styles.search__field}>
        <input
          placeholder={error ? "Введите ключевое слово" : "Фильм"}
          ref={ref}
          defaultValue={value}
          required
          className={classNames(styles.search__input, error && styles.search__input_error)}
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
