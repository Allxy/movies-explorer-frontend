import classNames from "classnames";
import styles from "./Container.module.css";

function Container({ component: C = "div", children, className }) {
  return <C className={classNames(styles.container, className)}>{children}</C>;
}

export default Container;
