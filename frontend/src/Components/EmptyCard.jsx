import React from 'react'
import { Card,Stack,Image,Heading,CardBody,Text } from '@chakra-ui/react'

const EmptyCard = () => {
  return (
    <Card maxW='sm' m="auto">
    <CardBody m="auto">
      <Image
        src='https://media.tenor.com/ySU7TUgwfZoAAAAM/tolkie-sad.gif'
        alt='Green double couch with wooden legs'
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>NO DATA AVAILABLE</Heading>
        
      </Stack>
    </CardBody>
   
   
  </Card>
  )
}

export default EmptyCard