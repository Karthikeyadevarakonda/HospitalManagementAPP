// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom"
// import axios from "axios";

const Hospitals = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const hospitals = location.state?.hospitals;
  const [fetchData,setFetchData] = useState([])
  const [search,setSearch] = useState("")

  useEffect(()=>{

    function start(){
      
      const filteredData = hospitals?.hospitals.filter((obj)=>obj.hospitalName?.toLowerCase().startsWith(search.toLowerCase()));
        
        // const ByHospitalName = 
      //   const BySpecialiZationName = obj.specialists?.some((spec)=>
      //     spec.specialistsName?.toLowerCase().startsWith(search.toLowerCase())
      //   )
      //   return ByHospitalName || BySpecialiZationName;
      // })
      
      setFetchData(filteredData)
    }
      start()
  },[search,hospitals])
 
  
  //if we have huge data use this technique pass the id via params and make fetch calls 
  // const {id} = useParams()
  // const [hospitals,setHospitals] = useState([])

  // useEffect(()=>{
  //   async function fetchData() {
  //     try{
  //         const response =  await axios.get(`https://spring-boot-hospital-management-api.onrender.com/locations/id/${id}`)
  //         setHospitals(response.data)
  //       }catch(err){
  //           console.error("ERR IN FETCH : ",err)
  //       }
  //     }
  //     fetchData()
  // },[id])



  if (!hospitals?.hospitals) {
    return (
     <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-0 gap-y-5 md:gap-y-8 place-items-center mt-5 px-5 mb-10">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index}
            className="w-[270px] h-[300px] mt-2 md:w-48 p-4 md:p-4  md:h-30 cursor-pointer animate-pulse bg-gray-300 rounded-lg"
          >
           <div className='bg-gray-400 w-full h-44 rounded-2xl'></div>
           <div className='py-3 px-1 space-y-2.5'>
            <p className='w-full h-4 bg-slate-400 rounded-md'></p>
            <p className='w-full h-4 bg-slate-400 rounded-md'></p>
            <p className='w-full h-4 bg-slate-400 rounded-md'></p>
           </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      
    <div className={`w-[100%] m-auto py-5 ${hospitals?.city === undefined ? "bg-white" : "bg-gray-100"}`}>

     
   
    {hospitals?.city === undefined ? " " :<h1 className="text-2xl text-slate-700 text-center font-bold  mb-3"><em>{"Hospitals in "+hospitals?.city}</em> </h1>}

     <div className="w-[80%] m-auto ">
        <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" className="border border-slate-800 w-full rounded outline-0 pl-5 py-0.5" placeholder="Search Hospital By Name..." />
      </div>

     <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-0 gap-y-5 md:gap-y-8 place-items-center mt-5 px-5 mb-10">
       

      {fetchData.length <= 0 ? ("NO SUCH FOUND "):fetchData?.map((obj)=>{
        function handleClick(){
              navigate("/doctors", { state: { doctors: obj?.doctors } });
        }
        return(
           <div onClick={handleClick} className="shadow-lg rounded-2xl transform hover:-translate-y-2 transition duration-300  w-[270px] h-[300px]  md:w-[280px] md:h-[310px]  hover:scale-95 overflow-hidden" style={{background: '#f2f3f7',boxShadow: '0.6em 0.6em 1.2em #d2dce9, -0.5em -0.5em 1em #ffffff',borderRadius: '20px', }} key={obj.hospitalId} >
           <div className="w-full h-[150px] md:h-[181px] relative m-auto rounded-2xl overflow-hidden">
           <img src={obj.hospital_image} alt={obj.hospitalName} className="w-full h-full object-cover"/>
           <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
           </div>

            <div className="px-3 py-2">
            <h2 className="text-lg font-semibold truncate">{obj.hospitalName}</h2>

              <div className="truncate whitespace-nowrap overflow-hidden text-ellipsis  text-gray-700">
             <span className="text-neutral-900">SPECIALISTS:</span> {obj.specialists.map((s, index) => (
               <span key={s.specialistsId}>
                 {s.specialistsName}
                 {index !== obj.specialists.length - 1 && ', '}
               </span>
             ))}
            </div>

           <p className="flex items-center space-x-2 text-sm md:text-md">
           <span className={`h-2 w-2 rounded-full inline-block  ${obj.isOpen ? 'bg-green-500' : 'bg-red-500' }`}></span><span>{obj.isOpen ? 'Open' : 'CLOSE'}</span></p>

           <p className="line-clamp-3 text-sm">{obj.hospitalDescription}</p>

          </div>
          </div>
        )
      })}
    </div> 
    </div>
    </div>
  )
}

export default Hospitals
