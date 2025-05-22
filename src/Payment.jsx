import { useLocation, useNavigate } from "react-router-dom"
import gpay from './assets/gpay.jpg'
import { useState } from "react"

const Payment = () => {
    const [time,setTime] = useState("")
    const location = useLocation()
    const doctor = location.state?.doctor;
    const doctorName = doctor.doctorName;
    const navigate = useNavigate()

     function handleClick(){
        if (!time) {
        alert("Please select time and Payment Options");
       return;
         }
         let obj = {
            time:time,
            name:doctorName
         }
        navigate('/success',{state:{imfo:obj}})
     }

  return (
<div className="w-full m-auto ">
     <div>
         <h1 className="font-bold text-md h-8 flex items-center pl-5 mt-5 text-gray-400  "><em>CHOOSE TIMINGS :</em></h1> 
         <hr className="text-slate-400 w-[90%] m-auto" />
          <div className="mt-2">
               <div className="flex justify-evenly w-full  h-10 items-center">
                  <input value="9:45 AM" onChange={(e)=>setTime(e.target.value)} type="radio" name="time" id="mor" className="scale-100 accent-black " /><label htmlFor="mor">9:45 AM</label>
                  <input value="2:00 PM" onChange={(e)=>setTime(e.target.value)} type="radio" name="time" id="aft" className="scale-100 accent-black " /> <label htmlFor="aft">2:00 PM</label>
                  <input value="6:45 PM" onChange={(e)=>setTime(e.target.value)} type="radio" name="time" id="eve" className="scale-100 accent-black " /><label htmlFor="eve">6:45 PM</label>
                </div>
          </div>
      </div>

     <div>
       <h1 className=" font-bold text-md h-8 flex items-center mt-5 text-gray-400  pl-5"><em>CHOOSE PAYMENT OPTION :</em></h1> 
        <hr className="text-slate-400 w-[90%] m-auto" />
     </div>

<div className=" w-[80%] ">    
    <div className="w-full mt-4 m-auto flex justify-around items-center ml-7">
        <div className="flex gap-3 w-[84%] h-10 items-center">
             <input type="radio" name="payment" className="scale-120 accent-purple-600 " />
           <img className="w-7 h-7 " src="https://i.pinimg.com/736x/ae/5f/e3/ae5fe3dc423e44c0ddbef5dc64fa356b.jpg"></img>  
        </div>
        <div className="flex gap-3 w-[84%] h-10 items-center">
             <input type="radio" name="payment" className="scale-120 accent-green-600 " />
           <img className="w-7 h-6 " src={gpay} alt="GPAY | Logo"></img>
        </div>
         <div className="flex gap-1 w-[84%] h-10 items-center">
           <input type="radio" name="payment" className="scale-120 accent-blue-600 " />
           <img  className="w-14 h-9" src="https://i.pinimg.com/736x/e9/9c/11/e99c1127e426501bddeb9968ffa99223.jpg"></img> 
         </div>
    </div>  
 </div>
    <h1 className="font-bold pl-5 text-md h-8 flex items-center mt-5 w-full text-gray-400" ><em>AMOUNT :</em></h1>
     <hr className="text-slate-400 w-[90%] m-auto" />
    <p className="font-bold text-md pl-5 pt-3">{"FEE : "+parseInt(doctor.consultationFee) +"/-"}</p>

    <div className="m-auto w-[70%] mt-5 ">
     <button onClick={handleClick} className="px-10 py-2 bg-blue-400 text-white rounded-md hover:bg-blue-300"><em>MAKE PAYMENT</em></button>
    </div>
</div>
  )
}

export default Payment
