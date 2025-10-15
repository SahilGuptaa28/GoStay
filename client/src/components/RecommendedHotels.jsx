import React, { useEffect, useState } from 'react'
import HotelCard from './HotelCard'
import Title from './Title'
import { useAppContext } from '../context/AppContext'

function RecommendedHotels() {
    const { rooms, searchedCities } = useAppContext()

    const [recommended, setRecommended] = useState([])



    const filterHotels = () => {
        if (!rooms || !searchedCities) return

        const cities = Array.isArray(searchedCities) ? searchedCities : [searchedCities]

        const filtered = rooms.filter(room =>
            cities.some(city => room.hotel.city.toLowerCase() === city.toLowerCase())
        )

        setRecommended(filtered)
    }
    useEffect(() => {
        filterHotels()
    }, [rooms, searchedCities])

   

    return recommended.length > 0 && (

        <div className='flex flex-col items-center px-4 md:px-14 lg:px-12 bg-slate-50 py-20'>

            <Title title='Recommended Hotels' subtitle='Discover
             our handpicked selection of exceptional properties around the world, offering unparalleled luxury
             and unfogettable experiences.'/>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
                {recommended.slice(0, 4).map((room, index) => (
                    <HotelCard key={room._id} room={room} index={index} />
                ))}
            </div>

        </div>
    )
}

export default RecommendedHotels;

