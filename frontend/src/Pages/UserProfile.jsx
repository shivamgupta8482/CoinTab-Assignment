import React from 'react'
import { TableContainer,Td,Th,Table,Tr,Thead,Tbody,Tfoot } from '@chakra-ui/react'
import { useEffect } from 'react';
import { useState } from 'react';
import UserTable from '../Components/UserTable';

const UserProfile = () => {
const [data,setData] = useState([]);
const [page,setPage] = useState(2);
const [filter,setFilter] = useState("");

  const fetchUsers=()=>{
    fetch(`http://localhost:8080/?limit=10&page=${page}&filter=${filter}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    setData(data);
    
  });
}
useEffect(()=>{
fetchUsers();
},[])
console.log(data);
  return (
    <TableContainer>
  <Table variant='striped' colorScheme='teal'>
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
    <Tfoot>
      <Tr>
        <Th></Th>
        
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
  )
}

export default UserProfile