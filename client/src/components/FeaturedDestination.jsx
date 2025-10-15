import React from 'react'
import HotelCard from './HotelCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

function FeaturedDestination() {
    const {rooms,navigate} = useAppContext()


    return rooms.length>0 && (

        <div className='flex flex-col items-center px-4 md:px-14 lg:px-12 bg-slate-50 py-20'>
             
             <Title title='Featured Destination' subtitle='Discover
             our handpicked selection of exceptional properties around the world, offering unparalleled luxury
             and unfogettable experiences.'/>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
                {rooms.slice(0,4).map((room,index)=>(
                    <HotelCard key={room._id} room={room} index={index}/>
                ))}
            </div>
            <button onClick={()=>{navigate('/rooms'); scrollTo(0,0)}}
             className='my-16 px-4 py-2 text-sm font-medium border border-gray-300 
            rounded bg-white hover:bg-gray-50 transition-all cursor-pointer'>
                View All Destinations
            </button>
        </div>
    )
}

export default FeaturedDestination
