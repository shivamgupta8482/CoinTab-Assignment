import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import UserProfile from './UserProfile'



const Mainroutes = () => {
  return (
    <Routes>
 <Route path="/" element={<HomePage />}></Route>
 <Route path="/users" element={<UserProfile />}></Route>
 
    </Routes>
  )
}

export default Mainroutes