import { useState } from "react";
import classes from "./Input.module.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
const Input = ({
  labelStyle = {},
  value,
  setter,
  label,
  type,
  className,
  isSearch = false,
  inputCustomStyle,
  inputEleStyle = {},
  rightIconStyle = {},
  searchIconColor = "",
  searchIconSize,
  RightIcon,
  rightIconSize,
  rightIconColor,
  ...rest
}) => {
  const [passwordSeen, setPasswordSeen] = useState(false);
  const changeHandler = (e) => {
    setter(e?.target?.value);
  };
  const isPassword = type === "password";
  return (
    <div className={[classes["input-container"], className].join(" ")}>
      <div className={classes["input-group"]}>
        {label && (
          <label htmlFor={label} style={labelStyle}>
            {label}
          </label>
        )}
        <div style={inputCustomStyle} className={classes["input-box"]}>
          <input
            style={inputEleStyle}
            type={`${!passwordSeen ? type : "text" || type}   `}
            id={label}
            value={value}
            onChange={changeHandler}
            {...rest}
          />
          {isPassword &&
            (passwordSeen ? (
              <span
                className={classes["pe-12"]}
                onClick={() => {
                  setPasswordSeen(false);
                }}
              >
                <AiFillEye />
              </span>
            ) : (
              <span
                className={classes["pe-12"]}
                onClick={() => {
                  setPasswordSeen(true);
                }}
              >
                <AiFillEyeInvisible />
              </span>
            ))}
          {isSearch && (
            <div className={classes["search-container"]} style={rightIconStyle}>
              <BiSearch
                size={searchIconSize ? searchIconSize : 20}
                color={searchIconColor ? searchIconColor : "#343A40"}
              />
            </div>
          )}
          {RightIcon && (
            <div>
              <span className={classes["pe-12"]}> {<RightIcon />}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Input;
