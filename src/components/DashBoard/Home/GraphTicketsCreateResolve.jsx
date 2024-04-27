import React, { useEffect } from "react";

import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

import ApexCharts from "apexcharts";

const getChartOptions = () => {
  return {
    xaxis: {
      show: true,
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
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
      show: true,
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
        },
        formatter: function (value) {
          return value + " " + "T";
        },
      },
    },
    series: [
      {
        name: "Developer Edition",
        data: [150, 141, 145, 152, 135, 125],
        color: "#65e0ff",
      },
      {
        name: "Designer Edition",
        data: [43, 13, 65, 12, 42, 73],
        color: "#ed1add",
      },
    ],
    chart: {
      sparkline: {
        enabled: false,
      },
      height: "100%",
      width: "100%",
      type: "area",
      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        shade: "#1C64F2",
        gradientToColors: ["#6cc9ff", "#ed1add"],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 6,
    },
    legend: {
      show: false,
    },
    grid: {
      show: true,
      borderColor: "#232b40",
      strokeDashArray: 0,
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
  };
};

const GraphHomeTicketsCreateResolve = () => {
  useEffect(() => {
    const chartOptions = getChartOptions();
    const chart = new ApexCharts(
      document.getElementById("Table-tickets-solved"),
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
          Ticket Created vs Tickets Solved
        </h5>
      </div>
      {/* Donut Chart */}
      <div id="Table-tickets-solved"></div>
    </div>
  );
};

export default GraphHomeTicketsCreateResolve;
