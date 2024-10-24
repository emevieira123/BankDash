import { ApexOptions } from "apexcharts";

export function useDataBalanceHistory() {
  const options: ApexOptions = {
    chart: {
      type: "area",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
        tools: {
          download: false,
        },
      },
    },
    stroke: {
      curve: "smooth",
      width: 4,
      colors: ["#1814F3"],
    },
    xaxis: {
      categories: [
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "Jan",
        "Fev",
        "Mar",
        "Apr",
        "May",
      ],
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: true,
      borderColor: "#e0e0e0",
      strokeDashArray: 4,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0,
        opacityFrom: 0.8,
        opacityTo: 0.5,
        stops: [0, 100],
      },
    },
  };

  const series = [
    {
      name: "Value",
      data: [100, 300, 220, 490, 420, 790, 200, 580, 220, 650, 600],
    },
  ];

  return { options, series };
}
