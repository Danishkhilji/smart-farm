import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { logo } from "../../constant/imagePath";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
const MenuItem = ({ Icon, title }) => {
  return (
    <div className={classes["menu-item"]}>
      <span>{Icon}</span>
      <span>{title}</span>
    </div>
  );
};

const Header = ({withLogo = true,className}) => {
  const actionSelected = (actions) => {
    console.log("dashboard menu", actions);
  };
  return (
    <header className={[classes["header"],className].join(" ")}>
      <Navbar
        expand="lg"
        className={[classes["adjust-padding"], classes["main-navbar"]].join(
          " "
        )}
      >
        {withLogo &&<Navbar.Brand href="#home">
          <span className={classes["brand-logo"]}>
            {/* <img src={logo} alt="logo" /> */}
            <h3 style={{ color: "#fff" }}>Logo</h3>
          </span>
        </Navbar.Brand>}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={["ms-auto", classes["ps-2rem"]].join(" ")}>
   
            <Link className={classes["mainNavLink"]} to={`/dashboard2`}>Dashboard</Link>
            <Link className={classes["mainNavLink"]} to={`/about`}>About </Link>
            <Link className={classes["mainNavLink"]} to={`/features`}>Features</Link>
            <Nav.Link href="#link">
              <div className={classes["information__section"]}>
                <div className={classes["information__content"]}></div>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
