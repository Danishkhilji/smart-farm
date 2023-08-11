import classes from "./KeyFeature.module.css";
const KeyFeature = ({ Icon, title,customStyle }) => {
  return (
    <div className={classes["card"]} style={customStyle}>
      {Icon}
     {title && <p className={classes["name"]}>{title}</p>}
    </div>
  );
};

export default KeyFeature;
