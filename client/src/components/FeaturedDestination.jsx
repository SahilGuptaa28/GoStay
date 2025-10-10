import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

function FeaturedDestination() {

    const navigate = useNavigate()
    return (
        <div className='flex flex-col items-center px-5 md:px-14 lg:px-12 bg-slate-50 py-20'>
             
             <Title title='Featured Destination' subtitle='Discover
             our handpicked selection of exceptional properties around the world, offering unparalleled luxury
             and unfogettable experiences.'/>

            <div className='flex flex-wrap items-center justify-center gap-4 mt-20'>
                {roomsDummyData.slice(0,4).map((room,index)=>(
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
