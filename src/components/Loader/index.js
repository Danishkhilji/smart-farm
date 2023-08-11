import React from "react";
import classes from "./Loader.module.css";

import Spinner from "react-bootstrap/Spinner";

const Loader = () => {
  return (
    <div className={classes["loader-wrapper"]}>
      <div className={classes["loader-wrapper__container"]}>
        <Spinner animation="grow" />
        <Spinner animation="grow" />
        <Spinner animation="grow" />
      </div>
    </div>
  );
};

export default Loader;
