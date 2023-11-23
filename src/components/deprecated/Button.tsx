import React, { Children } from "react";

interface Props {
  children: string;
  onClick: () => void;
  color?: "info" | "primary" | "secondary";
}

const Button = ({ children, onClick, color = "info" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
