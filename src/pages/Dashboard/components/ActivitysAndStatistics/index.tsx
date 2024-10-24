import { Flex } from "@chakra-ui/react";
import { BasicColumnChat } from "../WeeklyActivity/BasicColumnChart";
import { ExpenseStatistics } from "../ExpenseStatistics";

export function ActivitysAndStatistics() {
  return (
    <Flex gap={8}>
      <BasicColumnChat />
      <ExpenseStatistics />
    </Flex>
  );
}