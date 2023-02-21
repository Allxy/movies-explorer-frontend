import { NavLink } from "react-router-dom";
import Auth from "../../features/Auth";
import { Link } from "../../shared";
import Input from "../../shared/ui/Input";

function Signin() {
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
    >
      <Input label="E-mail" type="email" error="dsadasd ds das das"></Input>
      <Input label="Пароль" type="password" error="dsadasd"></Input>
    </Auth>
  );
}

export default Signin;
