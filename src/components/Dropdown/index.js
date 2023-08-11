import React from "react";
import classes from "./Dropdown.module.css";
import Select from "react-select";
// import "./SelectStyles.css";

// import 'react-select/dist/react-select.css';
// import './custom-select.css'; // Import your custom CSS
// const CustomOption = ({ innerProps, label, isSelected }) => {
//   return (
//     <div
//       {...innerProps}
//       style={{
//         backgroundColor: isSelected ? "green" : "white",
//         color: isSelected ? "#fff" : "black",
//         textAlign: "left",
//         cursor: "pointer",
//       }}
//     >
//       {label}
//     </div>
//   );
// };

const Dropdown = ({
  className,
  label,
  value,
  setter,
  options,
  placeholder,
  labelStyle,
  adjustPosition,
}) => {
  // Create a state to track whether the Select is focused
  const [isFocused, setIsFocused] = React.useState(false);
  // const customStyles = {
  //   // option: (defaultStyles, state) => ({
  //   //   ...defaultStyles,
  //   //   // color: state.isSelected ? "#fff" : "#000",

  //   //   // backgroundColor: state.isSelected ? "#F0F9ED" : "white",
  //   //   backgroundColor: state.isFocused ? "green" : "#fff",
  //   //   color: state.isFocused ? "#fff" : "black",
  //   // }),

  //   // control: (defaultStyles) => ({
  //   //   ...defaultStyles,
  //   //   border: "none",
  //   //   boxShadow: "none",
  //   // }),
  //   // singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#000" }),
  // };

  const handleFocus = () => {
    setIsFocused(true);
  };

  // Handle the blur event
  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <>
      <style>
        {`
    .select__control{
            border:none;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            padding: 6px 0px 6px 5px;
    }
    .select__indicator-separator{
    display:none;
    }
    .css-13cymwt-control{
      box-shadow:none;
      border:none;
    }
    .css-t3ipsp-control{
      border-color: transparent !important;
      box-shadow:none;
    }
    .css-1nmdiq5-menu{
      display:block;
      inset-block-start:100%;position:${
        adjustPosition || "absolute"
      };inline-size:100%;
      z-index:999 !important;  
      background-color:pink !important; 
      border-radius:4px;
      margin-bottom:8px;
      margin-top:8px;
      box-sizing:border-box;}
     
      .css-1nmdiq5-menu >div >div:hover, .css-1nmdiq5-menu >div >div:hover, .css-1nmdiq5-menu >div >div:active{
background:red;
color:#fff;
      }



      

    
    .css-1n6sfyn-MenuList div{
     }
     .css-1n6sfyn-MenuList{
      
     }
    .css-1n6sfyn-MenuList div:hover,
    .css-1n6sfyn-MenuList div:active,
    .css-1n6sfyn-MenuList  div:focus,
    .css-1n6sfyn-MenuList  div:visited,
    .css-1n6sfyn-MenuList  div:selected,{
     background-color:red !important;
}


div[class*="myComboBox"] > div[class*="my_select__control--is-focused"] { boxShadow: 0 !important; outline-color: blue !important; outline-style: auto !important; outline-width: 5px !important; }
    `}
      </style>

      <div className={[classes["select-container"], className].join(" ")}>
        {label && (
          <label htmlFor={label} style={labelStyle}>
            {label}
          </label>
        )}
        <div className={classes["select-wrapper"]}>
          <Select
            id={label}
            defaultValue={value}
            onChange={(e) => setter(e)}
            options={options}
            placeholder={placeholder}
            className="custom-select"
            // styles={customStyles}
            onFocus={handleFocus}
            // components={{ Option: CustomOption }}
            onBlur={handleBlur}
          />
        </div>
      </div>
    </>
  );
};

export default Dropdown;
