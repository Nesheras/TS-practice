import { useState } from "react";
import s from "./Input.module.css";
import cn from "classnames";
import { InputProps } from "./Input.Props";
export function Input({ plaseholder }: InputProps) {
  const [inner, setInner] = useState<string>("");

  return (
    <input
      className={cn(s.input)}
      placeholder={plaseholder}
      type="text"
      value={inner}
      onChange={(e) => setInner(e.target.value)}
    />
  );
}
