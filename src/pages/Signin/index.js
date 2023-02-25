import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSession } from "../../entities/Session";
import { Auth } from "../../features";
import { Input, Link } from "../../shared";
import { mainApi } from "../../shared/api/MainApi";
import { useFormWithValidation } from "../../shared/hooks/useForm";

function Signin() {
  const { values, errors, handleChange, isValid } = useFormWithValidation();
  const [, setSession] = useSession();
  const [error, setError] = useState("");

  const onSubmit = async () => {
    try {
      setError("");
      const { token } = await mainApi.login(values);
      mainApi.setToken(token);
      const userData = await mainApi.check();
      setSession(userData);
    } catch (err) {
      if(err.message === "Validation failed")
        setError("Не валидные данные для входа!");
      else if(err.message === "Wrong email or password")
        setError("Неверный email или пароль!");
      else 
        setError("Что-то пошло не так...");
      mainApi.removeToken();
      console.error(err);
    }
  };

  return (
    <Auth
      title="Рады видеть!"
      button={"Войти"}
      link={
        <span>
          Уже зарегистрированы?{" "}
          <Link variant="blue" component={NavLink} to="/signup">
            Регистрация
          </Link>
        </span>
      }
      isValid={isValid}
      onSubmit={onSubmit}
      error={error}
    >
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

export default Signin;
