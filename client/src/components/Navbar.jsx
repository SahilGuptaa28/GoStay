// import React from 'react'
// import { Link, useLocation } from 'react-router-dom';
// import { assets } from '../assets/assets'
// import { useClerk, UserButton } from '@clerk/clerk-react';
// import { FaHotel } from "react-icons/fa"; // Hotel icon
// import { useAppContext } from '../context/AppContext';

// const BookIcon = () => (
//     <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
//         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
//     </svg>
// )
// const Navbar = () => {
//     const navLinks = [
//         { name: 'Home', path: '/' },
//         { name: 'Hotels', path: '/rooms' },
//         { name: 'Reviews', path: '/Testimonial' },
//         { name: 'About', path: '/about' },
//     ];



//     const [isScrolled, setIsScrolled] = React.useState(false);
//     const [isMenuOpen, setIsMenuOpen] = React.useState(false);


//     const { openSignIn } = useClerk()
//     const location = useLocation()

//     const { user, navigate, isOwner, setShowHotelReg } = useAppContext()

//     React.useEffect(() => {

//         if (location.pathname !== '/') {
//             setIsScrolled(true);
//             return;
//         } else {
//             setIsScrolled(false);
//         }
//         setIsScrolled(prev => location.pathname !== '/' ? true : prev)

//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 10);
//         };
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, [location.pathname]);

//     return (

//         <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>


//             {/* Logo */}
//             <Link
//                 to="/"
//                 className={`flex items-center space-x-2 h-10 px-2 py-1 rounded-lg transition-all ${isScrolled ? "invert opacity-80" : ""
//                     }`}
//             >
//                 <FaHotel className="text-3xl text-white" /> {/* Bigger, colored icon */}
//                 <span className="text-2xl font-bold text-white">GoStay</span> {/* Stylish text */}
//             </Link>

//             {/* Desktop Nav */}
//             <div className="hidden md:flex items-center gap-4 lg:gap-8">
//                 {navLinks.map((link, i) => (
//                     <a key={i} href={link.path} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`}>
//                         {link.name}
//                         <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
//                     </a>
//                 ))}

//                 {user && (
//                     <button onClick={() => isOwner ? navigate('/owner') : setShowHotelReg(true)} className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${isScrolled ? 'text-black' : 'text-white'} transition-all`}>
//                         {isOwner ? "Dashboard" : "List Your Hotel"}
//                     </button>
//                 )}
//             </div>

//             {/* Desktop Right */}
//             <div className="hidden md:flex items-center gap-4">
//                 <img src={assets.searchIcon} alt="Search" className={`${isScrolled && `invert`} h-7 transition-all duration-500`} />

//                 {user ?
//                     (<UserButton>
//                         <UserButton.MenuItems>
//                             <UserButton.Action label='My Bookings' labelIcon={<BookIcon />} onClick={() => (navigate('/my-bookings'))} />
//                         </UserButton.MenuItems>
//                     </UserButton>)
//                     :
//                     (<button onClick={openSignIn} className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 hover:cursor-pointer ${isScrolled ? "text-black bg-white" : "bg-black text-white"}`}>
//                         Login
//                     </button>)
//                 }

//             </div>

//             {/* Mobile Menu Button */}

//             <div className="flex items-center gap-3 md:hidden">
//                 {user && <UserButton>
//                     <UserButton.MenuItems>
//                         <UserButton.Action label='My Bookings' labelIcon={<BookIcon />} onClick={() => (navigate('/my-bookings'))} />
//                     </UserButton.MenuItems>
//                 </UserButton>}
//                 <img onClick={() => setIsMenuOpen(!isMenuOpen)} src={assets.menuIcon} alt=""
//                     className={`${isScrolled && "invert"} h-4`} />
//             </div>

//             {/* Mobile Menu */}
//             <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
//                 <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
//                     <img src={assets.closeIcon} alt="close menu"
//                         className='h-6.5' />
//                 </button>

//                 {navLinks.map((link, i) => (
//                     <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
//                         {link.name}
//                     </a>
//                 ))}

