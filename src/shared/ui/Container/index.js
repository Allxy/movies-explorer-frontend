import classNames from "classnames";
import styles from "./Container.module.css";

function Container({ component: C = "div", children, className, ...rest }) {
  return (
    <C className={classNames(styles.container, className)} {...rest}>
      {children}
    </C>
  );
}

export default Container;
