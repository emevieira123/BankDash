import { Flex, Icon } from "@chakra-ui/react";
import { ElementType } from "react";

interface CircleIconProps {
  color: string;
  icon: ElementType | undefined
}
export function CircleIcon({ color, icon }: CircleIconProps) {
  return (
    <Flex align={"center"} justify={"center"} p={"0.75rem"} borderRadius={50} bg={`${color}.100`}>
      <Icon as={icon} fontSize={32} color={`${color}.500`} />
    </Flex>
  )
}