import classNames from "classnames";
import styles from "./Logo.module.css";

function Logo({className}) {
  return <div className={classNames(styles.logo, className)}></div>;
}

export default Logo
