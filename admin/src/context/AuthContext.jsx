import React, { createContext } from 'react'

export const authDataContext=createContext()
function AuthContext({children}) {
   let serverUrl="https://e-commerce-odl1.onrender.com"
    let value={
     serverUrl
    }
  return (
    <div>
        <authDataContext.Provider value={value}>
            {children}
        </authDataContext.Provider>
      
    </div>
  )
}

export default AuthContext
