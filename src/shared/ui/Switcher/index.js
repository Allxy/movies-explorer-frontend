import styles from "./Switcher.module.css";

function Switcher({ value, children }) {
  return (
    <label className={styles.switcher}>
      <input
        value={value}
        className={styles.switcher__checkbox}
        type="checkbox"
        hidden
      ></input>
      <span className={styles.switcher__icon}></span>
      {children}
    </label>
  );
}

export default Switcher;
