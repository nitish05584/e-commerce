import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Registration from './pages/Registration'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/signup' element={<Registration/>} />
        
      </Routes>
    </div>
  )
}

export default App
