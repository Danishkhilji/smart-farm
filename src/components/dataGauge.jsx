import React from "react";
import ReactGauge from "react-gauge-component";

const GaugeComponent = ({ value, title }) => {
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
          color: '#EA4228',
          showMark: true
        },
        {
          limit: 40,
          color: '#F58B19',
          showMark: true
        },
        {
          limit: 60,
          color: '#F5CD19',
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

  return (
    <div>
      <ReactGauge {...gaugeOptions} value={value} />

      <div style={{ textAlign: "center", marginTop: "10px", color: "white" }}>{title}</div>    </div>
  );
};

export default GaugeComponent;
