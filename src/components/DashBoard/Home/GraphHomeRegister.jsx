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

    const checkboxes = document.querySelectorAll(
      '#devices input[type="checkbox"]'
    );

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="p-2">
      <div className="container-table-register">
        <div className="max-w-sm w-full rounded-lg shadow bg-primary-100 p-4 md:p-6">
          <div className="flex justify-between mb-3">
            <div className="flex justify-center items-center">
              <h5 className="text-sm font-bold leading-none text-gray-900 dark:text-white pe-1">
                Website traffic
              </h5>
            </div>
          </div>
          {/* Donut Chart */}
          <div className="py-1" id="donut-chart"></div>
        </div>
      </div>
    </div>
  );
};

export default GraphHomeRegister;
