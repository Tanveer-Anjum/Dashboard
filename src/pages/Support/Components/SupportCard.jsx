import { Box, Button, Card, Flex, HStack, Icon, Input, Stack, Text, Textarea } from '@chakra-ui/react'

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
}
    from '@chakra-ui/react'
import React from 'react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { MdMessage } from 'react-icons/md'

function SupportCard({ lefComponent,text,title,icon }) {
    return (
        <Flex mt={2} gap={3} flexDir={{
            base: 'column',
            xl: 'row'
        }}>
            <Stack p={3} maxW={'400px'} flexGrow={1}>
                <Icon as={icon} boxSize={6} />

                <Text as='h1' textStyle='h1' fontWeight={'medium'} >{text}</Text>
                <Text fontWeight={'sm'} >{title}</Text>
            </Stack>

            {lefComponent}
        </Flex>
    )
}

export default SupportCard