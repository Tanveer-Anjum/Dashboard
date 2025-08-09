import React from 'react'
import Sidenav from './Sidenav'
import TopNav from './TopNav'
import { Box, Flex, Container, useDisclosure } from '@chakra-ui/react'
import SideDrawer from './sideDrawer'

function DashboardLayout({ title, children }) {
    const {isOpen, onOpen, onClose} = useDisclosure()

  return (
    <Flex>
      {/* Sidebar */}
      

      <Box 
      
      display={{ base: "none", md: "flex" }} // 👈 hides on small screens
      >
        <Sidenav />
      </Box>
      <SideDrawer isOpen={isOpen} onClose={onClose}  />

      {/* Main Content */}
      <Box
        w="full"
        // ml={{ base: 0, md: "0" }} // 👈 Add margin-left only on large screens
      >
        <TopNav title={title} onOpen={onOpen} />

        <Container maxW="960px" mt={"20px"} p={4}  borderRadius={8} boxShadow="lg">
          {children}
        </Container>
      </Box>
    </Flex>
  )
}

export default DashboardLayout
