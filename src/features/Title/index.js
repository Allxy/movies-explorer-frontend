import styles from "./Title.module.css";
import Heading from "../../shared/ui/Heading";
import classNames from "classnames";

function Title({ children, className }) {
  return (
    <Heading component="h2" className={classNames(styles.title, className)}>
      {children}
    </Heading>
  );
}

export default Title;
