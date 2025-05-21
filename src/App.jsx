import Navbar from "./Components.jsx/Navbar"
import Hospitals from "./Hospitals";
import MainPage from "./MainPage"
import Doctors from "./Doctors";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EachDoctors from "./EachDoctors";

const App = () => {

  // const [hospitals,setHospitals] = useState([]);

  //    const fetchWithID = async (id)=>{
  //      let locationId = id;
  //       try{
  //         const response =  await axios.get(`https://spring-boot-hospital-management-api.onrender.com/locations/id/${locationId}`)
  //         setHospitals(response.data)
  //       }catch(err){
  //           console.error("ERR IN FETCH : ",err)
  //       }
  //   }

  //   console.log(hospitals)
     
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/hospitals/:id" element={<Hospitals />} />
        <Route path="/doctors" element={<Doctors/>}/>
         <Route path="/eachDoctors" element={<EachDoctors/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
