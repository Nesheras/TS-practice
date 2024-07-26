import { useState } from "react";
import s from "./Search.module.css";
import cn from "classnames";
import { SearchProps } from "./Search.Props";

export function Search({ placeholder }: SearchProps) {
  const [inner, setInner] = useState<string>("");

  return (
    <div className={s["input-wriper"]}>
      <img
        className={s["searchIcon"]}
        src="/search-icon.svg"
        alt="Иконка лупы"
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
