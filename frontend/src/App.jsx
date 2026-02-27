import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Registration from './pages/Registration'
import Login from './pages/Login'
import Home from './pages/Home'
import Nav from './component/Nav'
import { userDataContext } from './context/UserContext'


const App = () => {
  let {userData}=useContext(userDataContext)
  return (
    <>
    {userData && <Nav/>}
      <Routes>
        <Route path='/' element={<Home/>} />

         <Route path='/login' element={<Login/>} />

          <Route path='/signup' element={<Registration/>} />
        
      </Routes>
    </>
  )
}

export default App
