import React, { Children } from "react";
import classes from "./Button.module.css";
const Button = ({ className, children, label, onClick }) => {
  return (
    <button
      className={[classes["button"], className].join(" ")}
      onClick={onClick}
    >
      {label || children}
    </button>
  );
};

export default Button;
