import React from 'react';
import { Line } from 'react-chartjs-2';

const ChartComponent = ({ data }) => {
  const chartData = {
    labels: data.dates,
    datasets: [
      {
        label: 'Portfolio Growth',
        data: data.values,
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return <Line data={chartData} />;
};

export default ChartComponent;
