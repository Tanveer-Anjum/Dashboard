
import React from 'react'
import { CustomCard } from '../../../ChakraCard/CustomCard'
import { Button, Flex, HStack, Icon, Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Tag, Text } from '@chakra-ui/react'
import { MdArrowOutward } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

function PricingCard() {
    const timegraph = ['10:00PM', '3:30AM', '10:01AM', '12:42PM', '3:33AM']
    return (
        <>
            <CustomCard>
                <Flex justify={'space-between'} fontSize={'sm'}>
                    <HStack justify={'space-between'} flexDir={{ base: "column", lg: "row" }}

                    >
                        <Stack>
                            <Text>Current Price</Text>
                            <Text fontWeight={'bold'}>$394,3423</Text>
                        </Stack>
                    </HStack>
                    <HStack>
                        <Tag colorScheme='green'>0.22%

                            <MdArrowOutward />
                        </Tag>
                    </HStack>

                    <HStack>
                        <Button leftIcon={<Icon as={FaPlus} boxSize={4} />} fontSize={'sm'} >Buy</Button>
                        <Button leftIcon={<Icon as={FaMinus} boxSize={4} />} fontSize={'sm'} >Sell</Button>
                    </HStack>






                </Flex>
                <Tabs variant='soft-rounded' colorScheme='green'


                >
                    <Flex mt={4} justify={{
                        base: 'left',
                        lg: 'end'
                    }}>
                        <TabList bg={'gray.400'}>

                            {['1H', '2H', '2W', '4W'].map((tab) => (
                                <Tab _selected={{ bg: "white" }} key={tab} fontSize={'sm'} boxSize={6} borderRadius={2}>
                                    {tab}
                                </Tab>
                            ))}

                        </TabList>
                    </Flex>
                    <TabPanels>
                        <TabPanel>
                            <Image
                                w='100%' src='./graph.jpg'
                            />
                            <HStack justify={'space-between'}>
                                {timegraph.map((items) => (
                                    <Text key={items} fontSize="sm" color="gray.600" >
                                        {items}
                                    </Text>
                                ))}
                            </HStack>
                        </TabPanel>
                        <TabPanel>
                            <p>two!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>



            </CustomCard>
        </>
    )
}

export default PricingCard