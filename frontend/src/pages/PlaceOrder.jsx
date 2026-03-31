import React, { useContext, useState } from 'react'
import Title from '../component/Title'
import CartTotal from '../component/CartTotal'
import axios from 'axios'

import razorpay from '../assets/razorpay.png'
import { shopDataContext } from '../context/ShopContext'
import { authDataContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

function PlaceOrder() {
  let [method,setMethod]=useState('cod')
  const [apiError,setApiError]=useState('')

  let navigate=useNavigate()
  const {cartItem,setCartItem,getCartAmount,delivery_fee,products}=useContext(shopDataContext)
  let {serverUrl}=useContext(authDataContext)
  let [formData,setFormData]=useState({
    firstName:'',
    lastName:'',
    email:'',
    street:'',
    city:'',
    state:'',
    pincode:'',
    country:'',
    phone:''
  })
  
  const onChangeHandler=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setFormData(data=>({...data,[name]:value}))
  }

  const loadRazorpayScript = () =>
    new Promise((resolve) => {
      if (window.Razorpay) return resolve(true)
      const script = document.createElement('script')
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'
      script.async = true
      script.onload = () => resolve(true)
      script.onerror = () => resolve(false)
      document.body.appendChild(script)
    })

  const initPay=async(order)=>{
    setApiError('')
    const ok = await loadRazorpayScript()
    if (!ok) {
      setApiError('Razorpay SDK load failed')
      return
    }

    const key =
      order?.key ||
      import.meta.env.VITE_RAZORPAY_KEY_ID

    if (!key) {
      setApiError('Razorpay key missing in frontend env')
      return
    }

    const options={
      key,
      amount:order.amount,
      currency:order.currency || 'INR',
      name:'Order Payment',
      description:'Order Payment',
      order_id:order.id,
      receipt:order.receipt,
      handler: async (response) => {
        console.log('payment success:', response)
        setCartItem({})
        navigate("/order")
      }
    }

    const rzp=new window.Razorpay(options)
    rzp.on('payment.failed', (resp) => {
      setApiError(resp?.error?.description || 'Payment failed')
    })
    rzp.open()
  }

   const onSubmitHandler=async(e)=>{
      e.preventDefault()
      setApiError('')

      try {
        let orderItems=[]
        for(const items in cartItem){
          for(const item in cartItem[items]){
            if(cartItem[items][item]>0){
              const itemInfo=structuredClone(products.find(product=>product._id===items))
              if(itemInfo){
                itemInfo.size=item
                itemInfo.quantity=cartItem[items][item]
                orderItems.push(itemInfo)
              }
            }
          }
        }
        let orderData={
          address:formData,
           items:orderItems,
           amount:Number(getCartAmount()) + Number(delivery_fee)
        }
        switch(method){
          case 'cod':
          const result=await axios.post(serverUrl +'/api/order/placeorder',orderData,{withCredentials:true})
          console.log(result.data)
          if(result.data){
          setCartItem({})
           navigate("/order")
         
        }else{
          console.log(result.data.message)
        }
         
          break;

          case 'razorpay': {
            const resultRazorpay=await axios.post(
              serverUrl + "/api/order/razorpay",
              orderData,
              {withCredentials:true}
            )
            if(resultRazorpay?.data?.id){
              await initPay(resultRazorpay.data)
            } else {
              setApiError(resultRazorpay?.data?.message || 'Razorpay order create failed')
            }
            break
          }

          default: 
          break;
        
      }
      } catch (error) {
       console.log(error) 
      }
    }

  return (
    <div className='w-[100vw] min-h-[100vh] flex items-center justify-center flex-col bg-gradient-to-b from-[#141414] to-[#0c2025] gap-[50px] md:flex-row relative '>
      
      <div className='lg:w-[50%] w-[100%] h-[100%] flex items-center justify-center lg:mt-[0px] mt-[90px] '>

        <form className='lg:w-[70%] w-[95%] lg:h-[70%] h-[100%] ' onSubmit={onSubmitHandler}>
          <div className='py-[10px]'>
            <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
          </div>
          <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px] '>

            <input type='text'placeholder='first name' className='w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-[white] text-[18px] px-[20px] shadow-sm shadow-[#343434] 'onChange={onChangeHandler} name='firstName' value={formData.firstName} required/>


            <input type='text'placeholder='Last name' className='w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-[white] text-[18px] px-[20px] shadow-sm shadow-[#343434] ' required onChange={onChangeHandler} name='lastName' value={formData.lastName}/>
          </div>

          <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px] '>
            <input type='email'placeholder='Email address' className='w-[100%] h-[50px] rounded-md bg-slate-700 placeholder:text-[white] text-[18px] px-[20px] shadow-sm shadow-[#343434] ' required onChange={onChangeHandler} name='email' value={formData.email}/>
          </div>



          <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px] '>
            <input type='text'placeholder='street' className='w-[100%] h-[50px] rounded-md bg-slate-700 placeholder:text-[white] text-[18px] px-[20px] shadow-sm shadow-[#343434] ' required onChange={onChangeHandler} name='street' value={formData.street}/>
          </div>






          <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px] '>
            <input type='text'placeholder='City' className='w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-[white] text-[18px] px-[20px] shadow-sm shadow-[#343434] ' required onChange={onChangeHandler} name='city' value={formData.city}/>

             <input type='text'placeholder='State' className='w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-[white] text-[18px] px-[20px] shadow-sm shadow-[#343434] ' required onChange={onChangeHandler} name='state' value={formData.state}
             />
          </div>




          <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px] '>
            <input type='text'placeholder='pincode' className='w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-[white] text-[18px] px-[20px] shadow-sm shadow-[#343434] ' required onChange={onChangeHandler} name='pincode' value={formData.pincode}/>

             <input type='text'placeholder='Country' className='w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-[white] text-[18px] px-[20px] shadow-sm shadow-[#343434] ' required onChange={onChangeHandler} name='country' value={formData.country}/>
          </div>



          <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px] '>
            <input type='number'placeholder='phone' className='w-[100%] h-[50px] rounded-md bg-slate-700 placeholder:text-[white] text-[18px] px-[20px] shadow-sm shadow-[#343434] ' required onChange={onChangeHandler} name='phone' value={formData.phone}/>
          </div>

          <div>
            <button type='submit' className='text-[18px] active:bg-slate-500 cursor-pointer bg-[#3bcee848] py-[10px] px-[50px] rounded-2xl text-white flex items-center justify-center gap-[20px] absolute lg:right-[20%] bottom-[7%] right-[35%] border-[1px] border-[#80808049] ml-[31px] mt-[20px] '>PLACE ORDER
            </button>
          </div>

        </form>

      

      </div>
        <div className='lg:w-[50%] w-[100%] min-h-[100%] flex items-center justify-center gap-[30px] '>

          <div className='lg:w-[70%] w-[90%] lg:h-[70%] h-[100%] flex items-center justify-center gap-[10px] flex-col '>
            <CartTotal/>

             <div className='py-[10px]'>
            <Title text1={'PAYMENT'} text2={'METHOD'}/>
          </div>
          <div className='w-[100%] h-[30vh] lg:h-[100px] flex items-start mt-[20px] lg:mt-[0px] justify-center gap-[50px] '>
            <button type='button' onClick={()=>setMethod('razorpay')} className={`w-[150px] h-[50px] rounded-sm ${method==='razorpay' ?'border-[5px] border-blue-900 rounded-sm':''} `}>
              <img src={razorpay} alt="" className='w-[100%] h-[100%] object-fill rounded-sm '/>
            </button>


            <button type='button' onClick={()=>setMethod('cod')} className={`w-[200px] h-[50px] bg-gradient-to-b from-[#95b3f8] to-[white] text-[14px] px-[20px] rounded-sm text-[#332f6f] font-bold ${method=='cod'? 'border-[5px] border-blue-900 rounded-sm':''} `}>CASH ON DELIVERY
            </button>

          </div>
          </div>
        </div>

      
    </div>
  )
}

export default PlaceOrder
