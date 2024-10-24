import { ApexOptions } from "apexcharts";

export function useDataStatistics() {
  const options: ApexOptions = {
    chart: {
      type: "polarArea",
    },
    labels: ["Bill Expense", "Others", "Investment", "Entertainment"],
    fill: {
      opacity: 1,
    },
    stroke: {
      show: true,
      width: 4,
      colors: ["#fff"],
    },
    yaxis: {
      show: false,
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: true,
    },
    colors: ["#FC7900", "#1814F3", "#FA00FF", "#343C6A"],
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0,
        },
        spokes: {
          strokeWidth: 0,
        },
      },
    },
  };

  const series = [15, 35, 20, 30];

  return { options, series };
}
