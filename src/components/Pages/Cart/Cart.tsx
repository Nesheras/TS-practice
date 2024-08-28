import { useSelector } from "react-redux";
import { Heading } from "../../heading/heading";
import { RootState } from "@reduxjs/toolkit/query";
import { CartItem } from "../../cartItem/CartItem";
import { useEffect, useState } from "react";
import { Product } from "../../../Interfaces/product.interface";
import axios from "axios";
import { BASE_URL } from "../../../API/API";

export function Cart() {
  const [cardProducts, setCardProducts] = useState<Product[]>();
  const items = useSelector((s: RootState) => s.cart.items);
  const getItems = async (id: number) => {
    const { data } = await axios.get<Product>(
      `${BASE_URL}/pizza-api-demo/products/${id}`
    );
    return data;
  };
  const loadAllItems = async () => {
    const res = await Promise.all(
      items.map((i: { id: number }) => getItems(i.id))
    );
    setCardProducts(res);
  };
  useEffect(() => {
    loadAllItems();
  }, [items]);
  return (
    <>
      <Heading>Корзина</Heading>
      {items.map((i: { id: number; count: number }) => {
        const product = cardProducts?.find((p) => p.id == i.id);
        if (!product) {
          return;
        }
        return <CartItem count={i.count} {...product} />;
      })}
    </>
  );
}
