import { Box, Card, CardBody, Text } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import Chart from 'react-apexcharts'

export function BalanceHistory() {
  const options: ApexOptions = {
    chart: {
      type: 'area',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false,
        tools: {
          download: false,
        },
      },
    },
    stroke: {
      curve: 'smooth',
      width: 4,
      colors: ['#1814F3'],
    },
    xaxis: {
      categories: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Fev', 'Mar', 'Apr', 'May'],
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: true,
      borderColor: '#e0e0e0',
      strokeDashArray: 4,
    },
    fill: {
      type: 'gradient',
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
      name: 'Value',
      data: [100, 300, 220, 490, 420, 790, 200, 580, 220, 650, 600],
    },
  ];

  return (
    <Box w={"60%"} mt={6}>
      <Text fontWeight={"bold"} color="blue.800" mb={4}>Balance History</Text>
      <Card borderRadius={20} h={264}>
        <CardBody>
          <Chart
            options={options}
            series={series}
            type="area"
            width="100%"
            height={"220px"}
          />
        </CardBody>
      </Card>
    </Box>
  );
}