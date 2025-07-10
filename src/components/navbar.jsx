

import { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isGalleryDropdownOpen, setIsGalleryDropdownOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleGalleryDropdown = () => {
        setIsGalleryDropdownOpen(!isGalleryDropdownOpen);
    };

    return (
        <nav className="flex justify-between items-center px-4 py-4 md:px-8 bg-white shadow-lg sticky top-0 z-50 w-full">
            {/* Left side - School Logo */}
            <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200">
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
            </a>

            {/* Right side - Navigation Menu - Desktop */}
            <div className="hidden md:flex items-center">
                <ul className="flex items-center space-x-5">
                    <li className="flex items-center">
                        <a
                            href="/about"
                            className="text-gray-700 hover:text-indigo-600 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:-translate-y-0.5 flex items-center"
                        >
                            About Us
                        </a>
                    </li>
                    <li className="relative group flex items-center">
                        <button
                            className="text-gray-700 hover:text-indigo-600 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:-translate-y-0.5 flex items-center"
                            onMouseEnter={() => setIsGalleryDropdownOpen(true)}
                            onMouseLeave={() => setIsGalleryDropdownOpen(false)}
                        >
                            Gallery
                            <svg className="ml-1 h-4 w-4 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>

                        {/* Desktop Dropdown */}
                        <div
                            className={`absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-200 ${isGalleryDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                                }`}
                            onMouseEnter={() => setIsGalleryDropdownOpen(true)}
                            onMouseLeave={() => setIsGalleryDropdownOpen(false)}
                        >
                            <ul className="py-2">
                                <li>
                                    <a
                                        href="/gallery/images"
                                        className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
                                    >
                                        📸 Images
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/gallery/videos"
                                        className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
                                    >
                                        🎥 Videos
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="flex items-center">
                        <a
                            href="/academics"
                            className="text-gray-700 hover:text-indigo-600 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:-translate-y-0.5 flex items-center"
                        >
                            Academics
                        </a>
                    </li>
                    <li className="flex items-center">
                        <a
                            href="/admissions"
                            className="text-gray-700 hover:text-indigo-600 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:-translate-y-0.5 flex items-center"
                        >
                            Admissions
                        </a>
                    </li>
                    <li className="flex items-center">
                        <a
                            href="/contact-us"
                            className="text-gray-700 hover:text-indigo-600 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:-translate-y-0.5 flex items-center"
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>

            {/* Mobile menu toggle button */}
            <button
                className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
                onClick={toggleMobileMenu}
            >
                <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                    }`}></span>
                <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''
                    }`}></span>
                <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}></span>
            </button>

            {/* Mobile menu dropdown */}
            <div className={`absolute top-full left-0 right-0 bg-white shadow-lg md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}>
                <ul className="flex flex-col py-4">
                    <li>
                        <a
                            href="/about"
                            className="block px-6 py-3 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 font-medium transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            About Us
                        </a>
                    </li>
                    <li>
                        <button
                            className="w-full text-left block px-6 py-3 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 font-medium transition-colors duration-200 flex items-center justify-between"
                            onClick={toggleGalleryDropdown}
                        >
                            Gallery
                            <svg className={`h-4 w-4 transition-transform duration-200 ${isGalleryDropdownOpen ? 'rotate-180' : ''
                                }`} fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>

                        {/* Mobile Dropdown */}
                        <div className={`overflow-hidden transition-all duration-300 ${isGalleryDropdownOpen ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                            }`}>
                            <ul className="bg-gray-50">
                                <li>
                                    <a
                                        href="/gallery/images"
                                        className="block px-8 py-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors duration-200"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        📸 Images
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/gallery/videos"
                                        className="block px-8 py-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors duration-200"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        🎥 Videos
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a
                            href="/academics"
                            className="block px-6 py-3 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 font-medium transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Academics
                        </a>
                    </li>
                    <li>
                        <a
                            href="/admissions"
                            className="block px-6 py-3 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 font-medium transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Admissions
                        </a>
                    </li>
                    <li>
                        <a
                            href="/contact-us"
                            className="block px-6 py-3 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 font-medium transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}



export default Navbar