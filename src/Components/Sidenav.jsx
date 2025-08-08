import React from 'react'
import { Box, Heading, HStack, Icon, Stack, Text } from '@chakra-ui/react'
import { BiBarChartSquare } from "react-icons/bi";
import { CgArrowsExpandRight } from "react-icons/cg";
import { MdSupportAgent } from "react-icons/md";


function Sidenav() {

  const sidenavItems = [
    {
      text: "Dashboard",
      icon: <BiBarChartSquare />,
      link: "/"
    },
    {
      text: "Transaction",
      icon: <CgArrowsExpandRight />,
      link: "/transaction"
    }
  ];

  return (
    <Stack
 
     
    //   width="250px"
      height="100vh"
      bg="white"
      zIndex={1000}
    // //   position="fixed"
      boxShadow={{ base: "none", lg: "lg" }} // 👈 hides on small screens
      w ={{base:"full", lg:"250px"}}
    >
      <Heading as="h1" p={4} textAlign='center' fontWeight='bold'>
        @Bazario
      </Heading>

      <Box p={4}>
        {sidenavItems.map((nav, index) => (
          <HStack
            key={index}
            spacing={4}
            p={4}
            _hover={{ bg: "gray.100" }}
            cursor="pointer"
            py={2}
            px={4}
            fontWeight="medium"
            borderRadius="md"
          >
            {nav.icon}
            <Text>{nav.text}</Text>
          </HStack>
        ))}
      </Box>

      <Box mt="auto" p={4}>
        <HStack
          spacing={4}
          p={4}
          _hover={{ bg: "gray.100" }}
          cursor="pointer"
          py={2}
          borderRadius="md"
        >
          <MdSupportAgent />
          <Text>Support</Text>
        </HStack>
      </Box>
    </Stack>
  );
}

export default Sidenav;
