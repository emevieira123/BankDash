import { Button, Flex, Icon, Text } from "@chakra-ui/react";
import { IconCardBank } from "../Icons/IconCardBank";
import { MenuItems } from "./MenuItems";
import { NavLink } from "react-router-dom";

export function MenuSidebar() {
  return (
    <Flex
      w={"15rem"}
      h={"100vh"}
      borderRight={"1px"}
      borderColor={"blackAlpha.300"}
      flexDir={"column"}
      gap={2}
      position={"fixed"}
    >
      <Flex align={"center"} justify={"center"} gap={2} py={"1rem"}>
        <IconCardBank />
        <Text fontSize={24} fontWeight={"bold"} color={"blue.700"}>
          BankDash
        </Text>
      </Flex>

      {
        MenuItems.map((menu, i) => {
          return (
            <Button
              as={NavLink}
              leftIcon={<Icon as={menu.icon} fontSize={24} />}
              key={i}
              to={menu.path}
              justifyContent={"none"}
              color="blackAlpha.600"
              bg={"transparent"}
              pl={"2rem"}
              borderLeft={"8px"}
              borderColor={"transparent"}
              borderRadius={"-1rem"}
              _activeLink={{
                color: "blue.500",
                borderLeft: "8px"
              }}
              h={"4rem"}
            >
              {menu.label}
            </Button>
          )
        })
      }
    </Flex>
  );
}