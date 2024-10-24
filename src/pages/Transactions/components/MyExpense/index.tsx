import { Card, CardBody } from "@chakra-ui/react";
import Chart from "react-apexcharts";
import { useDataChart } from "../../hooks/useDataChat";

export function MyExpense() {
  const { options, series } = useDataChart();

  return (
    <Card borderRadius={20}>
      <CardBody>
        <Chart
          options={options}
          series={series}
          type="bar"
          width="100%"
          height={"185px"}
        />
      </CardBody>
    </Card>
  );
}