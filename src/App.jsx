import Navbar from "./Components.jsx/Navbar"
import Hospitals from "./Hospitals";
import MainPage from "./MainPage"
import { useState } from "react";
import axios from "axios";

const App = () => {

  const [hospitals,setHospitals] = useState([]);

     const fetchWithID = async (id)=>{
       let locationId = id;
        try{
          const response =  await axios.get(`https://spring-boot-hospital-management-api.onrender.com/locations/id/${locationId}`)
          setHospitals(response.data)
        }catch(err){
            console.error("ERR IN FETCH : ",+err)
        }
    }


  return (
    <div>
        <Navbar/>
        <MainPage fetchWithID={fetchWithID} />
        <Hospitals hospitals={hospitals} />
    </div>
  )
}

export default App
