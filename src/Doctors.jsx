
import { useLocation } from 'react-router-dom'
import { FaStar } from 'react-icons/fa';

const Doctors = () => {
    const location = useLocation();
    const doctors = location.state?.doctors;
   
    console.log("OUR DOCTS:",doctors)
   return (
    
    <div className='mx-2 my-2 md:grid sm:grid-cols-2 md:grid-cols-3  md:gap-x-3 '>
      {doctors.map((obj)=>{
        return(
            
            <div className='flex w-full h-40 md:h-50 shadow bg-white mt-4 rounded-md'  style={{background: '#f2f3f7',boxShadow: '0.6em 0.6em 1.2em #d2dce9, -0.5em -0.5em 1em #ffffff',borderRadius: '20px', }}>
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

export default Doctors
