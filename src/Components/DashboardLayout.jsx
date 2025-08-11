import React from 'react'
import Sidenav from './Sidenav'
import TopNav from './TopNav'
import { Box, Flex, Container, useDisclosure, calc } from '@chakra-ui/react'
import SideDrawer from './sideDrawer'


function DashboardLayout({ title, children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex h="100vh" overflow="hidden">
      {/* Sidebar */}
      <Box display={{ base: "none", md: "flex" }} h="100%">
        <Sidenav />
      </Box>

      <SideDrawer isOpen={isOpen} onClose={onClose} />

      {/* Main Content */}
      <Box w="full" display="flex" flexDirection="column">
        <TopNav title={title} onOpen={onOpen} />

        {/* Scrollable Content */}
        <Box
          flex="1"
          overflowY="auto"
          p={4}
          bg="gray.400"
          borderRadius={8}
          boxShadow="lg"
        >
          {children}
        </Box>
      </Box>
    </Flex>
  );
}
export default DashboardLayout;