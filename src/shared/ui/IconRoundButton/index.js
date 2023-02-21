import classNames from "classnames";
import styles from "./IconRoundButton.module.css";

function IconRoundButton({
  component: C = "button",
  variant = "close",
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

export default IconRoundButton;
