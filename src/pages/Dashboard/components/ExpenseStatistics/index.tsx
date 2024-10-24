import { Card, CardBody, Box, Text } from "@chakra-ui/react";
import Chart from "react-apexcharts";
import { useDataStatistics } from "../../hooks/useDataStatistics";

export function ExpenseStatistics() {
  const { options, series } = useDataStatistics();

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