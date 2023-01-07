import React from 'react'
import { Button,HStack,Box,ButtonGroup, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"
const HomePage = () => {
    const [loading,setLoading] = useState(false);
    const [loading1,setLoading1] = useState(false);
    const toast = useToast();
const fetchUsers=()=>{
    setLoading(true)
    fetch('http://localhost:8080/getall')
  .then((response) => response.json())
  .then((data) => {
    
   if(data){
    toast({
      title: 'Data Fetched Successfully',
    
      status: 'success',
      duration: 2000,
      isClosable: true,
    })
   }
    setLoading(false);
  });
  
}
const DeleteUsers=()=>{
  alert("All The Data Will be Deleted");
    setLoading1(true)
    fetch('http://localhost:8080/delete', {
        method: 'DELETE'
       
      })
        .then((response) => response.json())
        .then((data) => {
         
          setLoading1(false)
        })
        .catch((error) => {
         // console.error('Error:', error);
          setLoading1(false);
        });
        toast({
          title: 'Data Deleted Successfully',
          status: 'error',
          duration: 2000,
          isClosable: true,
        })
}
const navigate = useNavigate();
const userDetails=()=>{
navigate("/users")
}
  return (
   <>
   <Box bg="black" h="100vh">
   <Box
    display='flex'
    alignItems='center'
    justifyContent='center'
    
    width='100%'
    py={310}
    bgImage="url('https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&w=1000&q=80')"
    bgPosition='center'
    bgRepeat='no-repeat'
    
  >
    <ButtonGroup gap='4'>
    {
    loading?<Button
    isLoading
    colorScheme='pink'
    
  >
    Click me
  </Button>
    : <Button onClick={fetchUsers} colorScheme='pink'>
    Fetch Users
   </Button>
 }
  {
    loading1?<><Button
    isLoading
    colorScheme='pink'
    
  >
    Click me
  </Button></>
    :<Button colorScheme='pink' onClick={DeleteUsers}>
    Delete Users
    </Button>
  }
  <Button colorScheme='pink' onClick={userDetails}>
  User Details
  </Button>
    </ButtonGroup>
  </Box>
   </Box>
    
   </>
  )
}

export default HomePage