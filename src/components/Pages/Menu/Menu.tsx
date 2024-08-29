import { useState } from "react";
import { useGetPoductsByNameQuery } from "../../../API/API";

import { Heading } from "../../heading/heading";
import { MenuList } from "../../MenuList/MenuList";

import { Search } from "../../Search/Search";
import s from "./Menu.module.css";
import useDebounce from "../../../helpers/useDebounce";

function Menu() {
  const [inner, setInner] = useState<string>("");
  const debData = useDebounce(inner, 1000);
  const { data = [], isLoading } = useGetPoductsByNameQuery(debData);

  if (isLoading) {
    return <div>Загрузка</div>;
  }

  return (
    <>
      <div className={s["head"]}>
        <Heading>Меню</Heading>
        <Search
          placeholder="Введите блюдо или состав"
          inner={inner}
          setInner={setInner}
        ></Search>
      </div>
      <div className={s["body"]}>
        {data.length != 0 ? (
          <MenuList data={data} />
        ) : (
          <p>По запросу ничего не найдено</p>
        )}
      </div>
    </>
  );
}
export default Menu;
