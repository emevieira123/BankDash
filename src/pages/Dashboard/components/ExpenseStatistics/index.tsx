import { Card, CardBody, Box, Text } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

export function ExpenseStatistics() {
  const options: ApexOptions = {
    chart: {
      type: 'polarArea',
    },
    labels: ['Bill Expense', 'Others', 'Investment', 'Entertainment'],
    fill: {
      opacity: 1,
    },
    stroke: {
      show: true,
      width: 4,
      colors: ['#fff'],
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
    colors: ['#FC7900', '#1814F3', '#FA00FF', '#343C6A'],
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

  return (
    <Box w={"33%"} h={"355px"}>
      <Text fontWeight={"bold"} color="blue.800" mb={4}>
        Expense Statistics
      </Text>
      <Card borderRadius={20} h={"100%"}>
        <CardBody>
          <Chart
            options={options}
            series={series}
            type="polarArea"
            width={"100%"}
          />
        </CardBody>
      </Card>
    </Box>
  );
}