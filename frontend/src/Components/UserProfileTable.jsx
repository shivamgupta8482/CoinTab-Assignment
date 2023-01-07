import React from 'react'
import { TableContainer,Td,Th,Table,Tr,Thead,Tbody,Tfoot, Button,Box,Select, Flex,useColorMode } from '@chakra-ui/react'
import UserTable from './UserTable'
const UserProfileTable = ({page,setPage,data,number}) => {
  return (
   <>
    <TableContainer>
    <Table variant='striped' colorScheme='pink'>
      {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
      <Thead>
        <Tr>
          <Th>Avatar</Th>
          <Th>Name</Th>
          <Th>Location</Th>
          <Th>Gender</Th>
          <Th>Mail</Th>
          <Th >Phone</Th>
        </Tr>
      </Thead>
      <Tbody>
       {
        data.map(elem=>(
          <UserTable data={elem} />
        ))
       }
        
      </Tbody>
    
    </Table>
  </TableContainer>
   <Box w="100%">
  <Box m="auto"  w="20%" p="50px">
  <Button  disabled={page==1} onClick={()=>setPage(page-1)}>PREV</Button>
    <Button>{page}</Button>

    <Button disabled={page==number}  onClick={()=>{setPage(page+1)}}>NEXT</Button>
  </Box>
  
   </Box>
   </>
  )
}

export default UserProfileTable