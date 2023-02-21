import { NavLink } from "react-router-dom";
import { useSession } from "../../entities/Session";
import { Auth } from "../../features";
import { Link, Input } from "../../shared";
import { mainApi } from "../../shared/api/MainApi";
import { useFormWithValidation } from "../../shared/hooks/useForm";

function Signin() {
  const { values, errors, handleChange, isValid } = useFormWithValidation();
  const [user, setSession] = useSession();

  const onSubmit = (e) => {
    e.preventDefault();
    return mainApi.login(values).then((data) => {
      mainApi.setToken(data.token);
      mainApi.check().then((data) => {
        setSession(data);
      });
    });
  };

  console.log(user);

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
      isValid={!isValid}
      onSubmit={onSubmit}
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
