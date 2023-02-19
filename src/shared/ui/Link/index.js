import classNames from "classnames";
import styles from "./Link.module.css";

function Link({ className, children, ...rest }) {
  return (
    <a className={classNames(className, styles.link)} {...rest}>
      {children}
    </a>
  );
}

export default Link;
