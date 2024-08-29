import { useDispatch, useSelector } from "react-redux";
import { Heading } from "../../heading/heading";

import { CartItem } from "../../cartItem/CartItem";
import { useEffect, useState } from "react";
import { Product } from "../../../Interfaces/product.interface";
import axios from "axios";
import { BASE_URL } from "../../../API/API";
import s from "./Cart.module.css";
import { Button } from "../../Button/Button";
import { AppDispatch, RootState } from "../../../Store/store";
import { useNavigate } from "react-router-dom";
import { CART_PERSISTENT_STATE, cartActions } from "../../../Store/cart.slice";
import { loadState } from "../../../Store/storage";
const DELIVERY = 169;
export function Cart() {
  const [cardProducts, setCardProducts] = useState<Product[]>();
  const items = useSelector((s: RootState) => s.cart.items);
  const jwt = useSelector((s: RootState) => s.user.jwt);
  const dispath = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const total = items
    ?.map((i: { id: number; count: number }) => {
      const product = cardProducts?.find((p) => p.id === i.id);
      if (!product) {
        return 0;
      }
      return i.count * product.price;
    })
    .reduce((acc, i) => (acc += i), 0);
  const getItems = async (id: number) => {
    const { data } = await axios.get<Product>(
      `${BASE_URL}/pizza-api-demo/products/${id}`
    );
    return data;
  };
  const checkout = async () => {
    await axios.post(
      `${BASE_URL}/pizza-api-demo/order`,
      {
        products: items,
      },
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    dispath(cartActions.clear());
    navigate("/succes");
  };

  const loadAllItems = async () => {
    const res = await Promise.all(
      items?.map((i: { id: number }) => getItems(i.id))
    );

    setCardProducts(res);
  };
  useEffect(() => {
    loadAllItems();
  }, [items]);
  return (
    <>
      <Heading className={s["head"]}>Корзина</Heading>
      {items?.map((i: { id: number; count: number }) => {
        const product = cardProducts?.find((p) => p.id == i.id);
        if (!product) {
          return;
        }

        console.log(loadState(CART_PERSISTENT_STATE));
        return <CartItem key={product.id} count={i.count} {...product} />;
      })}
      <div className={s["line"]}>
        <div className={s["text"]}>Итог </div>
        <div className={s["price"]}>
          {total}&nbsp;<span>P</span>
        </div>
      </div>
      <hr className={s["hr"]} />
      <div className={s["line"]}>
        <div className={s["text"]}> Доставка</div>
        <div className={s["price"]}>
          {DELIVERY} &nbsp;<span>P</span>
        </div>
      </div>
      <hr className={s["hr"]} />
      <div className={s["line"]}>
        <div className={s["text"]}>
          Итог <span className={s["total-count"]}>({items.length})</span>
        </div>
        <div className={s["price"]}>
          {total + DELIVERY}&nbsp;<span>P</span>
        </div>
      </div>
      <div className={s["checkout"]}>
        <Button children="Оформить" appearence="big" onClick={checkout} />
      </div>
    </>
  );
}