//                 {user && <button onClick={() => isOwner ? navigate('/owner') : setShowHotelReg(true)} className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">
//                     {isOwner ? "Dashboard" : "List Your Hotel"}
//                 </button>}

//                 {!user && <button onClick={openSignIn} className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
//                     Login
//                 </button>}
//             </div>
//         </nav>

//     );
// }


// export default Navbar;
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { assets } from '../assets/assets';
import { useClerk, UserButton } from '@clerk/clerk-react';
import { FaHotel } from "react-icons/fa";
import { useAppContext } from '../context/AppContext';

const BookIcon = () => (
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
    </svg>
);

const Navbar = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Hotels', path: '/rooms' },
        { name: 'Reviews', path: '/Testimonial' },
        { name: 'About', path: '/about' },
    ];

    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const { openSignIn } = useClerk();
    const location = useLocation();
    const { user, navigate, isOwner, setShowHotelReg } = useAppContext();

    React.useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);

        // set initial scroll state
        if (window.scrollY > 10) setIsScrolled(true);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Check if navbar should be transparent
    const isTransparent = !isScrolled && (location.pathname === '/' || location.pathname === '/about');

    return (
        <nav
            className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50
            ${isTransparent ? "bg-transparent text-white py-4 md:py-6" : "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4"}`}
        >

            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 h-10 px-2 py-1 rounded-lg transition-all">
                <FaHotel className={`text-3xl ${isTransparent ? "text-white" : "text-gray-800"}`} />
                <span className={`text-2xl font-bold ${isTransparent ? "text-white" : "text-gray-800"}`}>GoStay</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
                {navLinks.map((link, i) => (
                    <Link
                        key={i}
                        to={link.path}
                        className={`group flex flex-col gap-0.5 ${isTransparent ? "text-white" : "text-gray-700"}`}
                    >
                        {link.name}
                        <div className={`${isTransparent ? "bg-white" : "bg-gray-700"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                    </Link>
                ))}

                {user && (
                    <button
                        onClick={() => isOwner ? navigate('/owner') : setShowHotelReg(true)}
                        className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all ${isTransparent ? "text-white border-white" : "text-black"}`}
                    >
                        {isOwner ? "Dashboard" : "List Your Hotel"}
                    </button>
                )}
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-4">
                <img src={assets.searchIcon} alt="Search" className={`${isTransparent ? "invert" : ""} h-7 transition-all duration-500`} />
                {user ? (
                    <UserButton>
                        <UserButton.MenuItems>
                            <UserButton.Action label='My Bookings' labelIcon={<BookIcon />} onClick={() => navigate('/my-bookings')} />
                        </UserButton.MenuItems>
                    </UserButton>
                ) : (
                    <button
                        onClick={openSignIn}
                        className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 hover:cursor-pointer ${isTransparent ? "text-white bg-black" : "text-black bg-white"}`}
                    >
                        Login
                    </button>
                )}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden">
                {user && (
                    <UserButton>
                        <UserButton.MenuItems>
                            <UserButton.Action label='My Bookings' labelIcon={<BookIcon />} onClick={() => navigate('/my-bookings')} />
                        </UserButton.MenuItems>
                    </UserButton>
                )}
                <img onClick={() => setIsMenuOpen(!isMenuOpen)} src={assets.menuIcon} alt="" className={`${isTransparent ? "" : "invert"} h-4`} />
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                    <img src={assets.closeIcon} alt="close menu" className='h-6.5' />
                </button>

                {navLinks.map((link, i) => (
                    <Link key={i} to={link.path} onClick={() => setIsMenuOpen(false)}>
                        {link.name}
                    </Link>
                ))}

                {user && <button onClick={() => isOwner ? navigate('/owner') : setShowHotelReg(true)} className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">
                    {isOwner ? "Dashboard" : "List Your Hotel"}
                </button>}

                {!user && <button onClick={openSignIn} className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
                    Login
                </button>}
            </div>
        </nav>
    );
};

export default Navbar;
