import { Flex } from "@chakra-ui/react";
import { BasicColumnChat } from "../../../../shared/components/Charts/Column/BasicColumnChart";
import { ExpenseStatistics } from "../ExpenseStatistics";

export function ActivitysAndStatistics() {
  return (
    <Flex gap={8}>
      <BasicColumnChat />
      <ExpenseStatistics />
    </Flex>
  );
}