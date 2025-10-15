import React from "react";
import hero from "../assets/hero.png"; // import your hotel image
import { useAppContext } from "../context/AppContext";

function About() {

    const {navigate} = useAppContext();

    const onClickHandler = ()=>{
        navigate('/rooms')
        scrollTo(0,0)
    }

  return (
    <div className="bg-white text-gray-800">

      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      <div
        className={`flex flex-col items-center justify-center text-center px-6 md:px-16 lg:px-24 xl:px-32 h-screen 
          bg-cover bg-center bg-no-repeat`}
        style={{ backgroundImage: `url(${hero})` }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
          About GoStay
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl drop-shadow-md">
          GoStay is dedicated to making hotel booking seamless, trustworthy, and enjoyable. 
          From budget rooms to luxury suites, we connect travelers with the perfect stay at the best price.
        </p>
      </div>

      {/* OUR STORY */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
        <p className="text-lg leading-relaxed text-gray-600">
         GoStay was created with one mission: to make hotel booking seamless, 
    trustworthy, and enjoyable. From budget rooms to luxury suites, we connect 
    travelers with the perfect stay at the best price. <br />
    Founded and developed by <span className="font-semibold">Sahil Gupta</span>, 
    GoStay brings together technology, design, and hospitality expertise to 
    provide a modern, reliable, and user-friendly hotel booking experience.
        </p>
      </section>

      {/* WHY CHOOSE US */}
     <section className="bg-gray-50 py-16">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-10">Why Choose GoStay?</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      
      <div className="p-6 bg-white rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-3">Best Prices</h3>
        <p className="text-gray-600">
          We offer competitive rates and exclusive discounts to ensure you
          get the best value for your stay.
        </p>
      </div>

      <div className="p-6 bg-white rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-3">Verified Hotels</h3>
        <p className="text-gray-600">
          All properties are carefully verified to provide a safe and
          comfortable experience.
        </p>
      </div>

      <div className="p-6 bg-white rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
        <p className="text-gray-600">
          Our dedicated support team is always available to assist you
          anytime, anywhere.
        </p>
      </div>

      {/* New Sections */}
      <div className="p-6 bg-white rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-3">User-Friendly Platform</h3>
        <p className="text-gray-600">
          Enjoy a seamless and intuitive booking experience with our modern, 
          easy-to-navigate interface.
        </p>
      </div>

      <div className="p-6 bg-white rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-3">Flexible Booking</h3>
        <p className="text-gray-600">
          Modify or cancel your bookings effortlessly with our flexible 
          policies tailored for traveler convenience.
        </p>
      </div>

      <div className="p-6 bg-white rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
        <p className="text-gray-600">
          Access thousands of hotels worldwide, from bustling cities to 
          serene escapes, all in one platform.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* OUR VISION */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
        <p className="text-lg leading-relaxed text-gray-600">
          We believe travel should be stress-free. That’s why GoStay combines
          technology, transparency, and trust to create the ultimate hotel
          booking experience. Our goal is to become the most reliable platform
          for travelers worldwide.
        </p>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-gray-900 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready for your next stay?</h2>
        <p className="text-lg mb-6">
          Explore thousands of hotels and book your perfect room with GoStay.
        </p>
        <button onClick={ onClickHandler} className="bg-black text-white-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-700 hover:cursor-pointer transition">
          Book Now
        </button>
      </section>
    </div>
  );
}

export default About;
