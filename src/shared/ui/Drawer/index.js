import classNames from "classnames";
import { createPortal } from "react-dom";
import styles from "./Drawer.module.css";

const portalRoot = document.getElementById("portal");

function Drawer({ children, isOpened, onClose, className }) {
  return createPortal(
    <section
      className={classNames(styles.drawer, isOpened && styles.drawer_opened)}
    >
      <div className={classNames(styles.drawer__panel, className)}>
        <button className={styles.drawer__close} onClick={onClose}></button>
        {children}
      </div>
    </section>,
    portalRoot
  );
}

export default Drawer;
