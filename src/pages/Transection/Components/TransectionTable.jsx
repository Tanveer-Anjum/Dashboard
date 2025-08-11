import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Stack,
  Text,
  Tag,
} from '@chakra-ui/react'

function TransectionTable() {
  const tableData = [
    {
      id: '1234',
      date: '2023-4-1',
      time: '7:45:00 AM',
      type: { name: "PKR Deposite", tag: 'E-Transfer' },
      amount: "$123",
      status: 'Pending'
    },
    {
      id: '1113',
      date: '2024-5-1',
      time: '7:30:00 AM',
      type: { name: "PKR Transfer", tag: 'E-Transfer' },
      amount: "$1243",
      status: 'Cencelled'
    },
    {
      id: '1231',
      date: '2023-1-8',
      time: '7:45:00 PM',
      type: { name: "PKR Deposite", tag: 'Buy' },
      amount: "$12342",
      status: 'Pending'
    },
    {
      id: '1221',
      date: '2023-1-8',
      time: '7:45:00 PM',
      type: { name: "PKR Deposite", tag: 'Buy' },
      amount: "$12342",
      status: 'Complete'
    }
  ]

  const colorShm = {
    Cencelled: "red",
    Pending: 'yellow',
    Complete: 'green'
  }

  return (
    <TableContainer overflowX="auto">
      <Table variant="simple" minWidth="600px">
        <TableCaption>All transaction data</TableCaption>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Date & Time</Th>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tableData.map((data) => (
            <Tr key={data.id}>
              <Td>{data.id}</Td>
              <Td>
                <Stack spacing={0}>
                  <Text>{data.date}</Text>
                  <Text fontSize="sm" color="gray.400">{data.time}</Text>
                </Stack>
              </Td>
              <Td>
                <Stack spacing={0}>
                  <Text>{data.type.name}</Text>
                  <Text fontSize="sm" color="gray.400">{data.type?.tag}</Text>
                </Stack>
              </Td>
              <Td>
                <Text>{data.amount}</Text>
              </Td>
              <Td>
                <Tag
                  bg={colorShm[data.status]}
                  color="white"
                  borderRadius="full"
                  px={3}
                  py={1}
                >
                  {data.status}
                </Tag>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default TransectionTable
