import React from 'react'
import Title from './Title'
import { useContext } from 'react'
import { shopDataContext } from '../context/ShopContext'
import { useState } from 'react'
import { useEffect } from 'react'
import Card from './Card'

const LatestCollection = () => {

  let {products}=useContext(shopDataContext)

  let [latestProducts,setLatestProducts]=useState([])

  useEffect(()=>{
  setLatestProducts(products.slice(0,8))
  },[])
  return (
    <div>
    <div className='h-[8%] w-[100%] text-center md:mt-[50px]'>

      <Title text1={"LATEST"} text2={"COLLECTIONS"}/>

      <p className='w-[100%] m-auto text-[13px] md:text-[20px] px-[10px] text-blue-100'>Step Into Style - New Collection Dropping This Season !</p>
      
    </div>


    <div className='w-[100%] h-[50%] mt-[3%] flex items-center justify-enter flex-wrap gap-[50px]'>
      {
        latestProducts.map((item,index)=>(
        <Card key={index} name={item.name} image={item.image1} id={item._id} price={item.price}/>
        ))
      }</div>

    </div>
  )
}

export default LatestCollection
