import React, { useEffect } from 'react'
import Navbar from '../../components/hotelOwner.jsx/Navbar'
import Sidebar from '../../components/hotelOwner.jsx/Sidebar'
import { Outlet } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'

function Layout() {

    const {isOwner,navigate} = useAppContext();

    useEffect(()=>{
         if(!isOwner){
            navigate('/')
         }
    },[isOwner])

    return (
        <div className='flex flex-col min-h-screen'>

            <Navbar />


            <div className="flex flex-1">

                <Sidebar />


                <div className='flex-1 p-4 pt-10 md:px-10'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout







