

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 py-12 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    {/* School Information */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <img 
                                src="/logo.svg" 
                                alt="Little Little English School" 
                                className="h-10 w-10 rounded-full border-2 border-indigo-400"
                            />
                            <h3 className="text-xl font-bold text-white">
                                Little Little English School
                            </h3>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Nurturing young minds through quality education and holistic development. 
                            Building tomorrow's leaders with strong foundations in English and life skills.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Media Links */}
                            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.222.083.343-.09.394-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.989C24.007 5.367 18.641.001 12.017.001z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#about" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 text-sm">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#academics" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 text-sm">
                                    Academics
                                </a>
                            </li>
                            <li>
                                <a href="#admissions" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 text-sm">
                                    Admissions
                                </a>
                            </li>
                            <li>
                                <a href="#gallery" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 text-sm">
                                    Gallery
                                </a>
                            </li>
                            <li>
                                <a href="#events" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 text-sm">
                                    Events & News
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 text-sm">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Contact Info</h4>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                </svg>
                                <div>
                                    <p className="text-gray-300 text-sm">
                                        123 Education Street<br />
                                        Learning District<br />
                                        City, State 12345
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-indigo-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                                </svg>
                                <a href="tel:+1234567890" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 text-sm">
                                    +1 (234) 567-8900
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-indigo-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                </svg>
                                <a href="mailto:info@lles.edu" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 text-sm">
                                    info@lles.edu
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* School Hours */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">School Hours</h4>
                        <div className="space-y-2">
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
                        <div className="pt-4">
                            <h5 className="text-sm font-semibold text-white mb-2">Office Hours</h5>
                            <div className="space-y-1">
                                <div className="flex justify-between">
                                    <span className="text-gray-300 text-sm">Mon - Fri</span>
                                    <span className="text-gray-300 text-sm">7:30 AM - 4:00 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-6 md:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-center md:text-left">
                            <p className="text-gray-400 text-sm">
                                © {currentYear} Little Little English School. All rights reserved.
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center md:justify-end gap-6">
                            <a href="#privacy" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-sm">
                                Privacy Policy
                            </a>
                            <a href="#terms" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-sm">
                                Terms of Service
                            </a>
                            <a href="#accessibility" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-sm">
                                Accessibility
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}


export default Footer;