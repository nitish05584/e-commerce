import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Registration from './pages/Registration'
import Login from './pages/Login'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />

         <Route path='/login' element={<Login/>} />

          <Route path='/signup' element={<Registration/>} />
        
      </Routes>
    </div>
  )
}

export default App
