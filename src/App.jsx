import Navbar from "./Components.jsx/Navbar"
import Hospitals from "./Hospitals";
import MainPage from "./MainPage"
import Doctors from "./Doctors";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EachDoctors from "./EachDoctors";
import Payment from "./Payment";
import Success from "./Success";

const App = () => {

    return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/doctors" element={<Doctors/>}/>
        <Route path="/eachDoctors" element={<EachDoctors/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/success" element={<Success/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
