import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import AllRooms from './pages/AllRooms';
import RoomDetails from './pages/RoomDetails';
import MyBookings from './pages/MyBookings';
import HotelReg from './components/HotelReg';
import Layout from './pages/hotelOwner/Layout';
import Dashboard from './pages/hotelOwner/Dashboard';
import Addroom from './pages/hotelOwner/Addroom';
import ListRoom from './pages/hotelOwner/ListRoom';
import {Toaster} from "react-hot-toast"
import { useAppContext } from './context/AppContext';
import Testimonial from './components/Testimonial';
import About from './components/About';
import Loader from './components/Loader';

function App() {
  const isOwnerPath = useLocation().pathname.includes("owner");
  const {showHotelReg} = useAppContext()
  return (
 <div>
    < Toaster />
 {!isOwnerPath && <Navbar/>}
  {showHotelReg && <HotelReg /> } {/* hotel registration */}
 <div className='min-h-[70vh]'>
    <Routes>
      <Route path='/' element= {<Home/>} />
      <Route path='/rooms' element= {<AllRooms/>} />
      <Route path='/rooms/:id' element= {< RoomDetails/>} />
       <Route path='/my-bookings' element= {< MyBookings/>} />
       <Route path='/testimonial' element={<Testimonial />} />
       <Route path='/about' element={<About />} />
       <Route path='/loader/:nextUrl' element={<Loader />} />

        <Route path='/owner' element={<Layout />}>
         <Route index element={<Dashboard />} />
         <Route path='add-room' element={<Addroom />} />
         <Route path='list-room' element={<ListRoom />} />



        </Route>
    </Routes>
 </div>
 <Footer />
 </div>
  )
}

export default App
