import classNames from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Flex, Heading, Logo } from "../../shared";
import styles from "./Auth.module.css";

function Auth({ title, button, children, link, onSubmit, isValid, error }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    onSubmit().finally(() => setIsLoading(false));
  };

  return (
    <Flex direction="column" component="main" className={styles.auth}>
      <Link to="/" className={styles.auth__logo}>
        <Logo />
      </Link>
      <Heading component="h1" variant="h2" className={styles.auth__title}>
        {title}
      </Heading>
      <Flex
        component="form"
        direction="column"
        noValidate
        className={styles.auth__form}
      >
        {children}
        <p
          className={classNames(
            styles.auth__error,
            error && styles.auth__error_active
          )}
        >
          {error}
        </p>
        <Button
          disabled={!isValid || isLoading}
          onClick={handleSubmit}
          variant="blue"
          className={styles.auth__submit}
        >
          {isLoading ? "Загузка..." : button}
        </Button>
        {link && <span className={styles.auth__link}>{link}</span>}
      </Flex>
    </Flex>
  );
}

export default Auth;
