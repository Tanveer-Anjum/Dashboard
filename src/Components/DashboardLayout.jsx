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
      <Sidenav />
      <SideDrawer isOpen={isOpen} onClose={onClose}  />

      {/* Main Content */}
      <Box
        w="full"
        ml={{ base: 0, md: "250px" }} // 👈 Add margin-left only on large screens
      >
        <TopNav title={title} onOpen={onOpen} />

        <Container maxW="container.xl" p={4}>
          {children}
        </Container>
      </Box>
    </Flex>
  )
}

export default DashboardLayout
