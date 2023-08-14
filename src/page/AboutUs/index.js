import React from "react";
import classes from "./AboutUs.module.css";
import { Container } from "react-bootstrap";
import Header from "../../components/Navbar";
import Footer from "../../components/Footer";
const AboutUs = () => {
  const aboutUsData = [
    {
      id: "1",
      heading: "Live Sensor Data",
      content: ` On the "Live Sensor Data" page, our web application
    will continuously fetch real-time data from the Ubidots IoT platform,
    which is integrated into our web. The data will include information
    from various sensors, such as temperature, humidity, light levels, and
    soil moisture.`,
    },
    {
      id: "2",
      heading: " Data Visualization",
      content: `The fetched data will be beautifully visualized on
    the "Live Sensor Data" page through interactive charts and graphs.
    Users will be able to see the current values of each sensor in
    real-time. The dynamic charts will update automatically as new data is
    received.`,
    },
    {
      id: "3",
      heading: "Comparison with Ideal Conditions",
      content: ` Simultaneously, your web application
      will compare the real-time sensor data with the predefined ideal
      conditions for each parameter. The ideal conditions represent the
      optimal range in which the plants thrive.`,
    },
    {
      id: "4",
      heading: "Status Generation",
      content: `Based on the comparison, your web application will
      generate a status for each sensor, indicating the health of the
      plants' environment. If the real-time sensor data falls within the
      ideal conditions, the status`,
    },
    {
      id: "5",
      heading: "Status Visualization",
      content: `The "MODERATE" status will be prominently
    displayed on the "Live Sensor Data" page, giving users a quick visual
    indication that their plants are currently in good condition. This
    status will be shown next to each sensor parameter, such as
    temperature, humidity, etc.`,
    },
    {
      id: "6",
      heading: "Alerts for Deviations",
      content: `If any sensor data deviates from the ideal
    conditions (either too high or too low), the status will change
    accordingly, indicating that the environment requires attention. In
    such cases, the dashboard will also trigger alerts to notify users of
    the specific parameter that needs adjustment.`,
    },
    {
      id: "7",
      heading: `Data Refresh Timer`,
      content: `To keep the sensor data up-to-date, our web
    application will include a data refresh timer. After every 2 minutes,
    the timer will trigger a new data fetch from the Ubidots cloud,
    providing the latest readings from all sensors.`,
    },
    {
      id: "8",
      heading: "Automatic Update Alerts",
      content: ` Whenever new data is fetched and updated on
    the "Live Sensor Data" page, our web application will automatically
    notify the user of the changes. An update alert will be displayed,
    informing the user that there is a new reading from a specific sensor.`,
    },
    {
      id: "9",
      heading: "Stay Informed in Real-Time",
      content: ` Thanks to the data refresh timer and
    automatic update alerts, users can stay informed about their plants'
    environment in real-time without manually refreshing the page.`,
    },
  ];
  return (
    <div className={classes["main-wrapper"]}>
      <Header />
      <Container>
        <h1 className={classes["main-heading"]}>About us</h1>

        {aboutUsData?.map((data) => (
          <div key={data?.key} className={classes["content-wrapper"]}>
            <h2 className={classes["content-heading"]}>{data?.heading}</h2>
            <p>{data?.content}</p>
          </div>
        ))}
      </Container>

      <Footer />
    </div>
  );
};

export default AboutUs;
