import { Avatar, Box, Button, Card, CardBody, Flex, Icon, IconButton, Input, InputGroup, InputRightElement, Text, Tooltip } from "@chakra-ui/react";
import { ChevronRight, Send } from "lucide-react";
import { quickTransfer } from "../../__mocks__/quickTransfer";
import { useState } from "react";

export function QuickTransfer() {
  const [selected, setSelected] = useState<string>('');
  const [count, setCount] = useState<number>(0);

  function handleSlide() {
    if (count < 3) {
      setCount(count + 3);
    } else if (count === 3) {
      setCount(count - 3);
    }
  }

  return (
    <Box w={"40%"} mt={6}>
      <Text fontWeight={"bold"} color="blue.800" mb={4}>Quick Transfer</Text>
      <Card borderRadius={20}>
        <CardBody>
          <Flex gap={8} align="center">
            {
              quickTransfer.slice((0 + count), (3 + count)).map((item) => {
                return (
                  <Flex
                    flexDir="column"
                    justify="center"
                    align="center"
                    cursor="pointer"
                    key={item.contactId}
                    onClick={() => setSelected(item.contactId)}>
                    <Avatar
                      name={item.contactName}
                      src={item.avatarImg as string}
                      size="xl"
                    />

                    <Tooltip label="Dan Abrahmov" placement="bottom">
                      <Flex>
                        <Text
                          fontWeight={selected === item.contactId ? "bold" : "normal"}
                          whiteSpace="nowrap"
                          overflow="hidden"
                          textOverflow="ellipsis"
                          maxWidth="100px"
                        >
                          {item.contactName}
                        </Text>
                      </Flex>
                    </Tooltip>
                    <Text fontWeight={selected === item.contactId ? "bold" : "normal"} color="gray.500">{item.jobPosition}</Text>
                  </Flex>
                )
              })
            }

            <IconButton
              icon={<Icon as={ChevronRight} />}
              aria-label="arrow-right"
              borderRadius={50}
              onClick={handleSlide}
            />
          </Flex>
          <Flex align={"center"} justify={"space-between"} mt={8}>
            <Text color="gray.500">Write Amount</Text>
            <InputGroup w={"15rem"}>
              <InputRightElement w={"7rem"} h={"3rem"} m={0}>
                <Button
                  w={"7rem"}
                  h={"3rem"}
                  colorScheme="blue"
                  rightIcon={<Icon as={Send} fontSize={20} />}
                  borderRadius={50}
                >
                  Send
                </Button>
              </InputRightElement>
              <Input
                w={"15rem"}
                h={"3rem"}
                border={0}
                borderRadius={50} bg="gray.100"
                placeholder="525.50"
                _placeholder={{
                  color: "gray.500",
                  opacity: 0.5,
                }}
              />
            </InputGroup>
          </Flex>
        </CardBody>
      </Card>
    </Box>
  );
}