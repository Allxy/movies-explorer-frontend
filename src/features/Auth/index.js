import { Link } from "react-router-dom";
import { Button, Flex, Heading, Logo } from "../../shared";
import styles from "./Auth.module.css";

function Auth({ title, button, children, link, onSubmit, isValid }) {
  return (
    <Flex direction="column" component="main" className={styles.auth}>
      <Link to="/" className={styles.auth__logo}>
        <Logo />
      </Link>
      <Heading component="h1" variant="h2" className={styles.auth__title}>
        {title}
      </Heading>
      <Flex component="form" direction="column" noValidate className={styles.auth__form}>
        {children}
        <Button disabled={isValid} onClick={onSubmit} variant="blue" className={styles.auth__submit}>
          {button}
        </Button>
        {link && <span className={styles.auth__link}>{link}</span>}
      </Flex>
    </Flex>
  );
}

export default Auth;
