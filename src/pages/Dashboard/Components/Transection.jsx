import React from "react";
import { CustomCard } from "../../../ChakraCard/CustomCard";
import {
  Flex,
  Icon,
  Stack,
  Text,
  Divider,
  Button,
} from "@chakra-ui/react";
import { MdOutlineCurrencyBitcoin } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa6";

function Transection() {
  const transection = [
    {
      id: "1",
      icon: MdOutlineCurrencyBitcoin,
      text: "BTC Deposit",
      amount: "+ $123,3456",
      timestamp: "2025-03-12  7:20 PM",
    },
    {
      id: "2",
      icon: FaRupeeSign,
      text: "PKR Deposit",
      amount: "+ $768,2356",
      timestamp: "2025-05-01  5:20 AM",
    },
    {
      id: "3",
      icon: MdOutlineCurrencyBitcoin,
      text: "PKR Deposit",
      amount: "+ $1286,3456",
      timestamp: "2025-01-12  4:00 PM",
    },
  ];

  return (
    <CustomCard>
      <Text fontWeight="bold" fontSize="lg" mb={3}>
        Transactions
      </Text>
      <Stack divider={<Divider />} spacing={3}>
        {transection.map((trans) => (
          <Flex
            key={trans.id}
            align="center"
            justify="space-between"
            p={2}
            _hover={{ bg: "gray.50" }}
            borderRadius="md"
          >
            {/* Icon + Text */}
            <Flex align="center" gap={3}>
              <Flex
                bg="gray.200"
                p={2}
                borderRadius="full"
                align="center"
                justify="center"
              >
                <Icon as={trans.icon} boxSize={5} color="blue.500" />
              </Flex>
              <Stack spacing={0}>
                <Text fontWeight="medium">{trans.text}</Text>
                <Text fontSize="xs" color="gray.500">
                  {trans.timestamp}
                </Text>
              </Stack>
            </Flex>

            {/* Amount */}
            <Text fontWeight="bold" color="green.500">
              {trans.amount}
            </Text>
          </Flex>
        ))}
      </Stack>
   <Button w="full" bg="gray.200" color="black" _hover={{ bg: "gray.300" }}>
  View All
</Button>

    </CustomCard>
  );
}

export default Transection;
