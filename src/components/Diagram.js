import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

export default function Diagram({ cities }) {
  const [chartData, setChartData] = useState();
  const chart = () => {
    setChartData({
      labels: ["temp", "humidity", "windspeed"],
      datasets: [
        {
          label: "values",
          data: [23, 55, 4],
          backgroundColor: [
            "rgba(251, 150, 63, 0.6)",
            "rgba(19, 127, 190, 0.6)",
            "rgba(58, 75, 86, 0.6)",
          ],
          borderWidth: 2,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <>
      <Bar
        data={chartData}
        options={{
          responsive: true,
        }}
      />
    </>
  );
}
