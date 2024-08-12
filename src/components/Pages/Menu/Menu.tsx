import { Heading } from "../../heading/heading";
import { ProductCard } from "../../ProductCard/ProductCard";
import { Search } from "../../Search/Search";
import s from "./Menu.module.css";

export function Menu() {
  return (
    <>
      <div className={s["head"]}>
        <Heading>Заголовок</Heading>
        <Search placeholder="Введите блюдо или состав"></Search>
      </div>
      <div>
        <ProductCard
          id={1}
          title="Наслаждение"
          description="Салями,руккола,помидоры,оливки"
          price={200}
          rating={4.5}
          image="/public/pizza.jpg"
        />
      </div>
    </>
  );
}
