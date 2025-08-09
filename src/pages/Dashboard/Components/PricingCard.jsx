
import React from 'react'
import { CustomCard } from '../../../ChakraCard/CustomCard'
import { Button, Flex, HStack, Icon, Stack, Tag, Text } from '@chakra-ui/react'
import { MdArrowOutward } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

function PricingCard() {
    return (
        <>
            <CustomCard>
                <Flex justify={'space-between'} align={'top'}>
                    <HStack justify={'space-between'} flexDir={{ base: "column", lg: "row" }} spacing='24px'>
                        <Text>Balance Walet</Text>
                        <Text fontWeight={'bold'}>$394,3423</Text>
                        <HStack gap={3} >
                        <Tag  colorScheme='green'>0.22
                            
                                 <MdArrowOutward />
                   
                            
                        </Tag>
                              </HStack>
                       
                    </HStack>


                    <HStack >
                        <Button leftIcon={<Icon as={FaPlus} boxSize={6} />} >Buy</Button>
                        <Button leftIcon={<Icon as={FaMinus} boxSize={6} />} >Sell</Button>
                    </HStack>






                </Flex>
            </CustomCard>
        </>
    )
}

export default PricingCard