export function useDataChart() {
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
    yaxis: {
      show: false,
    },
    tooltip: {
      y: {
        formatter: function (value: number) {
          return `$${value.toLocaleString().replace(".", ",")}`;
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
      enabled: true,
      formatter: function (val: number) {
        return `$${val.toLocaleString().replace(".", ",")}`;
      },
      offsetY: 65,
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
    },
  };

  const series = [
    {
      name: "Disposit",
      data: [10200, 13100, 8500, 5200, 12500, 8300],
    },
  ];

  return { options, series };
}
