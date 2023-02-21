import { NavLink } from "react-router-dom";
import Auth from "../../features/Auth";
import { Link, Input } from "../../shared";
import { mainApi } from "../../shared/api/MainApi";
import { useFormWithValidation } from "../../shared/hooks/useForm";

function Signup() {
  const { values, errors, handleChange, isValid } = useFormWithValidation();

  const onSubmit = (e) => {
    e.preventDefault();
    return mainApi.register(values);
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
      isValid={!isValid}
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
