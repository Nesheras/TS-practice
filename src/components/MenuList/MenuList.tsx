import { Product } from "../../Interfaces/product.interface";
import { ProductCard } from "../ProductCard/ProductCard";
import s from "./MenuList.module.css";
import { PropsMenu } from "./MenuListProps";
export function MenuList({ data }: PropsMenu) {
  return (
    <div className={s["body"]}>
      {data.length ? (
        data.map((rec: Product) => (
          <ProductCard
            key={rec.id}
            id={rec.id}
            name={rec.name}
            price={rec.price}
            ingredients={rec.ingredients.join(",")}
            rating={rec.rating}
            image={rec.image}
          />
        ))
      ) : (
        <div>Что-то пошло не так</div>
      )}
    </div>
  );
}
