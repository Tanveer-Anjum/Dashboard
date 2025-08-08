import { HStack, Icon, Stack, Text } from '@chakra-ui/react';
import React from 'react'


import { MdInfoOutline } from "react-icons/md";

function Portfoli() {
  return (
    <HStack>
        <Stack>
            <HStack>
                <Text>Portfolio</Text>
                <Icon as={MdInfoOutline} />
            </HStack>
        </Stack>
    </HStack>
  )
}

export default Portfoli