import classNames from "classnames";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Button from "../../shared/ui/Button";
import Container from "../../shared/ui/Container";
import Flex from "../../shared/ui/Flex";
import Link from "../../shared/ui/Link";
import Logo from "../../shared/ui/Logo";
import { Link as RouterLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header({ className }) {
  const [isLog, setLog] = useState(false);
  const loc = useLocation();

  return (
    <header
      className={classNames(
        styles.header,
        className,
        loc.pathname === "/" && styles.header_main
      )}
    >
      <Container className={styles.header__content}>
        <Link className={styles.header__logo} component={NavLink} to="/">
          <Logo />
        </Link>
        <Flex component="nav" align="center" className={styles.header__nav}>
          {isLog ? (
            <>
              <ul className={styles.header__links}>
                <li>
                  <Link component={NavLink} to="/movies">
                    Фильмы
                  </Link>
                </li>
                <li>
                  <Link component={NavLink} to="/saved-movies">
                    Сохранённые фильмы
                  </Link>
                </li>
              </ul>
              <Link
                className={styles.header__account}
                component={NavLink}
                to="/profile"
              >
                <span className={styles.header__manicon} />
                Аккаунт
              </Link>
            </>
          ) : (
            <>
              <Link component={NavLink} to="/signup" className={styles.header__reg}>
                Регистрация
              </Link>
              <Button component={RouterLink} to="/signin" variant="green">
                Войти
              </Button>
            </>
          )}
        </Flex>
      </Container>
    </header>
  );
}

export default Header;
