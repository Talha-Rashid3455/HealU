import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(LineElement, PointElement, Tooltip, Legend, CategoryScale, LinearScale);

const LineChart = ({className}) => {
  // Data for the chart
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
    datasets: [
      {
        label: "Number of Patients",
        data: [5, 10, 15, 25, 20, 15, 10, 8, 12, 18, 20],
        borderColor: "rgba(124, 58, 237, 1)", // Line color (purple)
        backgroundColor: "rgba(124, 58, 237, 0.1)", // Gradient fill color
        borderWidth: 2,
        fill: true, // Enable gradient fill under the line
        pointBackgroundColor: "rgba(124, 58, 237, 1)", // Point color
        pointHoverRadius: 6,
        tension: 0.4, // Smoothing for the line
      },
    ],
  };

  // Configuration options for the chart
  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(124, 58, 237, 0.9)", // Tooltip background color
        titleFont: { size: 12 },
        bodyFont: { size: 14 },
        callbacks: {
          label: (tooltipItem) => ` ${tooltipItem.raw} patients`,
        },
      },
      legend: {
        display: false, // Disable legend for a clean look
      },
    },
    scales: {
      x: {
        ticks: { color: "#6B7280", font: { size: 12 } }, // X-axis labels
        grid: { display: false }, // Remove gridlines on the X-axis
      },
      y: {
        ticks: { color: "#6B7280", font: { size: 12 }, stepSize: 10 }, // Y-axis labels
        grid: { color: "rgba(209, 213, 219, 0.3)" }, // Dashed gridlines
      },
    },
  };

  return (
    <div className="p-6 shadow-lg   ml-20 w-2/5 border-2 border-gray-200  rounded-3xl ">
      <h3 className="text-xl font-semibold mb-4">Number of Patients</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
