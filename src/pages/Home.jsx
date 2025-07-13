
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen">
            {/* Hero Section - Full-width Immersive Design */}
            <section className="relative min-h-[90vh] hero-section w-full overflow-hidden">
                {/* Background with layers and animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 opacity-90"></div>
                
                {/* Animated background particles */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-24 h-24 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
                    <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-400 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1.5s'}}></div>
                    <div className="absolute bottom-40 right-1/4 w-20 h-20 bg-pink-400 rounded-full opacity-20 animate-pulse" style={{animationDelay: '0.7s'}}></div>
                </div>
                
                {/* Floating illustrations - visible only on medium and larger screens */}
                <div className="absolute hidden md:block top-10 right-10 animate-float" style={{animationDelay: '0.5s'}}>
                    <img src="/images/pencil-illustration.svg" alt="" className="w-20 h-20 opacity-70" onError={(e) => e.target.style.display = 'none'} />
                </div>
                <div className="absolute hidden md:block bottom-10 left-10 animate-float" style={{animationDelay: '1.2s'}}>
                    <img src="/images/book-illustration.svg" alt="" className="w-16 h-16 opacity-70" onError={(e) => e.target.style.display = 'none'} />
                </div>
                
                {/* Main Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-center pt-16 md:pt-20 pb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        {/* Hero Content */}
                        <div className="space-y-8 order-2 lg:order-1 text-white">
                            <div>
                                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-4 md:mb-6">
                                    Where Little 
                                    <span className="text-yellow-300"> Dreams </span>
                                    <br className="hidden xs:block" />Take Flight!
                                    <span className="inline-block ml-2 animate-pulse">✨</span>
                                </h1>
                                <div className="relative">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 via-indigo-500 to-purple-500 rounded-lg blur-lg opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                                    <p className="relative text-lg md:text-xl leading-relaxed bg-white/10 backdrop-blur-md rounded-xl shadow-xl border border-white/20 px-6 py-5">
                                        <span className="font-semibold text-yellow-300">Nurturing young minds</span> through play-based learning in our LKG & UKG programs. 
                                        Building <span className="font-semibold text-yellow-300">confidence, creativity, and curiosity</span> in every child's journey.
                                    </p>
                                </div>
                            </div>
                            
                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button 
                                    onClick={() => navigate('/admissions')}
                                    className="bg-gradient-to-r from-yellow-400 to-orange-500 text-indigo-900 px-8 py-4 rounded-xl text-lg font-bold hover:shadow-lg hover:-translate-y-1 transition-all duration-300 shadow-xl flex items-center justify-center group"
                                >
                                    <span className="bg-white text-orange-500 w-10 h-10 rounded-full flex items-center justify-center mr-3 shadow-md group-hover:scale-110 transition-transform duration-300">🎒</span>
                                    <span>Apply for Admission</span>
                                </button>
                                <button className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 shadow-xl border border-white/30 flex items-center justify-center group"
                                >
                                    <span className="bg-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">📞</span>
                                    <span>Call Us</span>
                                </button>
                            </div>

                            {/* Key Stats - Modern cards with hover effects */}
                            <div className="grid grid-cols-3 gap-3 md:gap-5 pt-6">
                                <div className="relative">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                                    <div className="relative text-center bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
                                        <div className="flex justify-center mb-2">
                                            <span className="bg-blue-500/20 w-10 h-10 rounded-full flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">👧👦</span>
                                        </div>
                                        <div className="text-2xl md:text-3xl font-bold text-yellow-300">500+</div>
                                        <div className="text-sm font-medium text-white/80">Happy Students</div>
                                    </div>
                                </div>
                                
                                <div className="relative">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-400 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                                    <div className="relative text-center bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
                                        <div className="flex justify-center mb-2">
                                            <span className="bg-purple-500/20 w-10 h-10 rounded-full flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">👩‍🏫</span>
                                        </div>
                                        <div className="text-2xl md:text-3xl font-bold text-yellow-300">15+</div>
                                        <div className="text-sm font-medium text-white/80">Expert Teachers</div>
                                    </div>
                                </div>
                                
                                <div className="relative">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-rose-400 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                                    <div className="relative text-center bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
                                        <div className="flex justify-center mb-2">
                                            <span className="bg-pink-500/20 w-10 h-10 rounded-full flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">🏫</span>
                                        </div>
                                        <div className="text-2xl md:text-3xl font-bold text-yellow-300">10+</div>
                                        <div className="text-sm font-medium text-white/80">Years Experience</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hero Image - with stunning presentation */}
                        <div className="relative order-1 lg:order-2 mx-auto w-full max-w-md lg:max-w-full">
                            <div className="relative group">
                                {/* Primary image with frame */}
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.02] z-20">
                                    {/* Decorative frame */}
                                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 rounded-2xl blur opacity-70"></div>
                                    
                                    {/* Actual image */}
                                    <div className="relative rounded-2xl overflow-hidden border-2 border-white/50">
                                        <img 
                                            src="https://lles-gallery-media.s3.ap-south-1.amazonaws.com/Gallery/Classrooms/WhatsApp+Image+2025-07-11+at+12.53.26.jpeg"
                                            alt="Little Light A play School - Happy children learning and playing"
                                            className="w-full h-full object-cover aspect-[4/3]"
                                        />
                                    </div>
                                </div>
                                
                                {/* Floating accent image 1 - only visible on large screens */}
                                <div className="absolute top-1/2 -left-16 transform -translate-y-1/2 hidden lg:block z-10">
                                    <div className="relative w-28 h-28 rounded-lg overflow-hidden shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
                                        <img 
                                            src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=200"
                                            alt="Happy student"
                                            className="w-full h-full object-cover"
                                            onError={(e) => e.target.style.display = 'none'}
                                        />
                                    </div>
                                </div>
                                
                                {/* Floating accent image 2 - only visible on large screens */}
                                <div className="absolute -bottom-10 -right-10 hidden lg:block z-10">
                                    <div className="relative w-32 h-32 rounded-lg overflow-hidden shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                                        <img 
                                            src="https://images.unsplash.com/photo-1607453998774-d533f65dac99?auto=format&fit=crop&w=200"
                                            alt="Art supplies"
                                            className="w-full h-full object-cover"
                                            onError={(e) => e.target.style.display = 'none'}
                                        />
                                    </div>
                                </div>
                                
                                {/* Decorative elements */}
                                <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-yellow-300 opacity-70 animate-pulse hidden lg:block"></div>
                                <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-pink-400 opacity-70 animate-pulse hidden lg:block" style={{animationDelay: '0.5s'}}></div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Removed scroll indicator */}
                </div>
            </section>

            {/* Why Choose Us Section - simplified */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 handwritten text-indigo-600">
                            Why Parents Choose Us?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
                            We provide a <span className="font-bold text-green-500">safe</span>, 
                            <span className="font-bold text-pink-500"> nurturing environment</span> where your little ones can
                            <span className="font-bold text-blue-500"> explore</span>, 
                            <span className="font-bold text-purple-500"> learn</span>, and 
                            <span className="font-bold text-orange-500"> grow</span> with confidence!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                        {/* Row 1 - 4 cards */}
                        {/* Feature 1 - simplified */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl text-center hover:shadow-md transition-all duration-300 border-2 border-blue-200 kid-rounded">
                            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border-2 border-white">
                                <span className="text-3xl">🎭</span>
                            </div>
                            <h3 className="text-xl font-bold text-indigo-600 mb-4 handwritten">Play-Based Learning</h3>
                            <p className="text-gray-600 font-medium">
                                Learning through fun activities, games, and creative play that keeps children engaged and excited!
                            </p>
                        </div>

                        {/* Feature 2 - simplified */}
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl text-center hover:shadow-md transition-all duration-300 border-2 border-green-200 kid-rounded">
                            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border-2 border-white">
                                <span className="text-3xl">👩‍🏫</span>
                            </div>
                            <h3 className="text-xl font-bold text-green-600 mb-4 handwritten">Expert Teachers</h3>
                            <p className="text-gray-600 font-medium">
                                Qualified and caring teachers who understand child psychology and development needs!
                            </p>
                        </div>

                        {/* Feature 3 - simplified */}
                        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-3xl text-center hover:shadow-md transition-all duration-300 border-2 border-yellow-200 kid-rounded">
                            <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border-2 border-white">
                                <span className="text-3xl">🛡️</span>
                            </div>
                            <h3 className="text-xl font-bold text-amber-600 mb-4 handwritten">Safe Environment</h3>
                            <p className="text-gray-600 font-medium">
                                Child-safe facilities with proper security measures and hygiene protocols for peace of mind!
                            </p>
                        </div>

                        {/* Feature 4 - simplified */}
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl text-center hover:shadow-md transition-all duration-300 border-2 border-purple-200 kid-rounded">
                            <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border-2 border-white">
                                <span className="text-3xl">🎨</span>
                            </div>
                            <h3 className="text-xl font-bold text-purple-600 mb-4 handwritten">Creative Activities</h3>
                            <p className="text-gray-600 font-medium">
                                Art, music, dance, and craft activities to develop creativity and motor skills in fun ways!
                            </p>
                        </div>
                    </div>

                    {/* Row 2 - 4 cards - simplified */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-8">
                        {/* Feature 5 - simplified */}
                        <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-3xl text-center hover:shadow-md transition-all duration-300 border-2 border-red-200 kid-rounded">
                            <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border-2 border-white">
                                <span className="text-3xl">👨‍👩‍👧‍👦</span>
                            </div>
                            <h3 className="text-xl font-bold text-red-500 mb-4 handwritten">Parent Partnership</h3>
                            <p className="text-gray-600 font-medium">
                                Regular communication and involvement of parents in their child's learning adventure!
                            </p>
                        </div>

                        {/* Feature 6 - simplified */}
                        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-3xl text-center hover:shadow-md transition-all duration-300 border-2 border-teal-200 kid-rounded">
                            <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border-2 border-white">
                                <span className="text-3xl">📚</span>
                            </div>
                            <h3 className="text-xl font-bold text-teal-600 mb-4 handwritten">English Foundation</h3>
                            <p className="text-gray-600 font-medium">
                                Strong foundation in English language through exciting stories, rhymes, and interactive sessions!
                            </p>
                        </div>

                        {/* Feature 7 - simplified */}
                        <div className="bg-gradient-to-br from-violet-50 to-indigo-50 p-8 rounded-3xl text-center hover:shadow-md transition-all duration-300 border-2 border-violet-200 kid-rounded">
                            <div className="bg-violet-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border-2 border-white">
                                <span className="text-3xl">💻</span>
                            </div>
                            <h3 className="text-xl font-bold text-violet-600 mb-4 handwritten">E-Learning Fun</h3>
                            <p className="text-gray-600 font-medium">
                                Modern digital learning tools and smart classrooms to make learning interactive and exciting!
                            </p>
                        </div>
                        
                        {/* Feature 8 - simplified */}
                        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-3xl text-center hover:shadow-md transition-all duration-300 border-2 border-amber-200 kid-rounded">
                            <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border-2 border-white">
                                <span className="text-3xl">📝</span>
                            </div>
                            <h3 className="text-xl font-bold text-amber-600 mb-4 handwritten">CBSE Pattern</h3>
                            <p className="text-gray-600 font-medium">
                                Following the national CBSE curriculum guidelines with a focus on holistic development and fun learning experiences!
                            </p>
                        </div>
                    </div>

                    {/* Row 3 - 1 card centered - simplified */}
                    <div className="grid grid-cols-1 gap-8 mt-8 max-w-sm mx-auto">
                        {/* Feature 9 - simplified */}
                        <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-3xl text-center hover:shadow-md transition-all duration-300 border-2 border-sky-200 kid-rounded">
                            <div className="bg-sky-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border-2 border-white">
                                <span className="text-3xl">🖥️</span>
                            </div>
                            <h3 className="text-xl font-bold text-sky-600 mb-4 handwritten">Digital Classrooms</h3>
                            <p className="text-gray-600 font-medium">
                                Interactive smartboards and digital resources make learning engaging, colorful, and spark curiosity in young minds!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Section - simplified */}
            <section className="py-16 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
                <div className="max-w-7xl mx-auto relative">
                 
                    <div className="text-center mb-16 relative">
                        <h2 className="text-4xl font-bold mb-4 handwritten text-indigo-600">
                            Our Fun Learning Programs
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
                            Age-appropriate programs designed to support your child's development 
                            with <span className="font-bold text-pink-500">lots of fun</span>, 
                            <span className="font-bold text-blue-500"> games</span>, and 
                            <span className="font-bold text-green-500"> adventures</span>!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* PG Program - simplified */}
                        <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-3xl text-center hover:shadow-md transition-all duration-300 border-2 border-orange-200 kid-rounded">
                            <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border-2 border-white">
                                <span className="text-3xl">🍼</span>
                            </div>
                            <div className="mb-3">
                                <h3 className="text-2xl font-bold text-orange-600 mb-1 handwritten">PG Program</h3>
                                <p className="text-gray-600 font-medium">Ages 1.5-2 years</p>
                            </div>
                            
                            <ul className="space-y-3 mb-6 text-left">
                                <li className="flex items-center text-gray-700">
                                    <span className="text-orange-500 mr-3">✓</span>
                                    Playful introduction to school
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="text-orange-500 mr-3">✓</span>
                                    Sensory development activities
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="text-orange-500 mr-3">✓</span>
                                    Parent-child bonding sessions
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="text-orange-500 mr-3">✓</span>
                                    Toddler socialization skills
                                </li>
                            </ul>

                            <button className="w-full bg-gradient-to-r from-orange-400 to-amber-500 text-white py-3 rounded-full font-semibold hover:from-orange-500 hover:to-amber-600 transition-all duration-300 shadow-sm border-2 border-white">
                                <span className="inline-block mr-2">🚀</span> Join PG Program
                            </button>
                        </div>

                        {/* Nursery Program - simplified */}
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl text-center hover:shadow-md transition-all duration-300 border-2 border-green-200 kid-rounded">
                            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border-2 border-white">
                                <span className="text-3xl">🧩</span>
                            </div>
                            <div className="mb-3">
                                <h3 className="text-2xl font-bold text-green-600 mb-1 handwritten">Nursery</h3>
                                <p className="text-gray-600 font-medium">Ages 2-3 years</p>
                            </div>
                            
                            <ul className="space-y-3 mb-6 text-left">
                                <li className="flex items-center text-gray-700">
                                    <span className="text-green-500 mr-3">✓</span>
                                    Basic social interaction
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="text-green-500 mr-3">✓</span>
                                    Sensory play activities
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="text-green-500 mr-3">✓</span>
                                    Simple rhymes and songs
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="text-green-500 mr-3">✓</span>
                                    Basic toilet training
                                </li>
                            </ul>

                            <button className="w-full bg-gradient-to-r from-green-400 to-emerald-500 text-white py-3 rounded-full font-semibold hover:from-green-500 hover:to-emerald-600 transition-all duration-300 shadow-sm border-2 border-white">
                                <span className="inline-block mr-2">🌱</span> Join Nursery
                            </button>
                        </div>

                        {/* LKG Program */}
                        {/* LKG Program - simplified */}
                        <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-3xl text-center hover:shadow-md transition-all duration-300 border-2 border-pink-200 kid-rounded">
                            <div className="bg-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border-2 border-white">
                                <span className="text-3xl">👶</span>
                            </div>
                            <div className="mb-3">
                                <h3 className="text-2xl font-bold text-pink-600 mb-1 handwritten">LKG Program</h3>
                                <p className="text-gray-600 font-medium">Ages 3-4 years</p>
                            </div>
                            
                            <ul className="space-y-3 mb-6 text-left">
                                <li className="flex items-center text-gray-700">
                                    <span className="text-pink-500 mr-3">✓</span>
                                    Basic alphabet and numbers
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="text-pink-500 mr-3">✓</span>
                                    Color and shape identification
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="text-pink-500 mr-3">✓</span>
                                    Motor skill development
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="text-pink-500 mr-3">✓</span>
                                    Social skills and sharing
                                </li>
                            </ul>

                            <button className="w-full bg-gradient-to-r from-pink-400 to-rose-500 text-white py-3 rounded-full font-semibold hover:from-pink-500 hover:to-rose-600 transition-all duration-300 shadow-sm border-2 border-white">
                                <span className="inline-block mr-2">🎈</span> Join LKG
                            </button>
                        </div>

                        {/* UKG Program - simplified */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl text-center hover:shadow-md transition-all duration-300 border-2 border-blue-200 kid-rounded">
                            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border-2 border-white">
                                <span className="text-3xl">🌟</span>
                            </div>
                            <div className="mb-3">
                                <h3 className="text-2xl font-bold text-blue-600 mb-1 handwritten">UKG Program</h3>
                                <p className="text-gray-600 font-medium">Ages 4-5 years</p>
                            </div>
                            
                            <ul className="space-y-3 mb-6 text-left">
                                <li className="flex items-center text-gray-700">
                                    <span className="text-blue-500 mr-3">✓</span>
                                    Reading and writing prep
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="text-blue-500 mr-3">✓</span>
                                    Basic math concepts
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="text-blue-500 mr-3">✓</span>
                                    Science exploration
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="text-blue-500 mr-3">✓</span>
                                    School readiness skills
                                </li>
                            </ul>

                            <button className="w-full bg-gradient-to-r from-blue-400 to-indigo-500 text-white py-3 rounded-full font-semibold hover:from-blue-500 hover:to-indigo-600 transition-all duration-300 shadow-sm border-2 border-white">
                                <span className="inline-block mr-2">🎓</span> Join UKG
                            </button>
                        </div>
                    </div>
                    
                    {/* Join Us Note - simplified */}
                    <div className="mt-12 max-w-3xl mx-auto text-center">
                        <div className="bg-white rounded-3xl p-6 shadow-md border-2 border-indigo-200">
                            <p className="text-xl text-indigo-600 handwritten">
                                Our fun-filled programs create a joyful learning journey for every child!
                            </p>
                            <button 
                                onClick={() => navigate('/programs')}
                                className="mt-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-bold hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 shadow-sm"
                            >
                                <span className="inline-block mr-2">📝</span> Learn More About Our Programs
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Preview Section - simplified */}
            <section className="py-16 px-4 bg-gradient-to-br from-yellow-50 to-amber-50 relative overflow-hidden">
                {/* Decorative elements removed for simplicity */}
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-200 rounded-full opacity-20 -mb-16 -mr-16"></div>
                <div className="absolute top-0 right-1/3 w-24 h-24 bg-blue-200 rounded-full opacity-20 -mt-10"></div>
                
                <div className="max-w-7xl mx-auto relative">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 handwritten text-indigo-600">
                            Our Happy Moments <span className="inline-block">📸</span>
                        </h2>
                        <p className="text-xl text-gray-600 mt-6">
                            See our little explorers having a <span className="font-bold text-purple-500">blast</span> with learning!
                        </p>
                    </div>

                    {/* Gallery Grid - simplified */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                        {[
                            "https://lles-gallery-media.s3.amazonaws.com/Gallery/Fun%20Activities/WhatsApp%20Image%202025-07-09%20at%2022.06.06.jpeg",
                            "https://lles-gallery-media.s3.ap-south-1.amazonaws.com/Gallery/Fun+Activities/WhatsApp+Image+2025-07-09+at+22.24.42.jpeg",
                            "https://lles-gallery-media.s3.amazonaws.com/Gallery/Fun%20Activities/WhatsApp%20Image%202025-07-09%20at%2022.06.03%20(1).jpeg",
                            "https://lles-gallery-media.s3.amazonaws.com/Gallery/Fun%20Activities/WhatsApp%20Image%202025-07-09%20at%2022.00.48.jpeg",
                            "https://lles-gallery-media.s3.ap-south-1.amazonaws.com/Gallery/Fun+Activities/WhatsApp+Image+2025-07-09+at+22.35.13.jpeg",
                            "https://lles-gallery-media.s3.ap-south-1.amazonaws.com/Gallery/Fun+Activities/WhatsApp+Image+2025-07-09+at+22.45.05.jpeg",
                            "https://lles-gallery-media.s3.ap-south-1.amazonaws.com/Gallery/Fun+Activities/WhatsApp+Image+2025-07-09+at+22.35.13+(1).jpeg",
                            "https://lles-gallery-media.s3.ap-south-1.amazonaws.com/Gallery/Fun+Activities/WhatsApp+Image+2025-07-09+at+23.12.22.jpeg"
                        ].map((imageUrl, index) => (
                            <div key={index} className="rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 aspect-square border-2 border-gray-200">
                                <div className="w-full h-full relative group">
                                    <img 
                                        src={imageUrl}
                                        alt={`Happy moment ${index + 1} - Little Light A play School children activities`}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                                        <p className="text-white font-medium handwritten text-lg">
                                            Fun Day {index + 1}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <button 
                            onClick={() => navigate('/gallery/fun-activities')}
                            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-10 py-4 rounded-full text-lg font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-md"
                        >
                            <span className="inline-block mr-3">🖼️</span>
                            View Full Gallery
                        </button>
                    </div>
                </div>
            </section>

            {/* Admission CTA Section - simplified */}
            <section className="py-16 px-4 bg-indigo-100 relative">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Main card with simpler design */}
                    <div className="bg-white rounded-xl p-8 md:p-10 shadow-sm border border-indigo-200">
                        {/* Simple header */}
                        <div className="mb-4">
                            <h3 className="text-xl md:text-2xl font-bold handwritten text-indigo-600">
                                Join Our Family! <span>💖</span>
                            </h3>
                        </div>
                        
                        {/* Simple icons */}
                        <div className="flex justify-center gap-6 mb-4">
                            <span className="text-2xl">🎓</span>
                            <span className="text-2xl">🎒</span>
                        </div>
                        
                        <h2 className="text-2xl md:text-3xl font-bold handwritten text-indigo-700 mb-6">
                            Ready For The Learning Adventure? <span>🚀</span>
                        </h2>
                        
                        {/* Simple text */}
                        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                            Join our loving school family and give your child a 
                            <span className="font-bold text-purple-600"> wonderful start </span> 
                            to their education journey!
                        </p>
                        
                        {/* Simple highlight box */}
                        <div className="bg-yellow-50 py-3 px-4 rounded-lg inline-block border border-yellow-200 mb-8">
                            <span className="handwritten font-bold text-pink-600">
                                Limited seats available for new admissions!
                            </span>
                        </div>
                        
                        {/* Simple buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                            <button 
                                onClick={() => navigate('/admissions')}
                                className="bg-indigo-500 text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-indigo-600 transition-colors duration-300 flex items-center justify-center"
                            >
                                <span className="mr-2">🎒</span> 
                                Apply Now - Admission Open!
                            </button>
                            <button className="border border-indigo-300 bg-white text-indigo-600 px-6 py-3 rounded-lg text-lg font-bold hover:bg-indigo-50 transition-colors duration-300 flex items-center justify-center"
                            >
                                <span className="mr-2">📞</span> 
                                Call: +91 70380 57687
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section - Commented out for now */}
            {/* 
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            What Parents Say 💕
                        </h2>
                        <p className="text-xl text-gray-600">
                            Hear from our happy parent community
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="bg-white rounded-2xl p-8 shadow-lg">
                                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-dashed border-gray-300">
                                    <span className="text-2xl">👨‍👩‍👧</span>
                                </div>
                                <div className="text-center">
                                    <div className="text-yellow-400 text-xl mb-4">⭐⭐⭐⭐⭐</div>
                                    <p className="text-gray-600 italic mb-4">
                                        "Our daughter loves coming to school every day. The teachers are amazing and the learning environment is perfect for young children."
                                    </p>
                                    <div className="font-semibold text-gray-900">Parent {item}</div>
                                    <div className="text-sm text-gray-600">Parent of LKG Student</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            */}
        </div>
    );
}

export default HomePage