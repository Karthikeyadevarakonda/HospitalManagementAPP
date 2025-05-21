import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import chennaiImg from './assets/chennai.png';
import bangaloreImg from './assets/Banglore.png';
import hydImg from './assets/hyd.png';
import punjabImg from './assets/punjab.png';
import delhiImg from './assets/delhi.png';
import gudurImg from './assets/gudur.png';
import nelloreImg from './assets/nellore.png';
import gunturImg from './assets/guntur.png';
import keralaImg from './assets/kerala.png';
import kadapaImg from './assets/kadapa.png';
import front from './assets/front.jpg';
import phone from './assets/phone.svg';
import undraw from './assets/undraw_medicine_hqqg.svg';
import chat from './assets/chat1.png';

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
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://spring-boot-hospital-management-api.onrender.com/locations/all"
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
  const text1 =
    "Find the best hospitals in your city with easy access to all locations.";
  

  return (
    <div>
      <div className="flex w-full mx-auto space-x-5 overflow-x-auto bg-slate-200 px-5 py-0 md:py-2">
        {data?.map((obj) => {
          const imgSrc = CITY_IMAGES[obj.city] || "/assets/placeholder.png";

          function handleClick(id) {
            console.log(id);
            navigate(`/hospitals/${id}`);
          }

          return (
            <div
              key={obj.locationId}
              onClick={() => handleClick(obj.locationId)}
              className="w-50 p-2 md:p-4 h-28 md:h-30 font-bold text-sm md:text-lg cursor-pointer flex flex-col"
            >
              <h1 className="text-slate-900">{obj.city}</h1>
              <img src={imgSrc} alt="" className="h-14 mt-2" />
            </div>
          );
        })}
      </div>

      <div className="p-5">
        <div>
          <h3 className="text-xl font-semibold mb-2">{heading1}</h3>
          <p className="mb-4 text-gray-700">{text1}</p>
        </div>
        <div className="py-5 px-5 md:p-4 md:pb-5 md:h-44 md:w-[40%]">
          <img src={chat} alt="Phone" className="rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
