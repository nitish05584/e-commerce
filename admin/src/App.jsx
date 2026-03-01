import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Add from './pages/Add'
import Lists from './pages/Lists'
import Orders from './pages/Orders'
import Login from './pages/Login'

const App = () => {
  return (
    <>
    <Routes>
    
    <Route path='/' element={<Home/>}/>

     <Route path='/add' element={<Add/>}/>

      <Route path='/lists' element={<Lists/>}/>

       <Route path='/orders' element={<Orders/>}/>

        <Route path='/login' element={<Login/>}/>
  
    </Routes>
    </>
  )
}

export default App
