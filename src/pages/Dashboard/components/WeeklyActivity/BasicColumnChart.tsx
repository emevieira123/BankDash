import { Box, Card, CardBody, Text } from "@chakra-ui/react";
import Chart from "react-apexcharts";
import { useDataWeeklyActivity } from "../../hooks/useDataWeeklyActivity";

export function BasicColumnChat() {
  const { options, series } = useDataWeeklyActivity();

  return (
    <Box w="67%">
      <Text fontWeight={"bold"} color="blue.800" mb={4}>
        Weekly Activity
      </Text>
      <Card borderRadius={20}>
        <CardBody>
          <Chart
            options={options}
            series={series}
            type="bar"
            width="100%"
            height={"300px"}
          />
        </CardBody>
      </Card>
    </Box>
  );
}