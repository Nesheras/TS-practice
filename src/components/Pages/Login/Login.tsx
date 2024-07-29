import { Link } from "react-router-dom";
import { Button } from "../../Button/Button";
import { Heading } from "../../heading/heading";
import { Input } from "../../Input/Input";
import s from "./Login.module.css";
import { FormEvent, useState } from "react";
import { BASE_URL } from "../../../API/API";
import axios from "axios";
export type LoginForm = {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
};
export function Login() {
  const [error, setError] = useState<string | undefined>();
  async function sendLogin(email: string, password: string) {
    try {
      const { data } = await axios.post(
        `${BASE_URL}/pizza-api-demo/auth/login`,
        {
          email,
          password,
        }
      );
      console.log(data);
      setError(undefined);
    } catch (e) {
      if (e instanceof axios.AxiosError) {
        console.log(e);
        setError(e.response?.data.message);
      }
    }
  }
  async function submit(e: FormEvent) {
    e.preventDefault();
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
