import React from 'react'
import DashboardLayout from '../../Components/DashboardLayout'
import SupportCard from './Components/SupportCard'
import ContactCard from './Components/ContactCard'
import { MdMessage } from 'react-icons/md'
import { SiLivechat } from "react-icons/si";
import CardInfo from '../Dashboard/Components/CardInfo'
import { Stack } from '@chakra-ui/react'

function Support() {
  return (
    <DashboardLayout title={'Support'} justify="center">
    <Stack spacing={4} maxW={'900px'} justify={'center'}>
        <SupportCard 
      lefComponent={<ContactCard/>}
text={"Contact Us"}
title={'You have a question or just want to know more ? Feel free to reach us'}
icon={MdMessage}

      ></SupportCard>
      
      <SupportCard 
      
   lefComponent={<CardInfo
   inverted={true}
   textTag="tanver is here is th a;ksdjf
   sad faksdjf
    asdkkfja;s dfklj kdsafj  laklsdjf
     aksdfj alklskdjf; as askdjf"
   text={"Contact us"}

   />}
text={"Live Chat"}
title={"Don't have time to wait for answer.Let chat with us!"}
icon={SiLivechat}

      ></SupportCard>
   
    </Stack>
    </DashboardLayout>
  )
}

export default Support