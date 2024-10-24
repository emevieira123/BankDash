import { Box, Card, CardBody, Text } from "@chakra-ui/react";
import Chart from 'react-apexcharts'
import { useDataBalanceHistory } from "../../hooks/useDataBalanceHistory";

export function BalanceHistory() {
  const { options, series } = useDataBalanceHistory();

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