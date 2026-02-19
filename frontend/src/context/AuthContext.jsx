import React, { createContext } from 'react'
export const authDataContext=createContext()
function AuthContext({children}) {
let ServerUrl="http://8080"
    let value={
       ServerUrl
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
