import { Box, Button, Card, Checkbox, FormControl, FormLabel, HStack, Icon, Input, Stack, Text, Textarea } from '@chakra-ui/react'
import React from 'react'
import { MdMessage } from "react-icons/md";
function ContactCard() {
  return (<>
    
                <Card px={4} borderRadius={4} p={2} mt={4}>
                    <Text p={2}>You will receive respones within 24 hours of time of submit</Text>
                    <HStack>
                        <FormControl p={2}>
                            <FormLabel>Name</FormLabel>
                            <Input placeholder='Name' />
    
                        </FormControl>
                         <FormControl>
                            <FormLabel>Father Name</FormLabel>
                            <Input placeholder='Father Name' />
    
                        </FormControl>
                    </HStack>
                     <FormControl p={2}>
                            <FormLabel>Email</FormLabel>
                            <Input placeholder='Enter your Email here' />
    
                        </FormControl>
                         <FormControl p={2}>
                            <FormLabel>Message</FormLabel>
                            <Textarea placeholder='Enter your Message here' />
    
                        </FormControl>
                        <Checkbox  p={2} defaultChecked>I agree with
                            <Box as='span' color='purple.700'>
                               Terms & Condition
                                 
                                </Box>
                        </Checkbox>
    <Stack>
                        <Button>Sent a Message</Button>
                        <Button colorScheme='gray'>Book a Meeting</Button>
                        </Stack>
                        
                </Card>
                  </>
  )

}

export default ContactCard