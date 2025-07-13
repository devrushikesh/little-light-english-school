

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 py-8 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    
                    {/* School Information */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <img 
                                src="/logo.svg" 
                                alt="Little Light English School" 
                                className="h-8 w-8 rounded-full border border-indigo-400"
                            />
                            <h3 className="text-lg font-bold text-white">
                                Little Light English School
                            </h3>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Nurturing young minds through quality early childhood education since 2015.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Media Links */}
                            <a href="https://www.facebook.com/share/1EpBRpfFsC/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>
                            <a href="https://instagram.com/little_light_7038" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-3">
                        <h4 className="text-base font-semibold text-white">Quick Links</h4>
                        <ul className="space-y-1.5">
                            <li>
                                <a href="about" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 text-sm">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="admissions" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 text-sm">
                                    Admissions
                                </a>
                            </li>
                            <li>
                                <a href="gallery" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 text-sm">
                                    Gallery
                                </a>
                            </li>
                            <li>
                                <a href="contact-us" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 text-sm">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-3">
                        <h4 className="text-base font-semibold text-white">Contact Info</h4>
                        <div className="space-y-2">
                            <div className="flex items-start gap-2">
                                <svg className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                </svg>
                                <div>
                                    <p className="text-gray-300 text-sm">
                                        Gad Society, Near Pavtya Maruti Temple<br />
                                        Damani Nagar, Solapur 413001
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-indigo-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                                </svg>
                                <a href="tel:+917038057687" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 text-sm">
                                    +91 70380 57687
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-indigo-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                </svg>
                                <a href="mailto:info@littlelightplayschool.edu" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 text-sm">
                                    info@littlelightplayschool.edu
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* School Hours */}
                    <div className="space-y-3">
                        <h4 className="text-base font-semibold text-white">School Hours</h4>
                        <div className="space-y-1.5">
                            <div className="flex justify-between">
                                <span className="text-gray-300 text-sm">Monday - Friday</span>
                                <span className="text-gray-300 text-sm">8:00 AM - 3:30 PM</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-300 text-sm">Saturday</span>
                                <span className="text-gray-300 text-sm">9:00 AM - 12:00 PM</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-300 text-sm">Sunday</span>
                                <span className="text-gray-300 text-sm">Closed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-700">
                <div className="max-w-7xl mx-auto px-4 py-4 md:px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                        <div className="text-center md:text-left">
                            <p className="text-gray-400 text-sm">
                                © {currentYear} . All rights reserved.
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center md:justify-end gap-4">
                            <a href="#privacy" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-sm">
                                Privacy
                            </a>
                            <a href="#terms" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-sm">
                                Terms
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}


export default Footer;