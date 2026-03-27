import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
import { authDataContext } from './AuthContext'
import { useEffect } from 'react'
import axios from 'axios'

export const shopDataContext=createContext()
const ShopContext = ({children}) => {
  let [products,setProducts]=useState([])

  let [search,setSearch]=useState('')

  let [showSearch,setShowSearch]=useState(false)
   let [cartItem,setCartItem]=useState({})

  let {serverUrl}=useContext(authDataContext)
  
  let currency='₹';

  let delivery_fee=50;

  const getProducts=async()=>{
    try {
      let result=await axios.get(serverUrl + "/api/product/list")

      console.log(result.data)

      setProducts(result.data)
     
      
    } catch (error) {
      console.log(error)
    }
  }

  const addToCart=async(itemId,size)=>{
   if(!size){
    console.log("select Product Size");
    return;
   }
   let cartData=structuredClone(cartItem);
   if(cartData[itemId]){
    if(cartData[itemId][size]){
      cartData[itemId][size] +=1;
    }else{
      cartData[itemId][size]=1;
    }
   }else{
    cartData[itemId]={};
    cartData[itemId][size]=1;
    
   }
   setCartItem(cartData);
  }
  useEffect(()=>{
    getProducts()
  },[])

    let value={
        products,currency,delivery_fee,getProducts,
        search,setSearch,
        showSearch,setShowSearch
    }
  return (
    <div>
        <shopDataContext.Provider value={value}>
            {children}
        </shopDataContext.Provider>
      
    </div>
  )
}

export default ShopContext
