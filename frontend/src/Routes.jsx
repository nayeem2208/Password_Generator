import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from './components/login.jsx'
import Signup from './components/Signup.jsx'
import Home from './components/Home.jsx'


function Routers() {
  return (
   <Routes>
    <Route path='/login'  element={<Login/>}/>
    <Route path='/signup'  element={<Signup/>}/>
    <Route path='/'  element={<Home/>}/>
   </Routes>
  )
}

export default Routers
