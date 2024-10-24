export function useDataWeeklyActivity() {
  const options = {
    chart: {
      id: "basic-bar",
      toolbar: {
        show: true,
        tools: {
          download: false,
        },
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
        horizontal: false,
        columnWidth: "50%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 8,
      colors: ["transparent"],
    },
    grid: {
      show: true,
      borderColor: "#e0e0e0",
      strokeDashArray: 4,
      opacity: 0.5,
    },
    xaxis: {
      categories: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    },
  };

  const series = [
    {
      name: "Disposit",
      data: [44, 55, 57, 56, 61, 58, 63],
      color: "#1814F3",
    },
    {
      name: "Withdraw",
      data: [76, 85, 101, 98, 87, 105, 91],
      color: "#16DBCC",
    },
  ];

  return { options, series };
}
