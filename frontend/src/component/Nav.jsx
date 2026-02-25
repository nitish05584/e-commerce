import React, { useContext } from 'react'
import logo from "../assets/logo.png"
import { IoSearchCircleOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

import { MdOutlineShoppingCart } from "react-icons/md";
import { userDataContext } from '../context/UserContext';

function Nav() {
  let {userData}=useContext(userDataContext)
  return (
    <div className='w-[100vw] h-[70px] bg-white z-10 fixed top-0 flex items-center justify-between px-[30px] shadow-md shadow-black'>

      <div className='w-[30%] flex items-cneter justify-start gap-[10px]'>
        <img src={logo} alt=""className='w-[35px]'/>
        <h1 className='text-[25px] text-[black] font-sans'>OneCart</h1>
      </div>


      <div className='w-[40%]'>
        <ul className='flex items-center justify-center gap-[19px] text-white'>
          <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl'>HOME</li>
          <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl'>COLLECTIONS</li>
          <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl'>ABOUT</li>
          <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl'>CONTACT</li>
        </ul>

      </div>


      <div className='w-[30%] flex items-center justify-end gap-[20px]'>
         <IoSearchCircleOutline className='w-[38px] h-[38px] text-[#000000] cursor-pointer' />

       { !userData && <FaRegUserCircle className='w-[28px] h-[28px] text-[#000000] cursor-pointer'/>}

      {userData && <div className='w-[30px] h-[30px] bg-[#080808] text-[white] rounded-full flex items-center justify-center'>{userData?.name.slice(0,1)}</div>}

         <MdOutlineShoppingCart className='w-[38px] h-[38px] text-[#000000] cursor-pointer ' />
         <p className='absolute w-[18px] h-[18px] itemse-center md:flex justify-center bg-black px-[5px] py-[2px] text-white rounded-full text-[9px] top-[10px] right-[23px] hidden'>10</p>


      </div>
      
    </div>
  )
}

export default Nav
