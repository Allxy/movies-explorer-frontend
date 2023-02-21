import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { Drawer, Flex, IconRoundButton, Link } from "../../shared";
import styles from "./NavigationSidebar.module.css";

function NavigationSidebar({ links, isOpened, onClose }) {
  return (
    <Drawer onClose={onClose} isOpened={isOpened} className={styles.navigation}>
      <Flex className={styles.navigation__links}>
        <li>
          <Link
            className={(isActive) =>
              classNames(
                styles.navigation__link,
                isActive && styles.navigation__link_active
              )
            }
            component={NavLink}
            to="/"
          >
            Главная
          </Link>
        </li>
        {links.map((link, i) => (
          <li key={i}>
            <Link
              className={(isActive) =>
                classNames(
                  styles.navigation__link,
                  isActive && styles.navigation__link_active
                )
              }
              component={NavLink}
              to={link.url}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </Flex>
      <IconRoundButton
        component={NavLink}
        className={styles.navigation__account}
        variant="man"
        to="/profile"
      >
        Аккаунт
      </IconRoundButton>
    </Drawer>
  );
}

export default NavigationSidebar;
