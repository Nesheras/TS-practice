import { Link, Outlet } from "react-router-dom";
import s from "./Layout.module.css";
import { Button } from "../../components/Button/Button";
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
            <Link to="/" className={s["link"]}>
              Меню
            </Link>
          </div>
          <div className={s["menuConteyner"]}>
            <img src="/carto.svg" className={s["cartImg"]} />
            <Link to="/cart" className={s["link"]}>
              Карточка
            </Link>
          </div>
        </div>
        <Button className={s["exit"]}>Выход</Button>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
