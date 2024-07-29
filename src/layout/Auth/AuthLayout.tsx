import { Outlet } from "react-router-dom";
import s from "./AuthLayout.module.css";

export function AuthLayout() {
  return (
    <div className={s["layout"]}>
      <div className={s["logo"]}>
        <img src="/logo.jpg" alt="Логотип компании" className={s["logoImg"]} />
      </div>
      <div className={s.content}>
        <Outlet />
      </div>
    </div>
  );
}
