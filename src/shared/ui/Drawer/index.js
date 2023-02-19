import classNames from "classnames";
import { createPortal } from "react-dom";
import styles from "./Drawer.module.css";

const portalRoot = document.getElementById("portal");

function Drawer({ children, className }) {
  return createPortal(
    <section className={classNames(styles.drawer)}>
      <div className={classNames(styles.drawer__panel, className)}>
        {children}
      </div>
    </section>,
    portalRoot
  );
}

export default Drawer;
