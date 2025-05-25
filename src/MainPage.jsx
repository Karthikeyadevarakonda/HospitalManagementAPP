import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


import chat from './assets/chat1.png';
import globe from './assets/globe.svg'
import team from './assets/team.svg'

const MainPage = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();


    function handleClick(obj) {
            // console.log(id);
            navigate('/hospitals',{state:{hospitals:obj}});
          }

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://mongo-db-hospital-api-1.onrender.com/allLocations"
      );
      setData(response.data);
    } catch (err) {
      console.error("ERR IN FETCH : ", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (data.length === 0) {
    return (
      <div className="flex w-full mx-auto space-x-5 overflow-x-auto bg-slate-200 px-5 py-2 md:py-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="min-w-[100px] md:w-48 p-2 md:p-4 h-24 md:h-30 cursor-pointer flex flex-col animate-pulse bg-gray-400 rounded-md"
          >
            <div className="mt-2 bg-gray-400 rounded" />
          </div>
        ))}
      </div>
    );
  }


  const heading1 = "Welcome to Our Hospital Locator";
  const text1 ="Find the best hospitals in your city with easy access to all locations.";
  
  const DataDiv = ()=>{
    return(
     <div className="px-5 md:flex md:justify-between md:items-center h-60 md:h-80 fade-in ">
      <h3 className="mt-3 md:mt-0 md:hidden text-xl md:text-2xl font-semibold mb-2"> <em>{heading1}</em> </h3>
       <div className="py-5 md:px-4 md:pb-3 md:mt-5 md:w-[45%]">
         <img src={globe} alt="Phone" className="rounded-2xl" />
       </div>
       <div>
        <h3 className="hidden md:block text-xl md:text-2xl font-semibold mb-2">{heading1}</h3>
         <p className="text-gray-700 md:text-xl">{text1}</p>
         <h4 className="hidden md:block font-medium mb-2 md:text-xl">Why Choose Us?</h4>
         <p className="hidden md:block text-gray-700 text-xl">
           We provide verified hospital information and seamless navigation to
           healthcare facilities.
         </p>
       </div>
        <div className="py-0 px-0 md:p-4 md:pb-3 md:mt-5 md:w-[40%]">
         <img src={team} alt="Phone" className="rounded-2xl" />
       </div>
      </div>
    )
  }

  const TopDiv = () =>{
    return(
      <div className="flex w-full mx-auto space-x-5 overflow-x-auto bg-slate-200 px-5 py-0 md:py-2">
         {data?.map((obj) => {
          // const imgSrc = CITY_IMAGES[obj.city] || "/assets/placeholder.png";

          // function handleClick(id) {
          //   console.log(id);
          //   navigate(`/hospitals/${id}`);
          // }

          return (
            <div key={obj._id} onClick={() => handleClick(obj)} className=" w-50 p-2 md:p-4 h-28 md:h-30 font-bold text-sm md:text-lg cursor-pointer flex flex-col">
              <h1 className="text-slate-900">{obj.city}</h1>
              <img src={obj.image} alt="" className="h-14 mt-2" />
            </div>);
             })}
    </div>

    )
  }

  return (
    <div>
    <TopDiv/> 
    <DataDiv/>
    </div>
  );
};

export default MainPage;
