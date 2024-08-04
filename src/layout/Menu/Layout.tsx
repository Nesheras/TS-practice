import { NavLink, Outlet, useNavigate } from "react-router-dom";
import s from "./Layout.module.css";
import { Button } from "../../components/Button/Button";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store/store";
import { getUserInfo, userActions } from "../../Store/user.slice";
import { useEffect } from "react";

export function Layout() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const profile = useSelector((s: RootState) => s.user.profile);
  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);
  function removeToken() {
    dispatch(userActions.logout());
    navigate("/auth/login");
  }

  return (
    <div className={s["layout"]}>
      <div className={s["sidebar"]}>
        <div className={s["user"]}>
          <img src="chelik.png" alt="" className={s["avatar"]} />
          <div className={s["name"]}>{profile?.name}</div>
          <div className={s["email"]}>{profile?.email}</div>
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
        <Button
          appearence="small"
          className={s["exit"]}
          onClick={() => removeToken()}
        >
          Выход
        </Button>
      </div>
      <div className={s.content}>
        <Outlet />
      </div>
    </div>
  );
}
