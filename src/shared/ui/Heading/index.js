import classNames from "classnames";
import styles from "./Heading.module.css";

function Heading({ component: C = "h1", variant, children, className }) {
  return (
    <C
      className={classNames(
        styles.heading,
        styles[
          "heading_variant_" +
            (variant ? variant : typeof C === "string" ? C : "h1")
        ],
        className
      )}
    >
      {children}
    </C>
  );
}

export default Heading;
