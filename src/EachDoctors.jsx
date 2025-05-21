import { useLocation } from "react-router-dom"
import { FaStar } from 'react-icons/fa';


const EachDoctors = () => {
    const location = useLocation()
    const eachDoctor = location.state?.eachDoctor;
    console.log("EACH MAN",eachDoctor)

  return (
    <div className="w-full">
    <div className="w-[90%] shadow pb-4 pl-4 pt-4 mt-5 mb-5 mx-3.5 " style={{background: '#f2f3f7',boxShadow: '0.6em 0.6em 1.2em #d2dce9, -0.5em -0.5em 1em #ffffff',borderRadius: '20px', }} >

    <div key={eachDoctor.doctorId} className="w-full  m-auto mt-5 flex justify-around" >
     <img src={eachDoctor.doctorImage} alt="" className="w-[120px]  overflow-hidden rounded-full shadow"   />
     
     <div className="flex flex-col justify-center pl-4 flex-1/2 ">
       <span className="flex items-center space-x-1 text-black text-lg font-medium">
        <FaStar size={22} className="text-yellow-500" />
        <em><span>{eachDoctor.rating+" Rated"}</span></em>
      </span>

      <p className="flex items-center space-x-2 text-lg md:text-md pl-4">
      <span><em> {eachDoctor.isAvailable ? 'Available' : 'Leave'}</em></span> <span className={`h-2 w-2 rounded-full inline-block  ${eachDoctor.isAvailable ? 'bg-green-500' : 'bg-red-500' }`}></span>
      </p>
     </div>
      
    </div>

    <div className="pt-4">
      <span className="text-lg"><em>DOCTOR :</em> </span> <span className='text-lg md:text-xl font-bold truncate'><em> {eachDoctor.doctorName}</em></span>
       <p className='text-lg text-gray-800 font-semibold'><em>{"Specialist in : "+eachDoctor.specialization}</em></p>
       <p className='text-md text-slate-900 truncate'><em>{"ConsultationFee : "+parseInt(eachDoctor.consultationFee) +"/-"}</em></p>
                          
     
       

       <div className="mt-3">
        <p className="text-sm text-gray-600">
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
      <button className="text-white px-2 py-2 rounded-md mt-5 bg-green-800 font-bold "><em>BOOK APPOINTMENT</em></button>
       </div>
    </div>
    
    </div>
    </div>
  )
}

export default EachDoctors
