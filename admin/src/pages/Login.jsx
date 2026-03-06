import React, { useContext, useState } from 'react'
import logo from "../assets/vcart.png"

import { useNavigate } from 'react-router-dom'

import { IoEyeOutline } from "react-icons/io5";

import { IoEyeSharp } from "react-icons/io5";


import axios from 'axios';
import { authDataContext } from '../context/AuthContext';
import { adminDataContext } from '../context/AdminContext';



const Login = () => {
  let navigate=useNavigate();

  let [show,setShow]=useState(false);

   let {serverUrl}=useContext(authDataContext)

  let [email,setEmail]=useState("")
  
  let [password,setPassword]=useState("")

  let {adminData,getAdmin}=useContext(adminDataContext)


   const AdminLogin=async(e)=>{
    e.preventDefault();
    try {
      const result=await axios.post(serverUrl +'/api/auth/adminlogin',{email,password},{withCredentials:true})
      console.log(result.data)
      getAdmin();
       navigate("/")
      
    } catch (error) {
      console.log(error)
    }
  }



  


  return (
    <div className='w-screen h-screen bg-gradient-to-b from-[#141414] to-[#0c2025] text-white flex flex-col items-center justify-start'>
      
      <div className='w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer'>
        <img src={logo} alt="" className='w-[40px]'/>
        <h1 className='text-[22px] font-sans '>OneCart</h1>
      </div>



      <div className='w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]'>
          
       <span className='text-[25px] font-semibold'>Login Page</span>

       <span className='text-[16px]'>welcome to OnCart, Apply to admin login</span>
        
        </div> 

        <div className='max-w-[600px] w-[90%] h-[400px] bg-[#00000025] border-[1px] border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center '>
          <form onSubmit={AdminLogin} className='w-[90%] h-[90%]  flex flex-col itens-center justify-start gap-[20px] '>

           
         





             <div className='w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px] relative '>
              
              

                
              <input type='text' className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold outline-none'placeholder='Email'required onChange={(e)=>setEmail(e.target.value)} value={email}/>
             

               

             
              <input type={show?"text":"password"} className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold outline-none'placeholder='password'required onChange={(e)=>setPassword(e.target.value)} value={password}/>

            {!show && <IoEyeOutline className='w-[20] h-[20px] cursor-pointer absolute right-[5%] bottom-[50%]' onClick={()=>setShow(prev=>!prev)}/>}

                {show && <IoEyeSharp className='w-[20] h-[20px] cursor-pointer absolute right-[5%] bottom-[50%]'onClick={()=>setShow(prev=>!prev)}/>}


                  

             
             <button className='w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold'> Login</button>
             
             </div>
    
          </form>
        </div>
      
    </div>
  )
}

export default Login
