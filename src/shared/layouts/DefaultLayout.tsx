import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { MenuSidebar } from "../components/MenuSidebar";

export function DefaultLayout() {
  return (
    <Flex>
      <MenuSidebar />
      <Outlet />
    </Flex>
  );
}