import React from "react";
import { Box,Image } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import UserProfileTable from "../Components/UserProfileTable";
import FlexComponent from "../Components/FlexComponent";
import EmptyCard from "../Components/EmptyCard";

const UserProfile = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [dataall,setDataall] = useState([]);
  
  const navigate = useNavigate();
  const fetchUsers = () => {
    fetch(`http://localhost:8080/?limit=10&page=${page}&filter=${filter}`)
      .then((response) => response.json())
      .then((data) => {
        
        setData(data);
      });
  };
  const fetchUsersall = () => {
    fetch(`http://localhost:8080/alldata?filter=${filter}`)
      .then((response) => response.json())
      .then((data) => {
        
        setDataall(data);
      });
  };
  useEffect(() => {
    fetchUsers();
    fetchUsersall();
  }, [page, filter]);
  console.log(dataall);

  return (
    <Box>
      <FlexComponent filter={filter} setFilter={setFilter} setPage={setPage}/>
      
{
  data.length==0?<><EmptyCard /></>
  :<>
  <UserProfileTable page={page} setPage={setPage} data={data} number={Math.ceil(dataall.length/10)}/>
  
  </>
}
    </Box>
  );
};

export default UserProfile;
