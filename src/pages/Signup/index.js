import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSession } from "../../entities/Session";
import Auth from "../../features/Auth";
import { Input, Link } from "../../shared";
import { mainApi } from "../../shared/api/MainApi";
import { useFormWithValidation } from "../../shared/hooks/useForm";

function Signup() {
  const { values, errors, handleChange, isValid } = useFormWithValidation();
  const [, setUser] = useSession();
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    try {
      setError("");
      await mainApi.register(values);
      const { token } = await mainApi.login({
        email: values.email,
        password: values.password,
      });
      mainApi.setToken(token);
      const userData = await mainApi.check();
      setUser(userData);
    } catch (err) {
        setError("Что-то пошло не так...");
      console.error(err);
    }
  };

  return (
    <Auth
      title="Добро пожаловать!"
      button={"Зарегистрироваться"}
      link={
        <>
          Уже зарегистрированы?{" "}
          <Link variant="blue" component={NavLink} to="/signin">
            Войти
          </Link>
        </>
      }
      onSubmit={onSubmit}
      isValid={isValid}
      error={error}
    >
      <Input
        value={values.name ?? ""}
        error={errors.name}
        onChange={handleChange}
        label="Имя"
        name="name"
        minLength="2"
        maxLength="30"
        required
      ></Input>
      <Input
        value={values.email ?? ""}
        error={errors.email}
        onChange={handleChange}
        label="E-mail"
        type="email"
        name="email"
        required
      ></Input>
      <Input
        value={values.password ?? ""}
        error={errors.password}
        onChange={handleChange}
        label="Пароль"
        type="password"
        name="password"
        required
      ></Input>
    </Auth>
  );
}

export default Signup;
