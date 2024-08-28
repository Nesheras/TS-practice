import { Link } from "react-router-dom";
import { ProductCardProps } from "./ProductCard.Props";
import s from "./ProductCard.module.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Store/store";
import { cartActions } from "../../Store/cart.slice";
import { MouseEvent } from "react";
export function ProductCard(props: ProductCardProps) {
  const dispath = useDispatch<AppDispatch>();
  const add = function (e: MouseEvent) {
    e.preventDefault();
    dispath(cartActions.add(props.id));
  };
  return (
    <Link to={`/product/${props.id}`} style={{ textDecoration: "none" }}>
      <div className={s["card"]}>
        <div
          className={s["head"]}
          style={{
            backgroundImage: `url(${props.image})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "100% 100%",
          }}
        >
          <div className={s["price"]}>
            {props.price}&nbsp;
            <span className={s["currency"]}>P</span>
          </div>
          <button className={s["cardButton"]} onClick={(e) => add(e)}>
            <img
              className={s["cardButtonImg"]}
              src="cart2.svg"
              alt="Добавить в избранное"
            />
          </button>
          <div className={s["rating"]}>
            {props.rating}&nbsp;
            <img className={s["star"]} src="starIcon.svg" alt="Иконка звезды" />
          </div>
        </div>

        <div className={s["footer"]}>
          <h2 className={s["title"]}>{props.name}</h2>
          <div className={s["description"]}>{props.ingredients}</div>
        </div>
      </div>
    </Link>
  );
}
