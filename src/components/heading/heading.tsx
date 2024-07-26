import { HeadingProps } from "./headingProps";
import s from "./heading.module.css";
import cn from "classnames";
export function Heading({ children, className, ...props }: HeadingProps) {
  return (
    <h1 className={cn(className, s["h1"])} {...props}>
      {children}
    </h1>
  );
}
