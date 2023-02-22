import styles from "./Switcher.module.css";

function Switcher({ value, children, onChange, name }) {
  return (
    <label className={styles.switcher}>
      <input
        checked={value}
        className={styles.switcher__checkbox}
        type="checkbox"
        name={name}
        hidden
        onChange={onChange}
      ></input>
      <span className={styles.switcher__icon}></span>
      {children}
    </label>
  );
}

export default Switcher;
