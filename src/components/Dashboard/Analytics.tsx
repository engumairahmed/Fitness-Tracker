import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { DonutChart } from "./DonutChart";

export const Analytics = () => {

  const categories = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  // Bar chart data (number of workouts per day)
  const chartData = [3, 5, 2, 6, 4, 1, 3]; 

  // Bar chart options
  const options: ApexOptions = {
    chart: {
      type: "bar",
    },
    xaxis: {
      categories,
    },
    colors: ["#FF5733", "#33FF57", "#3357FF", "#FFC300", "#8E44AD", "#3498DB"],
    title: {
      text: "Weekly Workout Frequency",
      align: "center",
      style: {
        fontSize: "18px",
        fontWeight: "bold",
        color: "#333",
      },
    },
    plotOptions: {
      bar: {
        distributed: true, 
        borderRadius: 5,
      },
    },
    tooltip: {
      enabled: true,
    },
  };

  const series = [
    {
      name: "Workouts",
      data: chartData,
    },
  ];

  return (
    <div className="flex flex-col items-center overflow-hidden">
      <div className="flex flex-col md:flex-row justify-center w-full mb-5 flex-wrap">
        {/* Bar Chart */}
        <div className="w-full md:w-1/2 p-2 max-w-md">
          <ReactApexChart
            options={options}
            series={series}
            type="bar"
            height={400}
          />
        </div>

        {/* Donut Chart */}
        <div className="w-full md:w-1/2 p-2 max-w-md">
          <DonutChart />
        </div>
      </div>
    </div>
  );
};
