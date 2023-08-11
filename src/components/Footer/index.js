import React from "react";
import classes from "./Footer.module.css";
const Footer = ({className}) => {
  return (
    <footer className={[classes["footer"], className].join(" ")}>
      <p>Copyright © website name 2023</p>
    </footer>
  );
};

export default Footer;
