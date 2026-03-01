import React from 'react'

function Background({heroCount}) {
 
    if(heroCount==0){
   return <img src="https://media.istockphoto.com/id/2155475484/photo/happy-couple-laughing-while-working-out-in-the-park.jpg?s=612x612&w=0&k=20&c=Xcmpv7XxSklV0F3sp23xSWtaFCyHqgx93AN21O4wLD0="alt="" className='w-[60%] h-[100%] float-right overflow-auto object-cover'/>
    }

    else if(heroCount==1){
   return <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAKGzjHFZXPjSJIzyp5bFwqNXT5ov-jZjEmw&s"alt="" className='w-[60%] h-[100%] float-right overflow-auto object-cover'/>
    }

     else if(heroCount==2){
   return <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxV5xzsT99Iks7sTy40-8mQFQzsfISbseS3g&s"alt="" className='w-[60%] h-[100%] float-right overflow-auto object-cover'/>
    }

     else if(heroCount==3){
   return <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC0DG16macP5YOaHekTcdibv-jwI-R7jpS4Q&s"alt="" className='w-[60%] h-[100%] float-right overflow-auto object-cover '/>
    }
  
}

export default Background
