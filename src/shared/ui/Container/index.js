import styles from "./Container.module.css";
import classNames from "classnames";

function Container({ component: C = "div", children, className }) {
  return <C className={classNames(styles.container, className)}>{children}</C>;
}

export default Container;
