import { Box, Card, CardBody, CardFooter, Divider, Flex, Icon, Text } from "@chakra-ui/react";
import { IconChipCardDark, IconChipCardLight } from "../Icons/IconChipCard";
import { CardBankType } from "../../types/cardBankType";
import { IconFlagBank } from "../Icons/IconFlagBank";

interface CardBankProps {
  bgColor?: string;
  bgColorFooter?: string;
  data: CardBankType
}

export function CardBank({ bgColor, bgColorFooter, data }: CardBankProps) {
  function formatCardNumber(cardNumber: string): string {
    const firstDigits = cardNumber?.slice(0, 4);
    const lastDigits = cardNumber?.slice(-4);

    const maskedSection = "**** ****";
    return `${firstDigits} ${maskedSection} ${lastDigits}`;
  }

  const formattedCardNumber = formatCardNumber(data?.cardNumber);

  return (
    <Card w={"100%"} h={"15rem"} bg={bgColor ? bgColor : "white"} color="white" borderRadius={20}>
      <CardBody>
        <Flex align={"center"} justify={"space-between"}>
          <Box>
            <Text fontSize={10} color={bgColor ? "white" : "gray.700"}>Balance</Text>
            <Text fontWeight={"semibold"} color={bgColor ? "white" : "gray.900"}>${data?.balanceValue}</Text>
          </Box>

          <Icon as={bgColor ? IconChipCardLight : IconChipCardDark} fontSize={40} />
        </Flex>
        <Flex gap={16} mt={"3rem"}>
          <Box>
            <Text fontSize={10} color={bgColor ? "white" : "gray.700"}>CARD HOLDER</Text>
            <Text fontWeight={"semibold"} color={bgColor ? "white" : "gray.900"}>{data?.cardHolder}</Text>
          </Box>
          <Box>
            <Text fontSize={10} color={bgColor ? "white" : "gray.700"}>VALID THRU</Text>
            <Text fontWeight={"semibold"} color={bgColor ? "white" : "gray.900"}>{data?.cardValidad}</Text>
          </Box>
        </Flex>
      </CardBody>
      {!bgColorFooter && <Divider border={"1px"} borderColor={"blackAlpha.300"} />}
      <CardFooter
        w="100%"
        bg={bgColorFooter ? bgColorFooter : "white"}
        borderBottomRadius={20}
      >
        <Flex w="100%" align={"center"} justify={"space-between"}>
          <Text fontWeight={"semibold"} color={bgColor ? "white" : "gray.900"}>
            {formattedCardNumber}
          </Text>
          <Icon as={IconFlagBank} w={49} h={30} />
        </Flex>
      </CardFooter>
    </Card>
  )
}