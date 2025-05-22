import { useLocation } from "react-router-dom"

const Success = () => {

    const location = useLocation();
    const data = location.state.imfo;
    console.log("AWEHEHEHEHEHE",data);

  return (
    <div className="p-4 text-center">
     <h1 className="text-md font-bold text-blue-500 mb-4">APPOINTMENT SUCCESSFULL 🎉</h1>
      <p className="text-lg">Doctor: <strong>{data.name}</strong></p>
      <p className="text-lg">Time Slot: <strong>{data.time+" Tomorrow" }</strong></p>
    </div>
  )
}

export default Success
