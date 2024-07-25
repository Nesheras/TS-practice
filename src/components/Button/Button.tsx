import { ButtonProps } from "./Button.Props";
import s from "./Button.module.css";
import cn from "classnames";
export function Button({
  children,
  className,
  appearence = "small",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(s["button"], s["accent"], className, {
        [s["small"]]: appearence == "small",
        [s["big"]]: appearence == "big",
      })}
      {...props}
    >
      {children}
    </button>
  );
}
