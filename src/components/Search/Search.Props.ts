import { InputHTMLAttributes } from "react";

export interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  isValid?: boolean;
  inner: string | undefined;
  setInner: React.Dispatch<React.SetStateAction<string>>;
}
