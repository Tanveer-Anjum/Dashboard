import { Button, Card, Flex, HStack, Icon, Input, InputGroup, InputLeftElement, Tag } from '@chakra-ui/react'
import React from 'react'
import DashboardLayout from '../../Components/DashboardLayout'
import { IoMdDownload } from "react-icons/io";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import TransectionTable from './Components/TransectionTable';
import { FaSearchDollar } from "react-icons/fa";

function TransectionPage() {
  const tabs = [{
    name: 'All',
    count: '123'
  },
  {
    name: 'Withdraw',
    count: '5465'
  },
  {
    name: 'Deposite',
    count: '678'
  },
  {
    name: 'Trade',
    count: '5461'
  }
  ]
  return (
    <DashboardLayout title={'Transection'}>
      <Flex justify={'end'} mt={2} mb={3}> 
        <Button leftIcon={<Icon as={IoMdDownload} />}>Import Cvs</Button>
      </Flex>
   <Card>
  <Tabs>
    <Flex
      p={3}
      w="full"
      flexDirection={{ base: "column", md: "row" }} // column on mobile, row on desktop
      justify="space-between"
      align={{ base: "stretch", md: "center" }}
      gap={{ base: 3, md: 0 }} // space between items on mobile
    >
      {/* Tabs */}
      <TabList flexWrap="wrap">
        {tabs.map((tab) => (
          <Tab
            key={tab.name}
            display="flex"
            gap={2}
            fontSize="sm"
            whiteSpace="nowrap"
          >
            {tab.name}
            <Tag color="gray.600">{tab.count}</Tag>
          </Tab>
        ))}
      </TabList>

      {/* Search */}
      <InputGroup
        maxW={{ base: "100%", md: "200px" }} // full width on mobile
        display="flex"
        alignItems="center"
      >
        <InputLeftElement pointerEvents="none">
          <Icon as={FaSearchDollar} />
        </InputLeftElement>
        <Input type="text" placeholder="Search" />
      </InputGroup>
    </Flex>

    <TabPanels>
      <TabPanel>
        <TransectionTable />
      </TabPanel>
      <TabPanel>
        <TransectionTable />
      </TabPanel>
      <TabPanel>
        <TransectionTable />
      </TabPanel>
    </TabPanels>
  </Tabs>
</Card>


    </DashboardLayout>
  )
}

export default TransectionPage