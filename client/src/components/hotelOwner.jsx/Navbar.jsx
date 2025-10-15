import React from 'react'
import { assets } from '../../assets/assets'
import { UserButton } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'
import { FaHotel } from "react-icons/fa"; // Hotel icon

function Navbar() {
    return (
        <div className='flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300'>
             
             <Link
               to="/"
               className="flex items-center space-x-2 h-10 px-2 py-1 rounded-lg transition-all 
                  invert opacity-80"  
             >
               <FaHotel className="text-3xl text-white" /> {/* Bigger, colored icon */}
               <span className="text-2xl font-bold text-white">GoStay</span> {/* Stylish text */}
             </Link>
             <UserButton />
        </div>
    )
}

export default Navbar
