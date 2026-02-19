import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { useNavigate } from 'react-router-dom'

import { IoEyeOutline } from "react-icons/io5";

import { IoEyeSharp } from "react-icons/io5";

const Registration = () => {
  let navigate=useNavigate();
  let [show,setShow]=useState(false);
  return (
    <div className='w-screen h-screen bg-gradient-to-b from-[#141414] to-[#0c2025] text-white flex flex-col items-center justify-start'>
      
      <div className='w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer'onClick={()=>navigate("/")}>
        <img src={logo} alt="" className='w-[40px]'/>
        <h1 className='text-[22px] font-sans '>OneCart</h1>
      </div>



      <div className='w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]'>
          
       <span className='text-[25px] font-semibold'>Registration Page</span>

       <span className='text-[16px]'>welcome to OnCart, Place your order</span>
        
        </div> 

        <div className='max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border-[1px] border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center '>
          <form className='w-[90%] h-[90%]  flex flex-col itens-center justify-start gap-[20px] '>

           
           <div className='w-[90%]h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer '>
            <img src="https://png.pngtree.com/png-clipart/20230916/original/pngtree-google-logo-vector-png-image_12256710.png" alt="" className='w-[20px]'/>Registration with Google
           </div>


           <div className='w-[100%] h-[20px] flex items-center justify-center gap-[20px] '>
           
           <div className='w-[40%] h-[1px] bg-[#96969635]'></div>OR<div className='w-[40%] h-[1px] bg-[#96969635]'></div>
           </div>





             <div className='w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px] relative '>
              <input type='text' className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold outline-none'placeholder='UserName'required/>
             

               

                
              <input type='text' className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold outline-none'placeholder='Email'required/>
             

               

             
              <input type={show?"text":"password"} className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold outline-none'placeholder='password'required/>

            {!show && <IoEyeOutline className='w-[20] h-[20px] cursor-pointer absolute right-[5%] ' onClick={()=>setShow(prev=>!prev)}/>}

                {show && <IoEyeSharp className='w-[20] h-[20px] cursor-pointer absolute right-[5%] 'onClick={()=>setShow(prev=>!prev)}/>}

             
             <button className='w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold'> Create Account</button>
             <p className='flex gap-[10px]'>you have any account?<span className='text-[#5555f6cf] text-[17px] font-semibold cursor-pointer'onClick={()=>navigate("/login")}>Login</span></p>
             </div>
    
          </form>
        </div>
      
    </div>
  )
}

export default Registration
