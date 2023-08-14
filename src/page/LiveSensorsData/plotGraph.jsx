import React, { useEffect, useState } from "react";
import "./plotGraph.css";
import axios from "axios";
import Graph from "../../components/graph";
import GaugeComponent from "../../components/dataGauge";
import TemperatureGauge from "../../components/tempGaguge";
import { useDispatch, useSelector } from 'react-redux'; 
import { addNotificationData } from '../../store/notificationReducer'
import {
  validateTemperature,
  validateWaterLevel,
  validatePh,
  validateLdr,
} from "../../utils/FieldRanges";
import jsonData from "../../assets/JSON_data.json";
import { convertDateToFormattedString } from "../../utils/dateUtils";

const PlotGraph = () => {
  const [data, setData] = useState(jsonData); 
  const [temperatureValue, setTemperatureValue] = useState(22);
  const [phValue, setPhValue] = useState(6.2);
  const [ldrValue, setLdrValue] = useState(300);
  const [waterLevelValue, setWaterLevelValue] = useState(300);


  useEffect(() => {
    if (data.length > 0) {
      const latestData = data[data.length - 1];
      console.log(data)
      setTemperatureValue(parseFloat(latestData.field1));
      setPhValue(parseFloat(latestData.field3));
      setLdrValue(parseFloat(latestData.field2));
      setWaterLevelValue(parseFloat(latestData.field4));
    }
  }, [data]);

  const field1Data = data.map((item) => ({
    name: convertDateToFormattedString(item.created_at),
    value: parseFloat(item.field1),
  }));
  const field2Data = data.map((item) => ({
    name: convertDateToFormattedString(item.created_at),
    value: parseFloat(item.field2),
  }));
  const field3Data = data.map((item) => ({
    name: convertDateToFormattedString(item.created_at),
    value: parseFloat(item.field3),
  }));
  const field4Data = data.map((item) => ({
    name: convertDateToFormattedString(item.created_at),
    value: parseFloat(item.field4),
  }));

  const temperatureAlert = validateTemperature(temperatureValue);
  const waterLevelAlert = validateWaterLevel(waterLevelValue);
  const phAlert = validatePh(phValue);
  const ldrAlert = validateLdr(ldrValue);
console.log(field1Data,field2Data)
  return (
    <div>
      <div className="main-section">
        <div className="card">
          <TemperatureGauge title="Temperature" value={temperatureValue} message={temperatureAlert} />
        </div>
        <div className="card">
          <GaugeComponent title="Water Level" value={waterLevelValue} message={waterLevelAlert}/>
        </div>
        <div className="card">
          <GaugeComponent title="pH Level" value={phValue} message={phAlert}/>
        </div>
        <div className="card">
          <GaugeComponent title="LDR Level" value={ldrValue} message={ldrAlert}/>
        </div>
      </div>
      <div className="graph">
        <div style={{ display: "flex" }}>
          <Graph data={field1Data} color="#ff7300" yAxisLabel="temp" />
          <Graph data={field2Data} color="#82ca9d" yAxisLabel="ldr" />
        </div>
        <div style={{ display: "flex" }}>
          <Graph data={field3Data} color="#ff7300" yAxisLabel="ph" />
          <Graph data={field4Data} color="#ffc658" yAxisLabel="water level" />
        </div>
      </div>
    </div>
  );
};

export default PlotGraph;
