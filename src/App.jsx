import Navbar from "./Components.jsx/Navbar"
import Hospitals from "./Hospitals";
import MainPage from "./MainPage"
import Doctors from "./Doctors";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EachDoctors from "./EachDoctors";

const App = () => {

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
