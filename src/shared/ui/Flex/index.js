import classNames from "classnames";
import styles from "./Flex.module.css";

function Flex({
  component: C = "div",
  align,
  justify,
  direction,
  wide,
  className,
  children,
}) {
  return (
    <C
      className={classNames(
        styles.flex,
        align && styles["flex_align_" + align],
        justify && styles["flex_justify_" + justify],
        direction && styles["flex_direction_" + direction],
        wide && styles["flex_wide"],
        className
      )}
    >
      {children}
    </C>
  );
}

export default Flex;
