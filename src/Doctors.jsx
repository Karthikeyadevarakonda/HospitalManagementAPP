import React from 'react'
import { useLocation } from 'react-router-dom'

const Doctors = () => {
    const location = useLocation();
    const doctors = location.state?.doctors;
   
    console.log("OUR DOCTS:",doctors)
  return (
    <div>
      h1
    </div>
  )
}

export default Doctors
