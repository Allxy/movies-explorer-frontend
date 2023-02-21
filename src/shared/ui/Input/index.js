import classNames from "classnames";
import styles from "./Input.module.css";

function Input({ label, error, ...rest }) {
  return (
    <>
      <label className={styles.input}>
        {label}
        <input
          className={classNames(
            styles.input__field,
            error && styles.input__field_error
          )}
          {...rest}
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
