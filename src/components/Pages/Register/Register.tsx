import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../Button/Button";
import { Input } from "../../Input/Input";
import { Heading } from "../../heading/heading";
import s from "./Register.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/store";
import { FormEvent, useEffect } from "react";
import { register, userActions } from "../../../Store/user.slice";

export type RegisterForm = {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
  name: {
    value: string;
  };
};
export function Register() {
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();
  const jwt = useSelector((s: RootState) => s.user.jwt);
  const error = useSelector((s: RootState) => s.user.registerErrorMassage);
  useEffect(() => {
    if (jwt) {
      navigate("/");
    }
  }, [jwt, navigate]);
  async function sendLogin(email: string, password: string, name: string) {
    dispatch(register({ email, password, name }));
  }
  async function submit(e: FormEvent) {
    e.preventDefault();
    dispatch(userActions.clearRegisterError());
    const target = e.target as typeof e.target & RegisterForm;
    const { email, password, name } = target;
    console.log(email.value);
    await sendLogin(email.value, password.value, name.value);
  }

  return (
    <div className={s["login"]}>
      {error && <div className={s["error"]}>{error}</div>}
      <Heading>Регистрация</Heading>
      <form onSubmit={submit} action="" className={s["form"]}>
        <div className={s["field"]}>
          <label htmlFor="email">Ваш email</label>
          <Input id="email" name="email" placeholder="Почта"></Input>
        </div>
        <div className={s["field"]}>
          <label htmlFor="email"> Ваш пароль</label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Пароль"
          ></Input>
          <label htmlFor="email">Ваше имя</label>
          <Input id="name" name="name" placeholder="Имя"></Input>
        </div>
        <Button appearence="big">Зарегистрироваться</Button>
      </form>
      <div className={s["links"]}>
        <div>Есть аккаунт?</div>
        <Link to="/auth/login">Вход </Link>
      </div>
    </div>
  );
}
