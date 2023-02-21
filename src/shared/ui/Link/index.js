import classNames from "classnames";
import { NavLink } from "react-router-dom";
import styles from "./Link.module.css";

function Link({ component: C = "a", variant, className, children, ...rest }) {
  const customClasses = (isActive) =>
    typeof className === "function" ? className(isActive) : className;

  const classes = ({ isActive }) =>
    classNames(
      customClasses(isActive),
      styles.link,
      isActive && styles.link_active,
      variant && styles["link_variant_blue"]
    );

  return (
    <C
      className={C === NavLink ? classes : classes({ isActive: false })}
      {...rest}
    >
      {children}
    </C>
  );
}

export default Link;
