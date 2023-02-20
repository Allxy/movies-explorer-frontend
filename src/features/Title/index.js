import classNames from "classnames";
import { Heading } from "../../shared";
import styles from "./Title.module.css";

function Title({ children, className }) {
  return (
    <Heading component="h2" className={classNames(styles.title, className)}>
      {children}
    </Heading>
  );
}

export default Title;
