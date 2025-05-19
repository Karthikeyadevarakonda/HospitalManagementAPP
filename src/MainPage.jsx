import { useEffect, useState } from "react"
import axios from "axios";

import chennaiImg from './assets/chennai.png';
import bangaloreImg from './assets/banglore.png';
import hydImg from './assets/hyd.png';
import punjabImg from './assets/punjab.png';
import delhiImg from './assets/delhi.png';
import gudurImg from './assets/gudur.png';
import nelloreImg from './assets/nellore.png';
import gunturImg from './assets/guntur.png';
import keralaImg from './assets/kerala.png';
import kadapaImg from './assets/kadapa.png';

 const CITY_IMAGES = {
  Chennai: chennaiImg,
  Bangalore: bangaloreImg,
  Hyderabad: hydImg,
  Punjab: punjabImg,
  Delhi: delhiImg,
  Gudur: gudurImg,
  Nellore: nelloreImg,
  Guntur: gunturImg,
  Kerala: keralaImg,
  Kadapa: kadapaImg,
};

const MainPage = () => {
    const [data,setData] = useState([]);
   

    const fetchData = async ()=>{
        try{
          const response =  await axios.get("https://spring-boot-hospital-management-api.onrender.com/locations/all")
          setData(response.data)
        }catch(err){
            console.error("ERR IN FETCH : ",+err)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])
      console.log("API DATA :",data)
  return (
     <div className="flex w-full  mx-auto space-x-5 overflow-x-auto bg-slate-200 px-5 py-0 md:py-2">
      
      {data.map((obj)=>{
         const imgSrc = CITY_IMAGES[obj.city] || "/assets/placeholder.png";
           return(
             <div key={obj.locationId} className="w-50 p-2 md:p-4 h-28 md:h-30 font-bold text-sm md:text-lg cursor-pointer flex flex-col">
             <h1 className=" text-slate-900">{obj.city}</h1>
             <img src={imgSrc} alt="" className=" h-14 mt-2 " />
            </div>
           )
      })}

    </div>
  )
}

export default MainPage
