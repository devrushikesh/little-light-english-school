const AboutUsPage = () => {
    const milestones = [
        {
            year: '2015',
            title: 'Foundation',
            description: 'Little Light English School was established to provide quality early childhood education in Solapur.',
            icon: '🏗️'
        },
        {
            year: '2017',
            title: 'Expansion',
            description: 'Added new classrooms and play areas to accommodate growing number of students.',
            icon: '📈'
        },
        {
            year: '2019',
            title: 'Recognition',
            description: 'Received recognition for excellence in early childhood education and innovative teaching methods.',
            icon: '🏆'
        },
        {
            year: '2021',
            title: 'Digital Learning',
            description: 'Introduced smart classrooms and digital learning tools to enhance educational experience.',
            icon: '💻'
        },
        {
            year: '2024',
            title: 'Community Impact',
            description: 'Celebrating 9 years of nurturing young minds and contributing to the Solapur community.',
            icon: '🎉'
        }
    ];

    const values = [
        {
            title: 'Love & Care',
            description: 'Every child is treated with unconditional love and individual attention.',
            icon: '💕',
            color: 'from-pink-500 to-rose-500'
        },
        {
            title: 'Holistic Development',
            description: 'We focus on cognitive, emotional, social, and physical development.',
            icon: '🌱',
            color: 'from-green-500 to-emerald-500'
        },
        {
            title: 'Safe Environment',
            description: 'Child-safe facilities with proper security and hygiene protocols.',
            icon: '🛡️',
            color: 'from-blue-500 to-indigo-500'
        },
        {
            title: 'Play-Based Learning',
            description: 'Learning through fun activities, games, and creative exploration.',
            icon: '🎭',
            color: 'from-purple-500 to-violet-500'
        },
        {
            title: 'Parent Partnership',
            description: 'Strong collaboration between parents and teachers for child development.',
            icon: '🤝',
            color: 'from-orange-500 to-amber-500'
        },
        {
            title: 'Cultural Values',
            description: 'Instilling traditional values while embracing modern education methods.',
            icon: '🕉️',
            color: 'from-yellow-500 to-orange-500'
        }
    ];

    const teamMembers = [
        {
            name: 'Mrs. Priya Sharma',
            role: 'Principal & Founder',
            experience: '12+ years',
            qualification: 'M.Ed in Early Childhood Education',
            description: 'Passionate about nurturing young minds with innovative teaching methods.',
            image: '👩‍🏫'
        },
        {
            name: 'Mrs. Anita Patil',
            role: 'Senior Teacher - LKG',
            experience: '8+ years',
            qualification: 'B.Ed with Montessori Training',
            description: 'Specialist in play-based learning and child psychology.',
            image: '👩‍🎓'
        },
        {
            name: 'Mrs. Sunita Jadhav',
            role: 'Senior Teacher - UKG',
            experience: '6+ years',
            qualification: 'B.Ed with Early Childhood Certification',
            description: 'Expert in preparing children for primary school transition.',
            image: '👩‍🏫'
        },
        {
            name: 'Mr. Rahul Desai',
            role: 'Activity Coordinator',
            experience: '5+ years',
            qualification: 'B.A. in Arts & Crafts',
            description: 'Creative mentor for arts, music, and physical activities.',
            image: '👨‍🎨'
        }
    ];

    const facilities = [
        {
            title: 'Smart Classrooms',
            description: 'Interactive learning environment with modern teaching aids',
            icon: '📱'
        },
        {
            title: 'Indoor Play Area',
            description: 'Safe and spacious indoor play zones for all weather conditions',
            icon: '🏠'
        },
        {
            title: 'Outdoor Playground',
            description: 'Well-equipped outdoor playground with age-appropriate equipment',
            icon: '🏞️'
        },
        {
            title: 'Library Corner',
            description: 'Colorful library with picture books and storytelling area',
            icon: '📚'
        },
        {
            title: 'Art & Craft Room',
            description: 'Dedicated space for creative activities and art projects',
            icon: '🎨'
        },
        {
            title: 'Medical Room',
            description: 'First aid facility with trained staff for health emergencies',
            icon: '🏥'
        },
        {
            title: 'CCTV Monitoring',
            description: 'Complete campus surveillance for child safety and security',
            icon: '📹'
        },
        {
            title: 'Nutritious Meals',
            description: 'Hygienic kitchen providing healthy and balanced meals',
            icon: '🥗'
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section - Full-width Immersive Design */}
            <section className="relative min-h-[80vh] hero-section w-full overflow-hidden">
                {/* Background with layers and animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 opacity-90"></div>
                
                {/* Animated background particles */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-24 h-24 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
                    <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-400 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1.5s'}}></div>
                    <div className="absolute bottom-40 right-1/4 w-20 h-20 bg-pink-400 rounded-full opacity-20 animate-pulse" style={{animationDelay: '0.7s'}}></div>
                </div>
                
                {/* Floating educational elements */}
                <div className="absolute hidden md:block top-10 right-10 animate-float" style={{animationDelay: '0.5s'}}>
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                        <span className="text-4xl">🎨</span>
                    </div>
                </div>
                <div className="absolute hidden md:block bottom-10 left-10 animate-float" style={{animationDelay: '1.2s'}}>
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                        <span className="text-3xl">📚</span>
                    </div>
                </div>
                <div className="absolute hidden md:block top-20 left-1/3 animate-float" style={{animationDelay: '0.8s'}}>
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                        <span className="text-2xl">🧩</span>
                    </div>
                </div>
                
                {/* Main Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-center pt-16 md:pt-20 pb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="text-white">
                            <div className="mb-6">
                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 font-['Poppins',sans-serif] leading-tight">
                                    About <span className="text-yellow-300">Little Light</span> 
                                    <br />A Play School 
                                    <span className="inline-block ml-2 animate-pulse">✨</span>
                                </h1>
                                <div className="relative mt-6">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 via-indigo-500 to-purple-500 rounded-lg blur-lg opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                                    <p className="relative text-lg md:text-xl leading-relaxed bg-white/10 backdrop-blur-md rounded-xl shadow-xl border border-white/20 px-6 py-5 font-['Poppins',sans-serif]">
                                        <span className="font-semibold text-yellow-300">Nurturing young minds</span> since 2015 in the heart of Solapur. 
                                        Where every child's potential <span className="font-semibold text-yellow-300">shines bright</span> like a little light! 🌟
                                    </p>
                                </div>
                            </div>
                            
                            {/* Stats Cards */}
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <div className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                                    <div className="relative text-center bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                                        <div className="flex justify-center mb-2">
                                            <span className="bg-blue-500/20 w-10 h-10 rounded-full flex items-center justify-center text-xl">👧👦</span>
                                        </div>
                                        <div className="text-2xl md:text-3xl font-bold text-yellow-300">500+</div>
                                        <div className="text-sm font-medium text-white/80 font-['Poppins',sans-serif]">Happy Students</div>
                                    </div>
                                </div>
                                
                                <div className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-400 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                                    <div className="relative text-center bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                                        <div className="flex justify-center mb-2">
                                            <span className="bg-purple-500/20 w-10 h-10 rounded-full flex items-center justify-center text-xl">🏫</span>
                                        </div>
                                        <div className="text-2xl md:text-3xl font-bold text-yellow-300">9+</div>
                                        <div className="text-sm font-medium text-white/80 font-['Poppins',sans-serif]">Years of Excellence</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Right side image/illustration */}
                        <div className="hidden lg:flex justify-center items-center">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 rounded-full blur-lg opacity-30"></div>
                                <div className="relative bg-white/10 backdrop-blur-md rounded-full aspect-square w-64 h-64 md:w-80 md:h-80 border border-white/30 shadow-2xl flex items-center justify-center overflow-hidden">
                                    <div className="text-9xl mb-4">🏫</div>
                                </div>
                                
                                {/* Floating badges */}
                                <div className="absolute -top-4 -right-4 bg-white/20 backdrop-blur-md rounded-full p-4 shadow-lg border border-white/30">
                                    <div className="w-12 h-12 flex items-center justify-center text-2xl">🎯</div>
                                </div>
                                <div className="absolute -bottom-4 -left-4 bg-white/20 backdrop-blur-md rounded-full p-4 shadow-lg border border-white/30">
                                    <div className="w-12 h-12 flex items-center justify-center text-2xl">🌱</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="inline-block text-4xl font-bold mb-2 font-['Poppins',sans-serif] relative">
                            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Our Story</span>
                            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto font-['Poppins',sans-serif]">A journey of nurturing young minds since 2015</p>
                    </div>
                    
                    {/* Our Story Content */}
                    <div className="relative group w-full">
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                        <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:items-start">
                                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4 rounded-full shadow-md mb-6 md:mb-0 md:mr-8 flex-shrink-0 self-center md:self-start">
                                    <span className="text-4xl">📖</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 font-['Poppins',sans-serif] mb-4 md:text-3xl">The Little Light Story</h3>
                                    <p className="text-gray-600 leading-relaxed mb-6 font-['Poppins',sans-serif] text-lg">
                                        Founded in 2015, <span className="font-semibold text-indigo-600">Little Light A play School</span> began as a dream to create a nurturing 
                                        environment where children could learn, grow, and discover their unique potential. 
                                        Located in the vibrant Gad Society near Pavtya Maruti Temple, our school has been 
                                        a beacon of quality early childhood education in Damani Nagar, Solapur.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed mb-6 font-['Poppins',sans-serif] text-lg">
                                        Over the past <span className="font-semibold text-indigo-600">9+ years</span>, we have touched the lives of hundreds of children, 
                                        helping them build strong foundations for their educational journey. Our commitment 
                                        to excellence in early childhood education has made us a trusted name among 
                                        parents in the Solapur community.
                                    </p>
                                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-6">
                                        <p className="text-indigo-800 font-medium font-['Poppins',sans-serif] italic text-center text-xl">
                                            "Every child is like a little light with unlimited potential. 
                                            Our role is to help that light shine brighter."
                                        </p>
                                        <p className="text-right text-indigo-600 font-medium mt-2">— Our Philosophy</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 px-4 bg-gradient-to-b from-white to-indigo-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="inline-block text-4xl font-bold mb-2 font-['Poppins',sans-serif] relative">
                            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Our Purpose</span>
                            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto font-['Poppins',sans-serif]">Guiding principles that shape our approach to early childhood education</p>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="relative group transform hover:-rotate-1 transition-all duration-300">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
                            <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-blue-100 h-full">
                                <div className="flex items-center mb-6">
                                    <div className="relative">
                                        <div className="absolute -inset-1 bg-blue-400 rounded-full blur opacity-30"></div>
                                        <div className="relative bg-gradient-to-r from-blue-500 to-indigo-500 p-4 rounded-full mr-6 text-white shadow-lg">
                                            <span className="text-2xl">🎯</span>
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 font-['Poppins',sans-serif]">Our Mission</h3>
                                </div>
                                
                                <div className="pl-16">
                                    <p className="text-gray-700 leading-relaxed font-['Poppins',sans-serif] mb-6">
                                        To provide a <span className="font-semibold text-blue-600">safe, nurturing, and stimulating environment</span> where young children 
                                        can explore, learn, and develop their full potential through play-based learning, 
                                        fostering creativity, curiosity, and confidence that will serve as a strong 
                                        foundation for their lifelong educational journey.
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-3 mt-4">
                                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Nurturing Environment</span>
                                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Play-Based Learning</span>
                                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Child-Centered</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative group transform hover:rotate-1 transition-all duration-300">
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
                            <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-purple-100 h-full">
                                <div className="flex items-center mb-6">
                                    <div className="relative">
                                        <div className="absolute -inset-1 bg-purple-400 rounded-full blur opacity-30"></div>
                                        <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full mr-6 text-white shadow-lg">
                                            <span className="text-2xl">👁️</span>
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 font-['Poppins',sans-serif]">Our Vision</h3>
                                </div>
                                
                                <div className="pl-16">
                                    <p className="text-gray-700 leading-relaxed font-['Poppins',sans-serif] mb-6">
                                        To be the <span className="font-semibold text-purple-600">leading early childhood education center</span> in Solapur, recognized for 
                                        our innovative teaching methods, caring environment, and commitment to developing 
                                        confident, creative, and compassionate children who will become tomorrow's leaders 
                                        and positive contributors to society.
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-3 mt-4">
                                        <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Innovation</span>
                                        <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Excellence</span>
                                        <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Future Leaders</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Why Choose Us - Added section */}
                    <div className="mt-16 relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl blur opacity-20"></div>
                        <div className="relative bg-white rounded-3xl p-8 border border-yellow-200 shadow-xl overflow-hidden">
                            <div className="absolute right-0 top-0 -mt-10 -mr-10 w-40 h-40 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20"></div>
                            <div className="absolute left-0 bottom-0 -mb-10 -ml-10 w-40 h-40 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20"></div>
                            
                            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 font-['Poppins',sans-serif]">Why Parents Choose <span className="text-yellow-600">Little Light</span></h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="bg-yellow-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300 border border-yellow-100">
                                    <div className="text-yellow-600 text-3xl mb-3 flex justify-center">👩‍🏫</div>
                                    <h4 className="font-bold text-gray-900 mb-2 text-center font-['Poppins',sans-serif]">Expert Teachers</h4>
                                    <p className="text-gray-600 text-sm text-center font-['Poppins',sans-serif]">Passionate educators with specialized early childhood training</p>
                                </div>
                                
                                <div className="bg-yellow-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300 border border-yellow-100">
                                    <div className="text-yellow-600 text-3xl mb-3 flex justify-center">🏆</div>
                                    <h4 className="font-bold text-gray-900 mb-2 text-center font-['Poppins',sans-serif]">Proven Results</h4>
                                    <p className="text-gray-600 text-sm text-center font-['Poppins',sans-serif]">Our students consistently excel in primary school and beyond</p>
                                </div>
                                
                                <div className="bg-yellow-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300 border border-yellow-100">
                                    <div className="text-yellow-600 text-3xl mb-3 flex justify-center">🧠</div>
                                    <h4 className="font-bold text-gray-900 mb-2 text-center font-['Poppins',sans-serif]">Brain-Based Learning</h4>
                                    <p className="text-gray-600 text-sm text-center font-['Poppins',sans-serif]">Curriculum designed around how children's brains develop</p>
                                </div>
                                
                                <div className="bg-yellow-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300 border border-yellow-100">
                                    <div className="text-yellow-600 text-3xl mb-3 flex justify-center">🤝</div>
                                    <h4 className="font-bold text-gray-900 mb-2 text-center font-['Poppins',sans-serif]">Parent Partnership</h4>
                                    <p className="text-gray-600 text-sm text-center font-['Poppins',sans-serif]">Regular communication and collaboration with families</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-16 px-4 bg-white relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-50"></div>
                <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-gradient-to-br from-pink-100 to-yellow-100 rounded-full opacity-50"></div>
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="inline-block text-4xl font-bold mb-4 font-['Poppins',sans-serif] relative">
                            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Our Core Values</span>
                            <span className="ml-2 animate-pulse text-4xl">💎</span>
                            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 rounded-full"></div>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-['Poppins',sans-serif]">
                            The principles that guide our approach to early childhood education
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"></div>
                                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full transform group-hover:-translate-y-1">
                                    <div className="flex flex-col items-center">
                                        <div className={`bg-gradient-to-r ${value.color} w-20 h-20 rounded-full flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            <span className="text-3xl">{value.icon}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 text-center font-['Poppins',sans-serif]">{value.title}</h3>
                                        <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-4"></div>
                                        <p className="text-gray-600 text-center leading-relaxed font-['Poppins',sans-serif]">{value.description}</p>
                                    </div>
                                    
                                    {/* Visual effect on hover */}
                                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Added awards/recognition section */}
                    <div className="mt-20">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2 font-['Poppins',sans-serif]">Recognition & Achievements</h3>
                            <p className="text-gray-600 max-w-2xl mx-auto font-['Poppins',sans-serif]">Our commitment to excellence has been recognized</p>
                        </div>
                        
                        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100 shadow-lg">
                            <div className="flex flex-wrap items-center justify-center gap-8">
                                <div className="flex flex-col items-center px-6 py-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <div className="text-3xl mb-2">🏆</div>
                                    <p className="text-gray-800 font-bold text-center font-['Poppins',sans-serif]">Best Preschool Award</p>
                                    <p className="text-gray-600 text-sm text-center font-['Poppins',sans-serif]">Solapur Education Society</p>
                                </div>
                                
                                <div className="flex flex-col items-center px-6 py-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <div className="text-3xl mb-2">⭐</div>
                                    <p className="text-gray-800 font-bold text-center font-['Poppins',sans-serif]">5-Star Safety Rating</p>
                                    <p className="text-gray-600 text-sm text-center font-['Poppins',sans-serif]">Child Safety Standards</p>
                                </div>
                                
                                <div className="flex flex-col items-center px-6 py-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <div className="text-3xl mb-2">🎓</div>
                                    <p className="text-gray-800 font-bold text-center font-['Poppins',sans-serif]">Excellence in Teaching</p>
                                    <p className="text-gray-600 text-sm text-center font-['Poppins',sans-serif]">Early Learning Foundation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Journey */}
            <section className="py-16 px-4 bg-gradient-to-b from-indigo-50 to-white relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-1/4 w-32 h-32 bg-yellow-100 rounded-full opacity-60 blur-lg"></div>
                <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-indigo-100 rounded-full opacity-60 blur-lg"></div>
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="inline-block text-4xl font-bold mb-4 font-['Poppins',sans-serif] relative">
                            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Our Journey</span>
                            <span className="ml-2 text-4xl animate-bounce-slow">🗓️</span>
                            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full"></div>
                        </h2>
                        <p className="text-xl text-gray-600 font-['Poppins',sans-serif]">
                            Key milestones in our educational journey since 2015
                        </p>
                    </div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1.5 bg-gradient-to-b from-indigo-400 to-purple-500 rounded-full shadow-lg"></div>
                        
                        {milestones.map((milestone, index) => (
                            <div 
                                key={index} 
                                className={`relative flex items-center mb-16 ${
                                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                                }`}
                            >
                                <div className={`w-full max-w-md ${
                                    index % 2 === 0 ? 'pr-8 md:pr-12 text-right' : 'pl-8 md:pl-12 text-left'
                                }`}>
                                    <div className="relative group transform hover:scale-105 transition-transform duration-300">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                                        <div className="relative bg-white rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                                            <div className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'} items-center mb-3`}>
                                                <div className={`${index % 2 === 0 ? 'order-2 ml-3' : 'order-1 mr-3'}`}>
                                                    <span className="text-3xl inline-block p-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100">{milestone.icon}</span>
                                                </div>
                                                <div className={`${index % 2 === 0 ? 'order-1 text-right' : 'order-2 text-left'}`}>
                                                    <h3 className="text-xl font-bold text-gray-900 font-['Poppins',sans-serif]">{milestone.title}</h3>
                                                    <p className="text-indigo-600 font-semibold font-['Poppins',sans-serif]">{milestone.year}</p>
                                                </div>
                                            </div>
                                            <p className={`text-gray-600 font-['Poppins',sans-serif] ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                                {milestone.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Timeline dot - Make it more visually appealing */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                                    <div className="w-10 h-10 rounded-full bg-white p-1 shadow-lg">
                                        <div className="w-full h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                                            {milestone.year.replace('20', '')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        
                        {/* Future milestone */}
                        <div className="relative flex items-center justify-center mt-8">
                            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-full shadow-lg">
                                <p className="text-center font-['Poppins',sans-serif] font-medium">Continuing our journey of excellence...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Team - Commented out in original file */}
            {/* <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Poppins',sans-serif]">
                            Meet Our Team 👥
                        </h2>
                        <p className="text-xl text-gray-600 font-['Poppins',sans-serif]">
                            Dedicated professionals committed to your child's growth
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center">
                                    <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-3xl">{member.image}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1 font-['Poppins',sans-serif]">{member.name}</h3>
                                    <p className="text-indigo-600 font-semibold mb-2 font-['Poppins',sans-serif]">{member.role}</p>
                                    <p className="text-sm text-gray-600 mb-2 font-['Poppins',sans-serif]">{member.experience} experience</p>
                                    <p className="text-xs text-gray-500 mb-3 font-['Poppins',sans-serif]">{member.qualification}</p>
                                    <p className="text-sm text-gray-600 leading-relaxed font-['Poppins',sans-serif]">{member.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Facilities */}
            <section className="py-16 px-4 bg-white relative overflow-hidden">
                {/* Decorative background */}
                <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-indigo-50 to-transparent opacity-60"></div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-200 rounded-full opacity-30 blur-lg"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-200 rounded-full opacity-30 blur-lg"></div>
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="inline-block text-4xl font-bold mb-4 font-['Poppins',sans-serif] relative">
                            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">World-Class Facilities</span>
                            <span className="ml-2 animate-bounce-slow text-4xl">🏢</span>
                            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full"></div>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-['Poppins',sans-serif]">
                            State-of-the-art amenities designed for optimal learning, safety, and fun
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {facilities.map((facility, index) => (
                            <div key={index} className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-xl blur opacity-20 group-hover:opacity-70 transition-all duration-500"></div>
                                <div className="relative bg-white rounded-xl h-full p-6 shadow-md group-hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between">
                                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 flex items-center justify-center mb-5">
                                        <span className="text-5xl transform group-hover:scale-125 transition-transform duration-500">{facility.icon}</span>
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3 font-['Poppins',sans-serif]">{facility.title}</h3>
                                        <p className="text-gray-600 font-['Poppins',sans-serif]">{facility.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Virtual Tour Button */}
                    <div className="mt-16 text-center">
                        <div className="relative inline-block group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-80 transition-all duration-500"></div>
                            <button className="relative bg-white text-gray-800 border border-gray-200 font-bold px-8 py-4 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 font-['Poppins',sans-serif] flex items-center">
                                <span className="bg-gradient-to-r from-indigo-500 to-purple-500 p-2 rounded-full mr-3 text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                Take a Virtual School Tour
                            </button>
                        </div>
                        <p className="mt-3 text-gray-500 font-['Poppins',sans-serif]">Experience our campus from the comfort of your home</p>
                    </div>
                    
                    {/* Safety Standards */}
                    <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-blue-100">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                                <div className="bg-white p-5 rounded-full shadow-md">
                                    <span className="text-5xl">🛡️</span>
                                </div>
                            </div>
                            <div className="md:w-3/4 md:pl-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-['Poppins',sans-serif]">Our Safety Standards</h3>
                                <p className="text-gray-700 mb-4 font-['Poppins',sans-serif]">
                                    We maintain the highest safety standards with 24/7 CCTV monitoring, secure entry systems, 
                                    trained staff in first aid, and regular safety drills to ensure the wellbeing of every child.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        24/7 CCTV
                                    </span>
                                    <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Secure Entry
                                    </span>
                                    <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        First-Aid Trained Staff
                                    </span>
                                    <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Regular Safety Drills
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
        </div>
    );
}

export default AboutUsPage;