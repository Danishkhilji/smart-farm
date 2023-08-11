import React from "react";
import classes from "./NoData.module.css";
import { ImSearch } from "react-icons/im";
const NoData = ({ text = "No Data Found" }) => {
  return (
    <div className={classes["noData__wrapper"]}>
      <div className={classes["noData__content"]}>
        <ImSearch size={35} color="var(main-color)" />
        <p className={classes["noData__text"]}>{text}</p>
      </div>
    </div>
  );
};
export default NoData;
