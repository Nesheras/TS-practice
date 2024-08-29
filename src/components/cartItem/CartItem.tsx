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
    dispath(cartActions.remove(props.id));
  };
  const remove = function () {
    dispath(cartActions.delete(props.id));
  };
  return (
    <div className={s["item"]}>
      <div
        className={s["image"]}
        style={{
          backgroundImage: `url(${props.image})`,
        }}
      ></div>
      <div className={s["description"]}>
        <div className={s["name"]}>{props.name}</div>
        <div className={s["price"]}> {props.price}&nbsp;P</div>
      </div>
      <div className={s["actions"]}>
        <button className={s["minus"]} onClick={descriase}>
          -
        </button>
        <div>{props.count}</div>
        <button className={s["plus"]} onClick={increase}>
          +
        </button>
        <button className={s["remove"]} onClick={remove}>
          Х
        </button>
      </div>
    </div>
  );
}
