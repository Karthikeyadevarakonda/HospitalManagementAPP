

const Hospitals = ({hospitals}) => {
 console.log("WE GOT :",hospitals.hospitals)

  return (
    <div className="w-[100%] m-auto">
    
    
     <div className="w-full flex items-center justify-center flex-wrap space-x-10 space-y-4 md:space-y-1 mt-5 pl-5">

      {hospitals.hospitals.map((obj)=>{
        
        return(
           <div key={obj.hospitalId} className="rounded-md shadow-xl sm:shadow-none w-[270px] md:w-[260px] md:h-[280px] transition-transform duration-200 hover:scale-95">
           <div className="w-full h-[150px] md:h-[181px] relative m-auto rounded-2xl overflow-hidden">
           <img src={obj.hospital_image} alt={obj.hospitalName} className="w-full h-full object-cover"/>
           <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
           </div>

            <div className="px-3 py-2">
            <h2 className="text-lg font-semibold truncate">{obj.hospitalName}</h2>
    
          </div>
          </div>
        )
      })}
    </div> 
    </div>
  )
}

export default Hospitals
