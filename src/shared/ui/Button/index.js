import classNames from "classnames";
import styles from "./Button.module.css";

function Button({
  component: C = "button",
  variant = "outline",
  className,
  children,
  ...rest
}) {
  return (
    <C
      className={classNames(
        styles.button,
        styles["button_variant_" + variant],
        className
      )}
      {...rest}
    >
      {children}
    </C>
  );
}

export default Button;
