import React from "react";
import { Nav, Navbar } from "react-bootstrap";
// import { logo } from "../../constant/imagePath";
import logo from '../../assets/logo.png'
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

const Header = ({ withLogo = true, className }) => {
  const actionSelected = (actions) => {
    console.log("dashboard menu", actions);
  };
  return (
    <header className={[classes["header"], className].join(" ")}>
      <Navbar
        expand="lg"
        className={[classes["adjust-padding"], classes["main-navbar"]].join(
          " "
        )}
      >
        {withLogo &&
          <Navbar.Brand>
            <Link to="/" className={classes["brand-link"]}>
              <span className={classes["brand-logo"]}>
                <img src={logo} alt="logo" style={{ width: "50px", height: "50px" }} />
              </span>
              <span
                style={{
                  color: "#ffffff",
                  marginLeft: "10px",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                Smart Farming
              </span>
            </Link>
          </Navbar.Brand>
        }
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={["ms-auto", classes["ps-2rem"]].join(" ")}>
            <Link className={classes["mainNavLink"]} to={`/features`}>Features</Link>
            <Link className={classes["mainNavLink"]} to={`/dashboard2`}>Dashboard</Link>
            {/* <Link className={classes["mainNavLink"]} to={`/about`}>About </Link> */}
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
