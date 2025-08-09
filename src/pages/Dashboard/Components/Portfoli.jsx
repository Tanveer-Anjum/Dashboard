import { Box, Button, HStack, Icon, Stack, Tag, Text } from '@chakra-ui/react';
import React from 'react'

import { PiHandWithdrawFill } from "react-icons/pi";
import { PiHandDepositFill } from "react-icons/pi"; 

import { MdInfoOutline } from "react-icons/md";

function Portfoli() {
  return (
    <Box p={4} bg="white" rounded="lg" shadow="md">
    <HStack spacing="24px" justifyContent="space-between" flexDir={{ base: "column", lg: "row" }} align={{ base: "flex-start", lg: "center" }}>
     <HStack spacing='24px'>
        <Stack>
            <HStack>
                <Text>Portfolio</Text>
                <Icon as={MdInfoOutline} />
            </HStack>
            <Text  fontWeight={'bold'}>$ 14,234</Text>
        </Stack>
        <Stack>
            <HStack>
                <Text>Balance Walet</Text>
              
            </HStack>
            <HStack>
            <Text  fontWeight={'bold'}>$ 394,3423</Text><Tag colorScheme='green'>BTC</Tag>
            </HStack>
        </Stack>
        <Stack mt={5}>
            <HStack>
              
            </HStack>
            <HStack>
            <Text  fontWeight={'bold'}>$ 394,3423</Text><Tag colorScheme='green'>PKR</Tag>
            </HStack>
        </Stack>
     </HStack>
        <HStack spacing='12px'>

          <Button leftIcon={<Icon as={PiHandDepositFill}  boxSize={6}/>} >Deposit</Button>


          <Button leftIcon={<Icon as={PiHandWithdrawFill}  boxSize={6}/>} >Withdraw</Button>
        </HStack>
    </HStack>
    </Box>
  
  )
}

export default Portfoli