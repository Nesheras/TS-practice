import { useState } from "react";
import s from "./Input.module.css";
import cn from "classnames";
import { InputProps } from "./Input.Props";
export function Input({ placeholder, name }: InputProps) {
  const [inner, setInner] = useState<string>("");

  return (
    <input
      name={name}
      className={cn(s.input)}
      placeholder={placeholder}
      type="text"
      value={inner}
      onChange={(e) => setInner(e.target.value)}
    />
  );
}
