import React from 'react'
import { CustomCard } from '../../../ChakraCard/CustomCard'
import { Tag, Text } from '@chakra-ui/react'
import { RiH5 } from 'react-icons/ri'

function CardInfo({text,textTag,inverted}) {
  return (
    <CustomCard 
    bg={inverted ? "purple.600":"white"}
    >
        <Tag    color={inverted ? "purple":"white"} 
        
        bg={inverted?"white":"purple.600"}
        borderRadius={'full'} p={1} fontSize={'sm'}>
            {text}
        </Tag>
    
        <Text mt={4} fontStyle={'h5'}>
          {textTag}
        </Text>
    </CustomCard>
  )
}

export default CardInfo