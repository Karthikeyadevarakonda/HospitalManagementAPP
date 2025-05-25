import { useLocation, useNavigate } from "react-router-dom"
import { FaStar } from 'react-icons/fa';


const EachDoctors = () => {
    const location = useLocation()
    const eachDoctor = location.state?.eachDoctor;
    console.log("EACH MAN",eachDoctor)
   
    const navigate = useNavigate();

    function handleClick(){
       if(eachDoctor.isAvailable){
           navigate('/payment',{state:{doctor:eachDoctor}})
       }else{
        alert("DOCTOR IS CURRENTLY UNAVAILABLE")
       }   
    }
    

  return (
    <div className="w-full md:pl-10 ">
    <div className="w-[90%] h-[100%] shadow pb-4 pl-7 md:pl-10 pt-2 mt-5 md:mb-5 mx-3.5" style={{background: '#f2f3f7',boxShadow: '0.6em 0.6em 1.2em #d2dce9, -0.5em -0.5em 1em #ffffff',borderRadius: '20px', }} >

    <div key={eachDoctor.doctorId} className="w-full  m-auto mt-5 flex justify-around" >
     <img src={eachDoctor.doctorImage} alt="" className="w-[120px] h-[120px] md:w-[150px] md:h-[140px] overflow-hidden rounded-full shadow"   />
     
     <div className="flex flex-col justify-center pl-4 flex-1/2 ">
       <span className="flex items-center space-x-1 text-black text-sm md:text-xl font-medium">
        <FaStar size={22} className="text-yellow-500" />
        <em><span>{eachDoctor.rating+" Rated"}</span></em>
      </span>

      <p className="flex items-center space-x-2 text-sm md:text-xl md:text-md pl-4">
      <span><em> {eachDoctor.isAvailable ? 'Available' : 'Leave'}</em></span> <span className={`h-2 w-2 rounded-full inline-block  ${eachDoctor.isAvailable ? 'bg-green-500' : 'bg-red-500' }`}></span>
      </p>
     </div>
      
    </div>

    <div className="pt-6 md:pb-5 w-full">

       <div className="space-y-1 md:space-y-2 text-lg md:text-xl">
         <div className="font-medium text-slate-700">
            <span className="text-slate-600"><em>DOCTOR:</em></span>
            <span className="font-bold ml-2 truncate"><em>{eachDoctor.doctorName}</em></span>
       </div>
  
         <p className="text-slate-800 font-semibold">
           <em>Specialist in: {eachDoctor.specialization}</em>
         </p>
  
          <p className="text-slate-600">
            <em>{eachDoctor.doctorExperience} years of experience</em>
          </p>
  
          <p className="text-slate-900 font-medium">
            <em>Consultation Fee: ₹{parseInt(eachDoctor.consultationFee)}/-</em>
          </p>
      </div>

       <div className="mt-3 pr-2">
        <p className="text-sm md:text-xl text-gray-600">
          <em>{ 
            eachDoctor.rating >= 4.5
              ? "Highly rated by patients for exceptional care, communication, and positive outcomes. Known for professionalism and empathy."
              : eachDoctor.rating >= 4.0
              ? "Well-regarded with consistent patient feedback on attentiveness and care quality."
              : eachDoctor.rating >= 3.5
              ? "Moderately rated — known for convenience and reliability with some room for improvement."
              : eachDoctor.rating >= 3.0
              ? "Mixed reviews — decent care, though patients note areas needing improvement."
              : "Below average — review more patient experiences before booking."
          }</em>
        </p>
      </div>


      <div className="m-auto w-[80%]">
        <button onClick={()=>handleClick()} className={`text-white px-2 py-2 rounded-md mt-5  ${eachDoctor.isAvailable ? 'bg-green-700' : 'bg-red-500' }  font-bold `}>
          <em>{eachDoctor.isAvailable ? 'BOOK APPOINTMENT' : 'UNAVAILABLE ' }</em>
        </button>
     </div>

    </div>
    
    </div>
    </div>
  )
}

export default EachDoctors
