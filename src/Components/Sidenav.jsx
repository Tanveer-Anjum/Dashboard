import React from 'react'
import { Box, Heading, HStack, Icon, Stack, Text } from '@chakra-ui/react'
import { BiBarChartSquare } from "react-icons/bi";
import { CgArrowsExpandRight } from "react-icons/cg";
import { MdSupportAgent } from "react-icons/md";
import { Link, Links, useLocation } from 'react-router-dom';


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
      link: "/Transectionpage"
    }
  ];
  const location = useLocation();

  const isActive =(link)=>{
    return location.pathname==link

  }

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
          <Link to={nav.link}  key={index}>
          <HStack
           bg={isActive(nav.link) ? "purple.100" : "transparent"} // Active background
              color={isActive(nav.link) ? "purple.600" : "black"} // Active text color
              fontWeight={isActive(nav.link) ? "bold" : "medium"} // Bold if active

            spacing={4}
            p={4}
            _hover={{ bg: "gray.100" }}
            cursor="pointer"
            py={2}
            px={4}
           
            borderRadius="md"
          >
            {nav.icon}
            <Text>{nav.text}</Text>
          </HStack>
          </Link>
        ))}
      </Box>

      <Box mt="auto" p={4}>
        <Link to='/Support'>
        <HStack
          spacing={4}
          p={4}
          _hover={{ bg: "gray.100" }}
          cursor="pointer"
          py={2}
          borderRadius="md"
           bg={isActive("/Support") ? "purple.100" : "transparent"}
            color={isActive("/Support") ? "purple.600" : "black"}
            fontWeight={isActive("/Support") ? "bold" : "medium"}
        >
          <MdSupportAgent />
          <Text>Support</Text>
        </HStack>
        </Link>
      </Box>
     
    </Stack>
  );
}

export default Sidenav;
