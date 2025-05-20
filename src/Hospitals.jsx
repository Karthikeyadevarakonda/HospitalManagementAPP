

const Hospitals = ({hospitals}) => {
 console.log("WE GOT :",hospitals.hospitals)


  return (
    <div className="w-[100%] m-auto py-5 bg-gray-100">
   
    {hospitals?.city === undefined ? " " :<h1 className="text-2xl text-slate-700 text-center font-bold  "><em>{"Hospitals in "+hospitals?.city}</em> </h1>}
     <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-0 gap-y-5 md:gap-y-8 place-items-center mt-5 px-5 mb-10">
       

      {hospitals?.hospitals?.map((obj)=>{
        
        return(
           <div style={{background: '#f2f3f7',boxShadow: '0.6em 0.6em 1.2em #d2dce9, -0.5em -0.5em 1em #ffffff',borderRadius: '20px', }} key={obj.hospitalId} className="shadow-lg rounded-2xl transform hover:-translate-y-2 transition duration-300  w-[270px] h-[300px]  md:w-[280px] md:h-[310px]  hover:scale-95 overflow-hidden">
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
  )
}

export default Hospitals
