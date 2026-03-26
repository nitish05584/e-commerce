import React from 'react'
import Title from '../component/Title'
import NewLetterBox from '../component/NewLetterBox'

const About = () => {
  return (
    <div className='w-[99vw] mid:w-[100vw] min-h-[100vh] flex items-center justify-center flex-col bg-gradient-to-b from-[#141414] to-[#0c2025] gap-[50px] pt-[80px] '>

      <Title text1={'ABOUT'} text2={'US'} />

      <div className='w-[100%] flex items-center justify-center flex-col lg:flex-row '>
        <div className='lg:w-[50%] w-[100%] flex items-center justify-center '>
          <img src="https://www.shutterstock.com/image-illustration/about-us-concept-hand-pressing-260nw-203514820.jpg" alt="" className='lg:w-[65%] w-[80%] shadow-md shadow-black rounded-sm'/>
        </div>
        <div className='lg:w-[50%] w-[80%] flex items-start justify-center gap-[20px] flex-col mt-[20px] lg:mt-[0px] '>
          <p className='lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px] '>neCart born for smart seamless shopping-created to deliver quality products,trending styles,and everyday essentials in one place .with reliable service,fast delivery,and great value,OneCart makes your online shopping exprience simple,satisfying,and strees-free

          </p>
          <p className='lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px] '> modern shoppers-coming sty;e, convenience, and affordavility . Wheather it's fashion essentials, or trends, we bring everything you nedd to one trustes platform with fast delivery,easy returns ,and a customer-first shopping exprience you'll love.</p>
          <p className='lg:w[80%] w-[100%]text-[15px] text-[white] lg:text-[18px] mt-[10px] font-bold '>Our Mission</p>
          <p className='lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px] '> Our mission is to redefine online shopping by delivering connects, affortibility, and convenience. OneCart connects customers with trusted products and brands, offering a seamless, customer-focused exprience that saves time, add value, and fits every lifestyle and need. </p>
        </div>

      </div>
      <div className='w-[100%] flex items-center justify-center flex-col gap-[10px]'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
        <div className='w-[80%] flex itmes-center justify-center lg:flex-row  flex-col py-[40px]'>

          <div className='lg:w-[33%] w-[90%] h-[250px] border-[1px] border-gray-100  flex itemse-center justify-center gap-[20px] flex-col px-[40px] py-[10px] text-[white] background-blur-[2px] bg-[#ffffff0b] '>
            <b className='text-[20px] font-semibold text-[#bff1f9] '>Quality Assurance</b>
            <p>We guarantee quality through strict checks,reliable sourcing, and a commitment to customer satisfaction always. </p>
          </div>


          <div className='lg:w-[33%] w-[90%] h-[250px] border-[1px] border-gray-100  flex itemse-center justify-center gap-[20px] flex-col px-[40px] py-[10px] text-[white] background-blur-[2px] bg-[#ffffff0b] '>
            <b className='text-[20px] font-semibold text-[#bff1f9] '>Convenience</b>
            <p>Shop easily with fast ,delivery simple navigation secue=re chackout, and everything you need in one place. </p>
          </div>



          <div className='lg:w-[33%] w-[90%] h-[250px] border-[1px] border-gray-100  flex itemse-center justify-center gap-[20px] flex-col px-[40px] py-[10px] text-[white] background-blur-[2px] bg-[#ffffff0b] '>
            <b className='text-[20px] font-semibold text-[#bff1f9] '>Exceptional Customer Service</b>
            <p>Our dedicated support team ensures quick responses, helpful solutions,and a smooth shopping experience every time. </p>
          </div>
        </div>
      </div>


      <NewLetterBox/>
      
    </div>
  )
}

export default About
