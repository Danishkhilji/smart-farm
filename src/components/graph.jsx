import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const interpolateNaN = (data) => {
  let previousValue = null;

  return data.map((entry) => {
    const interpolatedEntry = { ...entry };

    if (isNaN(interpolatedEntry.value)) {
      interpolatedEntry.value = previousValue;
    } else {
      previousValue = interpolatedEntry.value;
    }

    return interpolatedEntry;
  });
};

const Graph = ({ data, color, yAxisLabel }) => {
  const interpolatedData = interpolateNaN(data);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        width={500}
        height={300}
        data={interpolatedData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis label={{ value: yAxisLabel, angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke={color} activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Graph;
