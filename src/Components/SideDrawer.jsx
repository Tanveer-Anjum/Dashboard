import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react'
import Sidenav from './Sidenav'



function SideDrawer({isOpen, onClose}) {

  
  return (
    <>
      
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
      
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
          <Sidenav></Sidenav>
          </DrawerBody>

       
        </DrawerContent>
      </Drawer>
    </>
  )
}


export default SideDrawer