import classNames from "classnames";
import { useEffect, useState } from "react";
import { Link as RouterLink, NavLink, useLocation } from "react-router-dom";
import { useSession } from "../../entities/Session";
import NavigationSidebar from "../../features/NavigationSidebar";
import {
  Button,
  Container,
  Flex,
  IconRoundButton,
  Link,
  Logo,
} from "../../shared";
import styles from "./Header.module.css";

const links = [
  { title: "Фильмы", url: "/movies" },
  { title: "Сохраненные фильмы", url: "/saved-movies" },
];

function Header({ className }) {
  const [user] = useSession();
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    setIsMenuOpened(false);
  }, [loc]);

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
          {user && (
            <>
              <ul className={styles.header__links}>
                {links.map((link, i) => (
                  <li key={i}>
                    <Link
                      className={styles.header__links}
                      component={NavLink}
                      to={link.url}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <IconRoundButton component={NavLink} to="/profile" variant="man">
                Аккаунт
              </IconRoundButton>
            </>
          )}
        </Flex>
        {!user ? (
          <Flex component="nav" align="center" className={styles.header__auth}>
            <Link
              component={RouterLink}
              to="/signup"
              className={styles.header__reg}
            >
              Регистрация
            </Link>
            <Button component={RouterLink} to="/signin" variant="green">
              Войти
            </Button>
          </Flex>
        ) : (
          <button
            className={styles.header__burger}
            onClick={() => setIsMenuOpened(true)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}
        <NavigationSidebar
          links={links}
          isOpened={isMenuOpened}
          onClose={() => setIsMenuOpened(false)}
        />
      </Container>
    </header>
  );
}

export default Header;
