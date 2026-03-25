import React from 'react'
import Title from './Title'


const OurPolicy = () => {
  return (
    <div className='w[100vw] h-[100vh] md:h-[70vh] flex items-center justify-start flex-col bg-gradient-to-b from-[#141414] to-[#0c2025] gap-[50px] '>

        <div className='h-[8%] w-[100%] text-center mt-[70px] '> 
            
            <Title text1={"OUR"} text2={"POLICY"}/>

            <p className='w-[100%] m-auto text-[13px] md:text-[20px] px-[10px] text-blue-100 '>

                Customer-friendly Policies - commited to your Satisfication and Safity.

            </p>

        </div>
      
    </div>
  )
}

export default OurPolicy
