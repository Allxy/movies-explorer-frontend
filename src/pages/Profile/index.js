import classNames from "classnames";
import { useState } from "react";
import { useSession } from "../../entities/Session";
import { Button, Flex, Heading } from "../../shared";
import { mainApi } from "../../shared/api/MainApi";
import { useFormWithValidation } from "../../shared/hooks/useForm";
import styles from "./Profile.module.css";

function Profile(params) {
  const [isEdit, setIsEdit] = useState(false);
  const [user, setUser] = useSession();
  const { values, isValid, handleChange } = useFormWithValidation({
    email: user.email,
    name: user.name,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("")
    setIsError(false);
    mainApi
      .userPatch(values)
      .then((data) => {
        setUser(data);
        setIsEdit(false);
        setMessage("Изменения сохранены!");
      })
      .catch((err) => {
        if (err.message === "Email is busy") {
          setMessage("Такой email уже используется!");
        } else if (err.message === "Validation failed") {
          setMessage("Данные не валидны!");
        } else {
          setMessage("Что-то пошло не так!");
        }
        setIsError(true);
      })
      .finally(() => setIsLoading(false));
  };

  const logOut = () => {
    setUser(null);
    sessionStorage.clear();
    mainApi.removeToken();
  };

  const isNew = user.email !== values.email || user.name !== values.name;

  return (
    <Flex direction="column" wide component="main">
      <Flex
        component="form"
        direction="column"
        align="center"
        wide
        className={styles.profile}
      >
        <Heading variant="h2" className={styles.profile__title}>
          Привет, {user.name}!
        </Heading>
        <div className={styles.profile__info}>
          <label className={styles.profile__label}>
            Имя
            <input
              disabled={!isEdit}
              name="name"
              type="text"
              minLength={2}
              maxLength={30}
              value={values.name}
              onChange={handleChange}
              className={styles.profile__input}
              required
            ></input>
          </label>
          <label className={styles.profile__label}>
            E-mail
            <input
              disabled={!isEdit}
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              required
              className={styles.profile__input}
            ></input>
          </label>
        </div>
        <Flex className={styles.profile__controls} direction="column">
          {message && (
            <p
              className={classNames(
                styles.profile__message,
                isError && styles.profile__message_error
              )}
            >
              {message}
            </p>
          )}
          {isEdit ? (
            <Button
              type="submit"
              variant="transparent"
              disabled={!isValid || !isNew || isLoading}
              onClick={handleSave}
            >
              {isLoading ? "Сохранение..." : "Сохранить"}
            </Button>
          ) : (
            <Button
              type="button"
              variant="transparent"
              onClick={(e) => {
                e.preventDefault();
                setIsEdit(true);
                setMessage("")
              }}
            >
              Редактировать
            </Button>
          )}

          <Button
            onClick={logOut}
            className={styles.profile__exit}
            variant="transparent"
          >
            Выйти из аккаунта
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Profile;
