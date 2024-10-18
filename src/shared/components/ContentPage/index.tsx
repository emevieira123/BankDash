import { Avatar, Box, Flex, Icon, IconButton, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import { BellDot, Search, Settings } from "lucide-react";

interface ContentPageProps {
  children: React.ReactNode,
  title: string,
}

export function ContentPage({ children, title }: ContentPageProps) {
  return (
    <Box w={"100%"} minH={"100vh"} bg={"gray.100"}>
      <Flex
        bg={"white"}
        h={"4rem"}
        align={"center"}
        justify={"space-between"}
        px={"2rem"}
      >
        <Text fontSize={24} color={"blue.700"} fontWeight={"semibold"}>
          {title}
        </Text>
        <Flex gap={6} align={"center"}>
          <InputGroup>
            <InputLeftElement>
              <IconButton
                icon={<Icon as={Search} />}
                aria-label="search"
                bg={"transparent"}
                _hover={{ bg: "transparent" }}
                color={"gray.500"}
              />
            </InputLeftElement>
            <Input
              placeholder="Search for something"
              borderRadius={50}
              bg={"gray.100"}
              _placeholder={{
                color: "gray.500",
                opacity: 0.8,
              }}
            />
          </InputGroup>
          <IconButton
            icon={<Icon as={Settings} fontSize={24} />}
            aria-label="config"
            borderRadius={50}
            color={"gray.400"}
          />
          <IconButton
            icon={<Icon as={BellDot} fontSize={24} />}
            aria-label="config"
            borderRadius={50}
            color={"red"}
          />
          <Avatar
            name='Dan Abrahmov'
            src='https://bit.ly/dan-abramov'
          />
        </Flex>
      </Flex>
      {children}
    </Box>
  );
}