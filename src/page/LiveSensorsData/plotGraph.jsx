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

const PlotGraph = () => {
  const [data, setData] = useState([]);
  const [temperatureValue, setTemperatureValue] = useState(22);
  const [phValue, setPhValue] = useState(6.2);
  const [ldrValue, setLdrValue] = useState(300);
  const [waterLevelValue, setWaterLevelValue] = useState(300);
  const dispatch = useDispatch();
  const notificationData = useSelector(state => state.notification); // Get the notification data from the Redux store
console.log(notificationData,"notificationData")
  const fetchApiData = () => {
    
    const channel_id = "2228063";
    const api_key = "DHRDGVCGANT72E08";
    const api_url = `https://api.thingspeak.com/channels/${channel_id}/feeds.json?api_key=${api_key}`;

    axios
      .get(api_url)
      .then((response) => {
        setData(response.data.feeds);
        // Update gauge values
        if (response.data.feeds.length > 0) {
          const latestData = response.data.feeds[response.data.feeds.length - 1];
          // setTemperatureValue(parseFloat(latestData.field1));
          // setPhValue(parseFloat(latestData.field3));
          // setLdrValue(parseFloat(latestData.field2));
          // setWaterLevelValue(parseFloat(latestData.field4));
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchApiData();
    const interval = setInterval(fetchApiData, 3000000);
    return () => clearInterval(interval);
  }, []);

  const field1Data = data.map((item) => ({
    name: item.created_at,
    value: parseFloat(item.field1),
  }));
  const field2Data = data.map((item) => ({
    name: item.created_at,
    value: parseFloat(item.field2),
  }));
  const field3Data = data.map((item) => ({
    name: item.created_at,
    value: parseFloat(item.field3),
  }));
  const field4Data = data.map((item) => ({
    name: item.created_at,
    value: parseFloat(item.field4),
  }));

  const temperatureAlert = validateTemperature(temperatureValue);
  const waterLevelAlert = validateWaterLevel(waterLevelValue);
  const phAlert = validatePh(phValue);
  const ldrAlert = validateLdr(ldrValue);


  useEffect(() => {
    // Check if any of the values are not "Optimal" and add their data to the notification state
    if (temperatureAlert !== "Optimal") {
      dispatch(addNotificationData({
        field: 'Temperature',
        value: temperatureValue,
        message: temperatureAlert,
      }));
    }
    if (waterLevelAlert !== "Optimal") {
      dispatch(addNotificationData({
        field: 'Water Level',
        value: waterLevelValue,
        message: waterLevelAlert,
      }));
    }
    if (phAlert !== "Optimal") {
      dispatch(addNotificationData({
        field: 'ph',
        value: phValue,
        message: phAlert,
      }));
    }
    if (ldrAlert !== "Optimal") {
      dispatch(addNotificationData({
        field: 'ldr',
        value: ldrValue,
        message: ldrAlert,
      }));
    }
  }, [temperatureAlert, waterLevelAlert, phAlert, ldrAlert, dispatch]);

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
