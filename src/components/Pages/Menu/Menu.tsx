import { useGetProductsQuery } from "../../../API/API";

import { Heading } from "../../heading/heading";
import { MenuList } from "../../MenuList/MenuList";

import { Search } from "../../Search/Search";
import s from "./Menu.module.css";

function Menu() {
  const { data = [], isLoading } = useGetProductsQuery([s]);
  if (isLoading) {
    return <div>Загрузка</div>;
  }
  console.log(data);

  return (
    <>
      <div className={s["head"]}>
        <Heading>Меню</Heading>
        <Search placeholder="Введите блюдо или состав"></Search>
      </div>
      <MenuList data={data} />
    </>
  );
}
export default Menu;
