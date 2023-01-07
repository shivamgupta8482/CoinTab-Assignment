import React from 'react'
import { Tr,Td,Image } from '@chakra-ui/react'

const UserTable = ({data}) => {
    
  return (
    <Tr>
    <Td>
        <Image borderRadius='full' src={data.picture.medium} />
        
        </Td>
    <Td>{data.name.first}</Td>
    <Td>{data.location.country}</Td>
    <Td>{data.gender}</Td>
    <Td>{data.email}</Td>
    <Td>{data.phone}</Td>


    
   
  </Tr>
    )
}

export default UserTable