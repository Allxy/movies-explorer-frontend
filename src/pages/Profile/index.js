import { useState } from "react";
import { Button, Flex, Heading } from "../../shared";
import styles from "./Profile.module.css";

function Profile(params) {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <Flex
      component="main"
      direction="column"
      align="center"
      wide
      className={styles.profile}
    >
      <Heading className={styles.profile__title}>Привет, Виталий!</Heading>
      <div className={styles.profile__info}>
        <label className={styles.profile__label}>
          Имя
          <input
            disabled={!isEdit}
            name="name"
            type="text"
            defaultValue={"Виталий"}
            className={styles.profile__input}
          ></input>
        </label>
        <label className={styles.profile__label}>
          E-mail
          <input
            disabled={!isEdit}
            name="email"
            type="email"
            defaultValue={"pochta@yandex.ru"}
            className={styles.profile__input}
          ></input>
        </label>
      </div>
      <Flex className={styles.profile__controls} direction="column">
        {isEdit ? (
          <Button variant="transparent" onClick={() => setIsEdit(false)}>Сохранить</Button>
        ) : (
          <Button variant="transparent" onClick={() => setIsEdit(true)}>
            Редактировать
          </Button>
        )}

        <Button className={styles.profile__exit} variant="transparent">
          Выйти из аккаунта
        </Button>
      </Flex>
    </Flex>
  );
}

export default Profile;
