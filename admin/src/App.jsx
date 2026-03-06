import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Add from './pages/Add'
import Lists from './pages/Lists'
import Orders from './pages/Orders'
import Login from './pages/Login'
import { useContext } from 'react'
import { adminDataContext } from './context/AdminContext'

const App = () => {
  let {adminData} = useContext(adminDataContext)
  return (
    <>
   {!adminData ?<Login/>:<> <Routes>
    
    <Route path='/' element={<Home/>}/>

     <Route path='/add' element={<Add/>}/>

      <Route path='/lists' element={<Lists/>}/>

       <Route path='/orders' element={<Orders/>}/>

        <Route path='/login' element={<Login/>}/>
  
    </Routes>
    </>}
    </>
  )
}

export default App
