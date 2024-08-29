import { useNavigate } from "react-router-dom";
import { Button } from "../../Button/Button";
import s from "./Succes.module.css";
export function Succes() {
  const nav = useNavigate();
  return (
    <div className={s["succes"]}>
      <img src="/logo.jpg" alt="Логотип компании" />
      <p className={s["text"]}>Ваш заказ успешно оформлен</p>
      <Button appearence="big" onClick={() => nav("/")}>
        Сделать новый заказ
      </Button>
    </div>
  );
}
