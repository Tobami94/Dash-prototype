import React, { useEffect } from "react";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

import ApexCharts from "apexcharts";

const getChartOptionsSales = () => {
  return {
    series: [
      {
        name: "Total",
        colors: "#0068b9",
        data: [
          { x: "Mon", y: 232 },
          { x: "Tue", y: 113 },
          { x: "Wed", y: 341 },
          { x: "Thu", y: 224 },
          { x: "Fri", y: 522 },
          { x: "Sat", y: 411 },
          { x: "Sun", y: 243 },
        ],
      },
    ],
    chart: {
      type: "bar",
      height: "320px",
      fontFamily: "Inter, sans-serif",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "70%",
        borderRadiusApplication: "end",
        borderRadius: 1,
      },
    },

    stroke: {
      show: true,
      width: 1,
      colors: ["transparent"],
    },
    grid: {
      show: true,
      borderColor: '#232b40',
      strokeDashArray: 0,
      xaxis: {
        lines: {
            show: true,
        },
      },
      padding: {
        left: 2,
        right: 2,
        top: 10,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      floating: false,
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        gradientToColors: ["#02e8e0", "#6963d8"],
        inverseColors: true,
        opacityFrom: 10,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    tooltip: {
      theme: "dark",
    },
  };
};

const GraphHomeVentas = () => {
  //func. renderChart
  useEffect(() => {
    const chartOptions = getChartOptionsSales();
    const chart = new ApexCharts(
      document.getElementById("column-chart-tickets"),
      chartOptions
    );
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="p-8 bg-primary-100 rounded-lg shadow max-w-sm w-full md:p-6">
      <div className="container-column-tickets">
        <div className="flex justify-between mb-3">
          <h5 className="text-sm font-bold leading-none text-gray-900 dark:text-white">
            Number of Tickets / Week day
          </h5>
        </div>
      </div>
      {/* Donut Chart */}
      <div className="py-1" id="column-chart-tickets"></div>
    </div>
  );
};

export default GraphHomeVentas;
