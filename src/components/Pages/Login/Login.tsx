import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../Button/Button";
import { Heading } from "../../heading/heading";
import { Input } from "../../Input/Input";
import s from "./Login.module.css";
import { FormEvent, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/store";
import { login, userActions } from "../../../Store/user.slice";

export type LoginForm = {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
};
export function Login() {
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();
  const jwt = useSelector((s: RootState) => s.user.jwt);
  const error = useSelector((s: RootState) => s.user.loginState);
  useEffect(() => {
    if (jwt) {
      navigate("/");
    }
  }, [jwt, navigate]);
  async function sendLogin(email: string, password: string) {
    dispatch(login({ email, password }));
  }
  async function submit(e: FormEvent) {
    e.preventDefault();
    dispatch(userActions.clearLoginError());
    const target = e.target as typeof e.target & LoginForm;
    const { email, password } = target;
    console.log(email.value);
    await sendLogin(email.value, password.value);
  }
  s;
  return (
    <div className={s["login"]}>
      {error && <div className={s["error"]}>{error}</div>}
      <Heading>Вход</Heading>
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
        </div>
        <Button appearence="big">Вход</Button>
      </form>
      <div className={s["links"]}>
        <div>Нет аккаунта?</div>
        <Link to="/auth/register">Зарегистрироваться </Link>
      </div>
    </div>
  );
}
