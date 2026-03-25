import React from 'react'
import logo from "../assets/logo.png"
const Footer = () => {
  return (
    <div className='w-[100%] md:h-[36vh] h-[21vh] mb-[77px] md:mb-[0px] '>

        <div className='w-[100%] md:h-[30vh] md:mb-[0px] bg-[#bdfcfcec] flex items-center justify-center md:px-[50px] px-[5px] '>

            <div className='md:w-[30%] w-[35%] h-[100%] flex items-start justify-center flex-col gap-[5px]'>
                <div className='flex items-start justify-start gap-[5px] mt-[10px] md:mt-[40px]'>
                    <img src= {logo} alt=""/>
                
            </div>

            </div>
        </div>
      
    </div>
  )
}

export default Footer
