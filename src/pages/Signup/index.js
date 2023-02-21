import { NavLink } from "react-router-dom";
import Auth from "../../features/Auth";
import { Link, Input } from "../../shared";

function Signup() {
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
    >
      <Input label="Имя"></Input>
      <Input label="E-mail" error="dsadasd ds das das"></Input>
      <Input label="Пароль" type="password" error="dsadasd"></Input>
    </Auth>
  );
}

export default Signup;
