// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Graph from "./components/graph"; 

// const App = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const channel_id = "2228063"; 
//     const api_key = "DHRDGVCGANT72E08"; 
//     const api_url = `https://api.thingspeak.com/channels/${channel_id}/feeds.json?api_key=${api_key}`;

//     axios
//       .get(api_url)
//       .then((response) => {
//         setData(response.data.feeds);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   const field1Data = data.map((item) => ({
//     name: item.created_at,
//     value: parseFloat(item.field1),
//   }));
//   const field2Data = data.map((item) => ({
//     name: item.created_at,
//     value: parseFloat(item.field2),
//   }));
//   const field3Data = data.map((item) => ({
//     name: item.created_at,
//     value: parseFloat(item.field3),
//   }));
//   const field4Data = data.map((item) => ({
//     name: item.created_at,
//     value: parseFloat(item.field4),
//   }));

//   return (
//     <div>
//       <div style={{ display: "flex" }}>
//         <Graph data={field1Data} color="#8884d8" yAxisLabel="temp" />
//         <Graph data={field2Data} color="#82ca9d" yAxisLabel="ldr" />
//       </div>

//       <div style={{ display: "flex" }}>
//         <Graph data={field3Data} color="#ff7300" yAxisLabel="ph" />
//         <Graph data={field4Data} color="#ffc658" yAxisLabel="water level" />
//       </div>
//     </div>
//   );
// };

// export default App;

import React from 'react'
import Dashboard from './page/Dashboard'
const App = () => {
  return (
    <div>
      <Dashboard/>
    </div>
  )
}

export default App
