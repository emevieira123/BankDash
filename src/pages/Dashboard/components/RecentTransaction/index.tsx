import { Box, Card, CardBody, Flex, Text } from "@chakra-ui/react";
import { IconCards } from '../../../../shared/components/Icons/IconCards';
import { CircleIcon } from "../../../../shared/components/CircleIcon";
import { IconPaypal } from "../../../../shared/components/Icons/IconPaypal";
import { IconTransactionMoney } from "../../../../shared/components/Icons/IconTransactionMoney";
import { recentsTransactions } from "../../__mocks__/recentsTransactions";
import { format, parseISO } from "date-fns";

export function RecentTransaction() {
  return (
    <Card borderRadius={20} h={"15rem"}>
      <CardBody display={"flex"} flexDir={"column"} gap={4}>
        {
          recentsTransactions.slice(0, 3).map((transaction, i) => {
            return (
              <Flex align={"center"} justify={"space-between"} key={i}>
                <Flex align={"center"} gap={4}>
                  <CircleIcon
                    icon={
                      transaction?.tipe === 1
                        ? IconCards : transaction?.tipe === 2
                          ? IconPaypal : IconTransactionMoney
                    }
                    color={transaction?.color}
                  />
                  <Box>
                    <Text fontWeight={"bold"}>{transaction?.description}</Text>
                    <Text color={"gray.500"}>{format(parseISO(transaction?.dateTransaction), "dd MMMM yyyy")}</Text>
                  </Box>
                </Flex>
                <Text
                  fontSize={18}
                  fontWeight={"semibold"}
                  color={Number(transaction?.amount) < 0 ? "red" : "green.500"}
                >
                  {`$${transaction?.amount}`.replace("$-", "-$")}
                </Text>
              </Flex>
            );
          })
        }
      </CardBody>
    </Card>
  );
}