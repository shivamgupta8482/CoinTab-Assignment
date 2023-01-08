import React from "react";
import { Box, Button } from "@chakra-ui/react";

const Pagenation = ({ totalPages, handlePage, currentpage }) => {
  let page = new Array(totalPages).fill(0).map((ele, i) => {
    return (
      <Button
        colorScheme="pink"
        key={i}
        disabled={currentpage === i + 1}
        onClick={() => handlePage(i + 1)}
      >
        {i + 1}
      </Button>
    );
  });
  return (
    <Box
w="max-content"
    display="flex"
   gap="2px"
   margin="auto"
   pb="20px"
    >
      {page}
    </Box>
  );
};

export default Pagenation;
