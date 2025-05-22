
import { useLocation, useNavigate } from 'react-router-dom'
import { FaStar } from 'react-icons/fa';
import { useEffect, useState } from 'react';


const Doctors = () => {

    const location = useLocation();
    const navigate = useNavigate()
    const [doctors, setDoctors] = useState(null);
   

   useEffect(() => {
    const timer = setTimeout(() => {
      setDoctors(location.state?.doctors || []);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location.state]);


     function handleClick(obj){
        navigate('/eachDoctors',{state:{eachDoctor:obj}})
       }

 const AllDoctors =()=>{
   return(
    <div className='mx-2 my-2 md:grid sm:grid-cols-2 md:grid-cols-3  md:gap-x-3 '>
      {doctors.map((obj)=>{
        return(
            
            <div key={obj.doctorId} onClick={()=>handleClick(obj)} className='flex w-full h-40 md:h-50 shadow bg-white mt-4 rounded-md'  style={{background: '#f2f3f7',boxShadow: '0.6em 0.6em 1.2em #d2dce9, -0.5em -0.5em 1em #ffffff',borderRadius: '20px', }}>
                <div className=' pl-2 py-2 md:pl-5 w-[120px] md:w-[140px] flex justify-center items-center flex-col'>
                    <img src={obj.doctorImage} alt="" className='rounded-2xl w-full' />
                    <p className="flex items-center space-x-2 text-md md:text-md">
                     <span className={`h-2 w-2 rounded-full inline-block  ${obj.isAvailable ? 'bg-green-500' : 'bg-red-500' }`}></span><span>{obj.isAvailable ? 'Available' : 'Leave'}</span>
                    </p>
                </div>
                <div className='py-5 w-1/2 pl-2 md:pl-10 md:pt-9'>
                    <p className='text-lg md:text-xl font-bold truncate'> {obj.doctorName}</p>
                    <p className='text-lg text-gray-800 font-semibold truncate whitespace-nowrap overflow-hidden text-ellipsis'>{obj.specialization}</p>
                    <p className='text-md text-gray-600 truncate'>{"ConsultationFee : "+parseInt(obj.consultationFee)}</p>
                    
                     <span className="flex items-center space-x-1 text-black text-lg font-medium">
                       <FaStar size={22} className="text-amber-500" />
                       <span>{obj.rating}</span>
                     </span>     
                </div>
            </div>
        )
      })}
    </div>
         )
     }  


const Shimmer = ()=>{
    return (
      <div className='mx-2 my-2 md:grid sm:grid-cols-2 md:grid-cols-3  md:gap-x-3 '>
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index}
            className="min-w-[100px] mt-2 md:w-48 p-2 md:p-4 h-24 md:h-30 cursor-pointer flex animate-pulse bg-gray-300 rounded-lg"
          >
           <div className='bg-slate-400 w-[40%] rounded-2xl'></div>
           <div className='flex-1/2 p-3 space-y-2.5'>
            <p className='w-full h-3 bg-gray-400 rounded-xl'></p>
            <p className='w-full h-3 bg-gray-400 rounded-xl'></p>
            <p className='w-full h-3 bg-gray-400 rounded-xl'></p>
           </div>
          </div>
        ))}
      </div>

    );
}
    


   return (
    <>
    {doctors && doctors.length !== 0 ? <AllDoctors/>:<Shimmer/> }  
    </>
    
  )
}

export default Doctors
