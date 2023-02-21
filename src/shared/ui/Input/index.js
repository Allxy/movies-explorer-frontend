import classNames from "classnames";
import styles from "./Input.module.css";

function Input({ label, error, name, type }) {
  return (
    <>
      <label className={styles.input}>
        {label}
        <input
          name={name}
          type={type}
          className={classNames(
            styles.input__field,
            error && styles.input__field_error
          )}
        ></input>
        <span
          className={classNames(styles.error, error && styles.error_active)}
        >
          {error}
        </span>
      </label>
    </>
  );
}

export default Input;
