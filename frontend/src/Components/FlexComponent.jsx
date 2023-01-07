import React from 'react'
import { Flex,Button,useColorMode,Select } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
const FlexComponent = ({filter,setFilter,setPage}) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const navigate = useNavigate();
    function filter(e){
setFilter(e.target.value);
setPage(1);
    }
  return (
    <Flex w="40%" gap="30px" m="auto" color="orange" p="50px">
        <Select
          placeholder="Select option"
          onChange={(e) => filter(e)}
        >
          <option value="">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>
        <Button onClick={toggleColorMode} width="200px" colorScheme={"pink"}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
        <Button
          onClick={() => navigate("/")}
          width="200px"
          colorScheme={"pink"}
        >
          HomePage
        </Button>
      </Flex>
  )
}

export default FlexComponent