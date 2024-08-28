import { useDispatch } from "react-redux";
import { CartItemProps } from "./CartItemProps";
import s from "./CartItem.module.css";
import { cartActions } from "../../Store/cart.slice";
import { AppDispatch } from "../../Store/store";
export function CartItem(props: CartItemProps) {
  const dispath = useDispatch<AppDispatch>();
  const increase = function () {
    dispath(cartActions.add(props.id));
  };
  const descriase = function () {
    dispath(cartActions.add(props.id));
  };
  const remove = function () {
    dispath(cartActions.add(props.id));
  };
  return (
    <div className={s["item"]}>
      <div
        className={s["image"]}
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
        }}
      ></div>
      <div className={s["description"]}>
        <div className={s["name"]}>{props.name}</div>
        <div className={s["currency"]}> {props.price}&nbsp;P</div>
      </div>
      <div className={s["actions"]}>
        <button className={s["button"]} onClick={descriase}>
          <img alt="Удалить из корзины" />
        </button>
        <div>{props.count}</div>
        <button className={s["button"]} onClick={increase}>
          <img alt="Добавить в избранное" />
        </button>
        <button className={s["cardButton"]} onClick={remove}>
          <img alt="Удалить все" />
        </button>
      </div>
    </div>
  );
}
