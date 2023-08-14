import React from "react";
import ReactGauge from "react-gauge-component";

const GaugeComponent = ({ value, title,message }) => {


  
  const gaugeOptions = {
    arcWidth: 20, // Customize the width of the radial gauge
    arcBackgroundColor: "#e0e0e0",
    arcMinValue: 0,
    arcMaxValue: 100,
    arcLabel: "Value",
    arcLabelFontSize: "16px",
    needleColor: "#333",
    needleBaseSize: 10,
    needleWidth: 2,
    rangeLabel: ["Low", "Medium", "High"],
    centralLabel: value.toString(),
    arc: {
      subArcs: [
        {
          limit: 20,
          color: '#F5CD19',
          showMark: true
        },
        {
          limit: 60,
          color: '#5BE12C',
          showMark: true
        },
        {
          limit: 100,
          color: '#5BE12C',
          showMark: true
        },
      ]
    }
  };
  const formatValue = (value) => value.toString();
  return (
    <div>
      <ReactGauge
        {...gaugeOptions}
        value={value}
        labels={{
          valueLabel: {
            fontSize: 40,
            formatTextValue: formatValue, // Use the custom format function
          },
        }}
      />
      <div style={{ textAlign: "center", marginTop: "10px", color: "white" }}>{title}</div>   
      <div style={{ textAlign: "center", marginTop: "10px", color: message === "Optimal" ? "white" : "red" }}>
        {message}
      </div>  
      
      </div>
  );
};

export default GaugeComponent;
