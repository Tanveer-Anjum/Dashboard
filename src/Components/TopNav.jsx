import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
  Heading,
  Box,
  baseTheme,
  Icon,
}

  from '@chakra-ui/react';
import { FaRegUserCircle } from "react-icons/fa";
import { RiMenuFold2Fill } from "react-icons/ri";
import React from 'react';

function TopNav({ title,onOpen }) {
  return (
    <Box
      p={4}
      px={6}
      top="0"
     

    >
    
      <Flex
    

        justifyContent="space-between"
        alignItems="center"
      >
        <Icon as={RiMenuFold2Fill} display={{ base: "block", md: "none" }} onClick={onOpen} />
        <Heading fontSize="28px">{title}</Heading>

        <Menu>
          <MenuButton fontSize={24} as={Button} variant="ghost" colorScheme="gray">
            <FaRegUserCircle />
          </MenuButton>

          <MenuList>
            <MenuItem>LogOut</MenuItem>
            <MenuItem>Support</MenuItem>

          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
}

export default TopNav;
