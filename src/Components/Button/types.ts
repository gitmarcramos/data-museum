import { ButtonHTMLAttributes } from "react";

export type ButtonProps = {
    children: string;
    onClick?: () => void;
  } & StyledButtonProps &
    Pick<ButtonHTMLAttributes<HTMLButtonElement>, "type">;
  
  export type StyledButtonProps = {
    className?: string;
    $emphasis: "primary" | "secondary";
  };