import React from 'react'
import { assets } from '../assets/assets'
import { FaHotel } from "react-icons/fa"; // Hotel icon

function Footer() {
    return (
        <div className='bg-[#F6F9FC] text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32'>
            <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
                <div className='max-w-80'>
                    <div className="flex items-center space-x-2 h-10 px-2 py-1 rounded-lg transition-all " >
                        <FaHotel className="text-3xl text-black" /> {/* Bigger, colored icon */}
                        <span className="text-2xl font-bold text-black">GoStay</span> {/* Stylish text */}
                    </div>
                    <p className='text-sm'>
                        Discover the world's most extraordinary places to stay, from boutique hotels to luxury villas and private islands
                    </p>
                    <div className='flex items-center gap-3 mt-4'>

                        <a href="https://www.instagram.com/_sahiluc_" target="_blank" rel="noopener noreferrer">
                            <img src={assets.instagramIcon} alt="instagram-icon" className='w-6' />
                        </a>

                        {/* Facebook */}
                        <a href="https://www.facebook.com/goodlooking.sahil.3/" target="_blank" rel="noopener noreferrer">
                            <img src={assets.facebookIcon} alt="facebook-icon" className='w-6' />
                        </a>

                        {/* Twitter */}
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img src={assets.twitterIcon} alt="twitter-icon" className='w-6' />
                        </a>

                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/sahil-gupta28" target="_blank" rel="noopener noreferrer">
                            <img src={assets.linkendinIcon} alt="linkedin-icon" className='w-6' />
                        </a>

                    </div>
                </div>

                <div>
                    <p className='font-playfair text-lg text-gray-800'>COMPANY</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Partners</a></li>
                    </ul>
                </div>

                <div>
                    <p className='font-playfair text-lg text-gray-800'>SUPPORT</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Safety Information</a></li>
                        <li><a href="#">Cancellation Options</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Accessibility</a></li>
                    </ul>
                </div>

                <div className='max-w-80'>
                    <p className=' font-playfair text-lg text-gray-800'>STAY UPDATED</p>
                    <p className='mt-3 text-sm'>
                        Subscribe to our newsletter for inspiration and special offers.
                    </p>
                    <div className='flex items-center mt-4'>
                        <input type="text" className='bg-white rounded-l border border-gray-300 h-9 px-3 outline-none' placeholder='Your email' />
                        <button className='flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r'>
                            {/* Arrow icon */}
                            <img src={assets.arrowIcon} alt="arrow-icon" className='w-3.5 invert' />
                        </button>
                    </div>
                </div>
            </div>
            <hr className='border-gray-300 mt-8' />
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} GoStay. All rights reserved. Developed by Sahil Gupta.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Sitemap</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
