import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export const DonutChart = () => {
  const options: ApexOptions = {
    chart: {
      type: "donut",
    },
    labels: [
      "Protein",
      "Carbohydrates",
      "Fats",
      "Fiber",
      "Sugars",
      "Sodium",
      "Vitamins",
      "Minerals",
    ],
    colors: [
      "#FF5733",
      "#33FF57",
      "#3357FF",
      "#31c4ad",
      "#057A55",
      "#362F78",
      "#BF125D",
      "#E02424",
    ],
    title: {
      text: "Nutrition Distribution",
      align: "center",
      style: {
        fontSize: "18px",
        fontWeight: "bold",
        color: "#333",
      },
    },
    legend: {
      position: "bottom",
    },
    dataLabels: {
      enabled: true,
      formatter: function (val: number | string) {
        if (typeof val === "number") {
          return val.toFixed(1) + "%";
        }
        return val;
      },
    },
  };

  const series = [40, 35, 25, 55, 45, 23, 44, 78];

  return (
    <div className="w-full max-w-xs mx-auto">
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        height={400}
      />
    </div>
  );
};
