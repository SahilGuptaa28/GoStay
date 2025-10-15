import React from 'react'
import Title from './Title'
import { testimonials } from '../assets/assets'
import StarRating from './StarRating'

function Testimonial() {
    return (
        <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50
        pt-20 pb-30'>
            <Title title="What Our Guests Say" subtitle= "Discover why discerning travelers consistently choose GoStay for their exclusive and luxurious accommodation around the world." />
            <div className='flex flex-wrap items-center gap-6 mt-20 '>
                {testimonials.map((Testimonial)=>(
                    <div key={Testimonial.id} className='bg-white p-6 rounded-xl shadow max-w-[21rem]' >
                        <div className='flex items-center gap-3'>
                            <img className='w-12 h-12 rounded-full' src={Testimonial.image} alt={Testimonial.name} />
                            <div>
                                <p className='font-playfair text-xl'> {Testimonial.name} </p>
                                <p className='text-gray-500'> {Testimonial.address} </p>
                            </div>
                        </div>
                        <div className='flex items-center gap-1 mt-4'>
                           <StarRating />
                        </div>
                        <p className='text-gray-500 max-w-90 mt-4'>"{Testimonial.review}"</p>

                    </div>

                ))}

            </div>
           
        </div>
    )
}

export default Testimonial
