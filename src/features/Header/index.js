import classNames from "classnames";
import styles from "./Header.module.css";

function Header({ className }) {
  return <header className={classNames(styles.header, className)}></header>;
}

export default Header;
