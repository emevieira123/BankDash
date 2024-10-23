import { Flex } from "@chakra-ui/react";
import { QuickTransfer } from "../QuickTransfer";
import { BalanceHistory } from "../BalanceHistory";

export function QuickTransferAndBalanceHistory() {
  return (
    <Flex gap={8}>
      <QuickTransfer />
      <BalanceHistory />
    </Flex>
  );
}