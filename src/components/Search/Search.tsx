import s from "./Search.module.css";
import cn from "classnames";
import { SearchProps } from "./Search.Props";

export function Search({ placeholder, inner, setInner }: SearchProps) {
  function searchItem() {}
  return (
    <div className={s["input-wriper"]}>
      <img
        className={s["searchIcon"]}
        src="/search-icon.svg"
        alt="Иконка лупы"
        onClick={searchItem}
      />

      <input
        className={cn(s.input)}
        placeholder={placeholder}
        type="text"
        value={inner}
        onChange={(e) => setInner(e.target.value)}
      />
    </div>
  );
}
