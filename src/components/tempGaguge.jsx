import React from "react";
import Thermometer from "react-thermometer-component";
import "./gauge.css";

const styles = {
  dial: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    padding: "20px",
  },
  title: {
    fontSize: "1em",
    color: "white",
    marginTop: "15px",
  },
  thermometer: {
    "& .react-thermometer-temperature": {
      color: "white",
    },
  },
};

const TemperatureGauge = ({ value, title,message }) => {
  const gradientColors = {
    0: "red",
    50: "green",
  };

  return (
    <div style={styles.dial}>
      <Thermometer
        theme="light"
        value={value}
        max="50"
        steps="1"
        format="°C"
        size="normal"
        height="180"
        gradient={gradientColors}
        className={styles.thermometer}
      />
      <div style={styles.title}>
        {title}: {value}°C
      </div>
      <div style={{ textAlign: "center", marginTop: "10px", color: message === "Optimal" ? "white" : "red" }}>
        {message}
      </div>  
    </div>
  );
};

export default TemperatureGauge;
