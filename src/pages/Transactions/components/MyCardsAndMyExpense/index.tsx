import { Flex, Text } from "@chakra-ui/react";
import { CardBank } from "../../../../shared/components/CardBank";
import { dataCardBank } from "../../../Dashboard/__mocks__/dataCardBank";
import { MyExpense } from "../MyExpense";

export function MyCardsAndMyExpense() {
  return (
    <Flex gap={8} mb={8}>
      <Flex w="67%" flexDir={"column"}>
        <Flex mb={"1rem"} align={"center"} justify={"space-between"}>
          <Text fontWeight={"bold"} color="blue.800">My Cards</Text>
          <Text fontWeight={"semibold"} color="blue.800">+ Add Card</Text>
        </Flex>
        <Flex gap={8}>
          <CardBank
            bgColor="#002AE8"
            bgColorFooter="#2840EA"
            data={dataCardBank}
          />
          <CardBank data={dataCardBank} />
        </Flex>
      </Flex>
      <Flex w="33%" flexDir={"column"}>
        <Flex mb={"1rem"} align={"center"} justify={"space-between"}>
          <Text fontWeight={"bold"} color="blue.800">My Expense</Text>
        </Flex>
        <MyExpense />
      </Flex>
    </Flex>
  );
}