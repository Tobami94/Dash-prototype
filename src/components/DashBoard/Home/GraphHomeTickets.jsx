import React, { useEffect } from "react";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

import ApexCharts from "apexcharts";

const getChartOptionsTicket = () => {
  return {
    series: [350, 230],
    colors: ["#b000fd", "#da11cb"],
    chart: {
      height: 220,
      width: "100%",
      type: "donut",
    },
    stroke: {
      width: 3,
      position: "left",
      colors: ["#b000fd", "#161c31"],
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
              offsetY: 1,
            },
            total: {
              showAlways: true,
              show: true,
              label: "Returned Tickets",
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              color: "#a4aab5",
              formatter: function (w) {
                const sum = w.globals.seriesTotals.reduce((a, b) => {
                  return a + b;
                }, 0);
                return sum;
              },
            },
            value: {
              show: true,
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              color: "#a4aab5",
              offsetY: 5,
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
    labels: ["New Tickets", "Returned Tickets"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "bottom",
      horizontalAlign: "right",
      fontFamily: "Inter, sans-serif",
      labels: {
        colors: "#a4aab5",
      },
    },
  };
};

const GraphHomeTickets = () => {
  useEffect(() => {
    const chartOptions = getChartOptionsTicket();
    const chart = new ApexCharts(
      document.getElementById("donut-chart-tickets"),
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
            New Tickets vs Returned Tickets
          </h5>
        </div>
      {/* Donut Chart */}
      <div id="donut-chart-tickets"></div>
    </div>
  );
};

export default GraphHomeTickets;
