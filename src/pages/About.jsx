

const AboutUsPage = () => {
    const milestones = [
        {
            year: '2015',
            title: 'Foundation',
            description: 'Little Little English School was established to provide quality early childhood education in Solapur.',
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
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            {/* Hero Section */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            ✨ About Little Light A play School
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Nurturing young minds since 2015 in the heart of Solapur. 
                            Where every child's potential shines bright like a little light! 🌟
                        </p>
                    </div>ˀ

                    {/* Hero Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="bg-white rounded-2xl p-8 shadow-lg">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story 📖</h2>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    Founded in 2015, Little Light A play School began as a dream to create a nurturing 
                                    environment where children could learn, grow, and discover their unique potential. 
                                    Located in the vibrant Gad Society near Pavtya Maruti Temple, our school has been 
                                    a beacon of quality early childhood education in Damani Nagar, Solapur.
                                </p>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    Over the past 9+ years, we have touched the lives of hundreds of children, 
                                    helping them build strong foundations for their educational journey. Our commitment 
                                    to excellence in early childhood education has made us a trusted name among 
                                    parents in the Solapur community.
                                </p>
                                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                                    <p className="text-indigo-800 font-medium">
                                        "Every child is like a little light with unlimited potential. 
                                        Our role is to help that light shine brighter." - Our Philosophy
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* School Building Image */}
                        <div className="relative">
                            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl aspect-square flex items-center justify-center border-4 border-dashed border-orange-300">
                                <div className="text-center p-8">
                                    <div className="text-6xl mb-4">🏫</div>
                                    <p className="text-gray-600 font-medium">School Building Image</p>
                                    <p className="text-sm text-gray-500">Our beautiful campus in Solapur</p>
                                </div>
                            </div>
                            {/* Floating Stats */}
                            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-indigo-600">9+</div>
                                    <div className="text-xs text-gray-600">Years</div>
                                </div>
                            </div>
                            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-green-600">500+</div>
                                    <div className="text-xs text-gray-600">Students</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8">
                            <div className="flex items-center mb-6">
                                <div className="bg-blue-100 p-3 rounded-full mr-4">
                                    <span className="text-2xl">🎯</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                To provide a safe, nurturing, and stimulating environment where young children 
                                can explore, learn, and develop their full potential through play-based learning, 
                                fostering creativity, curiosity, and confidence that will serve as a strong 
                                foundation for their lifelong educational journey.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8">
                            <div className="flex items-center mb-6">
                                <div className="bg-purple-100 p-3 rounded-full mr-4">
                                    <span className="text-2xl">👁️</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                To be the leading early childhood education center in Solapur, recognized for 
                                our innovative teaching methods, caring environment, and commitment to developing 
                                confident, creative, and compassionate children who will become tomorrow's leaders 
                                and positive contributors to society.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Our Core Values 💎
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            The principles that guide our approach to early childhood education
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className={`bg-gradient-to-r ${value.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                                    <span className="text-2xl">{value.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{value.title}</h3>
                                <p className="text-gray-600 text-center leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Journey */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Our Journey 🗓️
                        </h2>
                        <p className="text-xl text-gray-600">
                            Key milestones in our educational journey
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-200"></div>
                        
                        {milestones.map((milestone, index) => (
                            <div key={index} className={`relative flex items-center mb-12 ${
                                index % 2 === 0 ? 'justify-start' : 'justify-end'
                            }`}>
                                <div className={`w-full max-w-md ${
                                    index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'
                                }`}>
                                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                                        <div className="flex items-center mb-3">
                                            <span className="text-2xl mr-3">{milestone.icon}</span>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                                                <p className="text-indigo-600 font-semibold">{milestone.year}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-600">{milestone.description}</p>
                                    </div>
                                </div>
                                
                                {/* Timeline dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-lg"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Team */}
            {/* <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Meet Our Team 👥
                        </h2>
                        <p className="text-xl text-gray-600">
                            Dedicated professionals committed to your child's growth
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                                <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">{member.image}</span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                                <p className="text-indigo-600 font-semibold mb-2">{member.role}</p>
                                <p className="text-sm text-gray-600 mb-2">{member.experience} experience</p>
                                <p className="text-xs text-gray-500 mb-3">{member.qualification}</p>
                                <p className="text-sm text-gray-600 leading-relaxed">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Facilities */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Our Facilities 🏢
                        </h2>
                        <p className="text-xl text-gray-600">
                            Modern amenities designed for optimal learning and safety
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {facilities.map((facility, index) => (
                            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                                <div className="text-center">
                                    <span className="text-3xl block mb-3">{facility.icon}</span>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{facility.title}</h3>
                                    <p className="text-sm text-gray-600">{facility.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-4 bg-gradient-to-br from-indigo-600 to-purple-600">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-white rounded-3xl p-12 shadow-2xl">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Ready to Start Your Child's Journey? 🚀
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Join our Little Light family and give your child the foundation they deserve. 
                            Come visit us and see why parents in Solapur trust us with their little ones.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                                🏫 Schedule a Visit
                            </button>
                            <button className="border-2 border-indigo-600 text-indigo-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-indigo-600 hover:text-white transition-all duration-300">
                                📞 Call: +91 70380 57687
                            </button>
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-gray-600">
                                📍 Gad Society, Near Pavtya Maruti Temple, Damani Nagar, Solapur 413001
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutUsPage;