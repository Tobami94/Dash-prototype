import React, { useEffect } from "react";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

import ApexCharts from "apexcharts";

const getChartOptions = () => {
  return {
    series: [35.1, 23.5, 2.4, 5.4],
    colors: ["#0090ff", "#146f9b", "#00ffee", "#003cff"],
    chart: {
      height: 220,
      width: "108%",
      type: "donut",
    },
    stroke: {
      colors: ["transparent"],
      lineCap: "",
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              fontFamily: "Inter, sans-serif",
              offsetY: 20,
            },
            total: {
              showAlways: true,
              show: true,
              label: "Total Users",
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              color: "#a4aab5",
              formatter: function (w) {
                const sum = w.globals.seriesTotals.reduce((a, b) => {
                  return a + b;
                }, 0);
                return sum + "%";
              },
            },
            value: {
              show: true,
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              color: "#a4aab5",
              offsetY: -15,
              formatter: function (value) {
                return value + "k";
              },
            },
          },
          size: "80%",
        },
      },
    },
    grid: {
      padding: {
        top: -2,
      },
    },
    labels: ["Fullstack", "Designer", "Frontend", "Marketing"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "left",
      color: "#a4aab5",
      fontFamily: "Inter, sans-serif",
      labels: {
        colors: "#a4aab5",
      },
    },
  };
};

const GraphHomeRegister = () => {
  useEffect(() => {
    const chartOptions = getChartOptions();
    const chart = new ApexCharts(
      document.getElementById("donut-chart"),
      chartOptions
    );
    chart.render();
    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="bg-secondary-100 p-3 rounded-xl">
          <div className="flex p-1 justify-between mb-3">
              <h5 className="text-sm font-bold leading-none text-gray-900 dark:text-white">
                Website traffic
              </h5>
            </div>
          {/* Donut Chart */}
          <div id="donut-chart"></div>
        </div>
  
  );
};

export default GraphHomeRegister;
