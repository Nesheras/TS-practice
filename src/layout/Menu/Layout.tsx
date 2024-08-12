import { NavLink, Outlet } from "react-router-dom";
import s from "./Layout.module.css";
import { Button } from "../../components/Button/Button";
import cn from "classnames";
export function Layout() {
  return (
    <div className={s["layout"]}>
      <div className={s["sidebar"]}>
        <div className={s["user"]}>
          <img src="chelik.png" alt="" className={s["avatar"]} />
          <div className={s["name"]}>Сергей Мещеряков</div>
          <div className={s["email"]}>karoshop@mail.ru</div>
        </div>
        <div className={s["menu"]}>
          <div className={s["menuConteyner"]}>
            <img src="/menuo.svg" />
            <NavLink
              to="/"
              className={({ isActive }) =>
                cn(s["link"], { [s.active]: isActive })
              }
            >
              Меню
            </NavLink>
          </div>
          <div className={s["menuConteyner"]}>
            <img src="/carto.svg" className={s["cartImg"]} />
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                cn(s["link"], { [s.active]: isActive })
              }
            >
              Карточка
            </NavLink>
          </div>
        </div>
        <Button className={s["exit"]}>Выход</Button>
      </div>
      <div className={s.content}>
        <Outlet />
      </div>
    </div>
  );
}
