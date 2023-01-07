import React from 'react'
import { Button,HStack } from '@chakra-ui/react'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"
const HomePage = () => {
    const [loading,setLoading] = useState(false);
const fetchUsers=()=>{
    setLoading(true)
    fetch('http://localhost:8080/getall')
  .then((response) => response.json())
  .then((data) => {
    
    console.log(data)
    setLoading(false);
  });
}
const DeleteUsers=()=>{
    setLoading(true)
    fetch('http://localhost:8080/delete', {
        method: 'DELETE'
       
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          setLoading(false)
        })
        .catch((error) => {
          console.error('Error:', error);
        });
}
const navigate = useNavigate();
const userDetails=()=>{
navigate("/users")
}
  return (
    <HStack>
 {
    loading?<Button
    isLoading
    colorScheme='pink'
    
  >
    Click me
  </Button>
    : <Button onClick={fetchUsers} colorScheme='pink' >
    Fetch Users
   </Button>
 }
  <Button colorScheme='pink' onClick={DeleteUsers}>
  Delete Users
  </Button>
  <Button colorScheme='pink' onClick={userDetails}>
  User Details
  </Button>
</HStack>
  )
}

export default HomePage