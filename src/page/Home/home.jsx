import React from "react";
// import HomeImage from "../../assets/1.jpeg";

const Home = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  };

  const imgStyle = {
    width: "300px",
    height: "200px",
  };

  return (
    <div style={containerStyle}>
      <h1>IOT ENABLED SMART VERTICAL FARMING MONITORING SYSTEM</h1>
      {/* <img src={HomeImage} alt="Home" style={imgStyle} />
       */}
      <p>
        Welcome to our Plant monitoring web application designed to help you
        take better care of your plants by providing real-time insights and
        controls for optimal growth. Whether you're a seasoned gardener or just
        getting started with indoor or outdoor plants, our dashboard makes plant
        care a breeze.
      </p>
      <h2>Key Features:</h2>
      <ul>
        <li>
          Real-Time Data Visualization: Stay connected to your plants'
          well-being with live updates of essential environmental data. Our
          dashboard presents temperature, humidity, light levels, and soil
          moisture levels in visually appealing and easy-to-understand charts
          and graphs.
        </li>
        <li>
          Hardware Integration: Connect compatible sensors and actuators to your
          plants. Our dashboard supports a wide range of IoT devices and
          microcontrollers, making it easy to integrate your existing plant care
          setup.
        </li>
        <li>
          Real-Time Data Streaming: Once connected, our web application receives
          real-time data from your sensors, updating the dashboard with live
          information on temperature, humidity, and more.
        </li>
        <li>
          Ideal Plant Conditions: Not sure if your plant's environment is
          suitable? Our application compares real-time data with ideal plant
          conditions and alerts you if any parameters are outside the desired
          range, allowing you to take corrective action.
        </li>
      </ul>
      <h2>How It Works:</h2>
      <ol>
        <li>
          Live Sensor Data: On the "Live Sensor Data" page, our web application
          will continuously fetch real-time data from the Ubidots IoT platform,
          which is integrated into our web. The data will include information
          from various sensors, such as temperature, humidity, light levels, and
          soil moisture.
        </li>
        <li>
          Data Visualization: The fetched data will be beautifully visualized on
          the "Live Sensor Data" page through interactive charts and graphs.
          Users will be able to see the current values of each sensor in
          real-time. The dynamic charts will update automatically as new data is
          received.
        </li>
        <li>
          Comparison with Ideal Conditions: Simultaneously, your web application
          will compare the real-time sensor data with the predefined ideal
          conditions for each parameter. The ideal conditions represent the
          optimal range in which the plants thrive.
        </li>
        <li>
          Status Generation: Based on the comparison, your web application will
          generate a status for each sensor, indicating the health of the
          plants' environment. If the real-time sensor data falls within the
          ideal conditions, the status generated will be "MODERATE."
        </li>
        <li>
          Status Visualization: The "MODERATE" status will be prominently
          displayed on the "Live Sensor Data" page, giving users a quick visual
          indication that their plants are currently in good condition. This
          status will be shown next to each sensor parameter, such as
          temperature, humidity, etc.
        </li>
        <li>
          Alerts for Deviations: If any sensor data deviates from the ideal
          conditions (either too high or too low), the status will change
          accordingly, indicating that the environment requires attention. In
          such cases, the dashboard will also trigger alerts to notify users of
          the specific parameter that needs adjustment.
        </li>
        <li>
          Data Refresh Timer: To keep the sensor data up-to-date, our web
          application will include a data refresh timer. After every 2 minutes,
          the timer will trigger a new data fetch from the Ubidots cloud,
          providing the latest readings from all sensors.
        </li>
        <li>
          Automatic Update Alerts: Whenever new data is fetched and updated on
          the "Live Sensor Data" page, our web application will automatically
          notify the user of the changes. An update alert will be displayed,
          informing the user that there is a new reading from a specific sensor.
        </li>
        <li>
          Stay Informed in Real-Time: Thanks to the data refresh timer and
          automatic update alerts, users can stay informed about their plants'
          environment in real-time without manually refreshing the page.
        </li>
      </ol>
    </div>
  );
};

export default Home;
