import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const ThingSpeakDataFetcher = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const channel_id = '2228063'; // Replace with your provided Channel ID
    const api_key = 'DHRDGVCGANT72E08'; // Replace with your actual API key or leave it empty for public channels
    const api_url = `https://api.thingspeak.com/channels/${channel_id}/feeds.json?api_key=${api_key}`;

    // Fetch data using Axios
    axios
      .get(api_url)
      .then((response) => {
        setData(response.data.feeds); // Extract the 'feeds' array from the response
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Process data for the chart
  const chartData = {
    labels: data.map((feed) => feed.created_at), // Use timestamps as labels
    datasets: [
      {
        label: 'Temperature',
        data: data.map((feed) => feed.field1),
        borderColor: 'red',
        fill: false,
      },
      {
        label: 'LDR',
        data: data.map((feed) => feed.field2),
        borderColor: 'blue',
        fill: false,
      },
      {
        label: 'pH',
        data: data.map((feed) => feed.field3),
        borderColor: 'green',
        fill: false,
      },
      {
        label: 'Water Level',
        data: data.map((feed) => feed.field4),
        borderColor: 'purple',
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h2>ThingSpeak Data</h2>
      <Line data={chartData} />
    </div>
  );
};

export default ThingSpeakDataFetcher;
