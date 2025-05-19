import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    const[openMenu,setOpenMenu] = useState(false)

  return (
    <nav className="max-w-7xl mx-auto bg-slate-700 text-white shadow py-4 px-8 ">
    <div className='flex items-center justify-between'>

        <div >
            <h1 className='font-bold text-lg md:text-2xl '><em>MEDITRACK</em></h1>
        </div>

        <div className='md:hidden'>
         <FaBars size={openMenu ? 16 : 24 } color='white' onClick={()=>setOpenMenu(!openMenu)}/>
        </div>

      
            <ul className='hidden md:flex space-x-8 cursor-pointer'>
                <li><em>HOME</em></li>
                <li><em>ABOUT</em></li>
                <li><em>CONTACT</em></li>
                <li><em>PROFILE</em></li>
            </ul>
        

      </div>

      {openMenu && <ul className='md:hidden space-y-8 cursor-pointer mt-5 h-full py-10 z-10 ' >
                <li onClick={()=>setOpenMenu(!openMenu)} ><em>HOME</em></li>
                <li onClick={()=>setOpenMenu(!openMenu)} ><em>ABOUT</em></li>
                <li onClick={()=>setOpenMenu(!openMenu)} ><em>CONTACT</em></li>
                <li onClick={()=>setOpenMenu(!openMenu)} ><em>PROFILE</em></li>
            </ul>}

   </nav>
  )
}

export default Navbar
