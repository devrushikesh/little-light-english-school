

import { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="flex justify-between items-center px-4 py-4 md:px-8 bg-white shadow-lg sticky top-0 z-50 w-full">
            {/* Left side - School Logo */}
            <div className="flex items-center gap-3">
                <img 
                    src="/logo.svg" 
                    alt="Little Little English School" 
                    className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border-2 border-indigo-600"
                />
                <span className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 hidden sm:block">
                    Little Little English School
                </span>
                <span className="text-lg font-bold text-gray-800 sm:hidden">
                    LLES
                </span>
            </div>

            {/* Right side - Navigation Menu - Desktop */}
            <div className="hidden md:flex items-center">
                <ul className="flex space-x-8">
                    <li>
                        <a 
                            href="#about" 
                            className="text-gray-700 hover:text-indigo-600 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:-translate-y-0.5"
                        >
                            About Us
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#gallery" 
                            className="text-gray-700 hover:text-indigo-600 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:-translate-y-0.5"
                        >
                            Gallery
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#contact" 
                            className="text-gray-700 hover:text-indigo-600 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:-translate-y-0.5"
                        >
                            Contact Us
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#academics" 
                            className="text-gray-700 hover:text-indigo-600 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:-translate-y-0.5"
                        >
                            Academics
                        </a>
                    </li>
                </ul>
            </div>

            {/* Mobile menu toggle button */}
            <button 
                className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
                onClick={toggleMobileMenu}
            >
                <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}></span>
                <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}></span>
            </button>

            {/* Mobile menu dropdown */}
            <div className={`absolute top-full left-0 right-0 bg-white shadow-lg md:hidden transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}>
                <ul className="flex flex-col py-4">
                    <li>
                        <a 
                            href="#about" 
                            className="block px-6 py-3 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 font-medium transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            About Us
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#gallery" 
                            className="block px-6 py-3 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 font-medium transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Gallery
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#contact" 
                            className="block px-6 py-3 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 font-medium transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact Us
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#academics" 
                            className="block px-6 py-3 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 font-medium transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Academics
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}



export default Navbar