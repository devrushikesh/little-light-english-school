
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Hero Content */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                    Where Little 
                                    <span className="text-indigo-600"> Dreams </span>
                                    Take Flight! ✨
                                </h1>
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    Nurturing young minds through play-based learning in our LKG & UKG programs. 
                                    Building confidence, creativity, and curiosity in every child.
                                </p>
                            </div>
                            
                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button 
                                    onClick={() => navigate('/admissions')}
                                    className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    🎒 Apply for Admission
                                </button>
                                <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300">
                                    📞 Call Us
                                </button>
                            </div>

                            {/* Key Stats */}
                            <div className="grid grid-cols-3 gap-6 pt-8">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-indigo-600">500+</div>
                                    <div className="text-sm text-gray-600">Happy Students</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-indigo-600">15+</div>
                                    <div className="text-sm text-gray-600">Expert Teachers</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-indigo-600">10+</div>
                                    <div className="text-sm text-gray-600">Years Experience</div>
                                </div>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="relative">
                            <div className="rounded-3xl overflow-hidden shadow-2xl">
                                <img 
                                    src="https://lles-galary-section-s3.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2025-07-09+at+22.00.48.jpeg"
                                    alt="Little Light A play School - Happy children learning and playing"
                                    className="w-full h-full object-cover aspect-square"
                                />
                            </div>
                            {/* Floating Elements */}
                            <div className="absolute -top-4 -right-4 bg-yellow-300 rounded-full p-4 animate-bounce">
                                <span className="text-2xl">⭐</span>
                            </div>
                            <div className="absolute -bottom-4 -left-4 bg-pink-300 rounded-full p-4 animate-pulse">
                                <span className="text-2xl">🎨</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Why Parents Choose Us? 💕
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We provide a safe, nurturing environment where your little ones can explore, 
                            learn, and grow with confidence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                        {/* Row 1 - 4 cards */}
                        {/* Feature 1 */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300">
                            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl">🎭</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Play-Based Learning</h3>
                            <p className="text-gray-600">
                                Learning through fun activities, games, and creative play that keeps children engaged and excited.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300">
                            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl">👩‍🏫</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Teachers</h3>
                            <p className="text-gray-600">
                                Qualified and caring teachers who understand child psychology and development needs.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300">
                            <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl">🛡️</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Safe Environment</h3>
                            <p className="text-gray-600">
                                Child-safe facilities with proper security measures and hygiene protocols.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300">
                            <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl">🎨</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Creative Activities</h3>
                            <p className="text-gray-600">
                                Art, music, dance, and craft activities to develop creativity and motor skills.
                            </p>
                        </div>
                    </div>

                    {/* Row 2 - 3 cards centered */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
                        {/* Feature 5 */}
                        <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300">
                            <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl">👨‍👩‍👧‍👦</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Parent Partnership</h3>
                            <p className="text-gray-600">
                                Regular communication and involvement of parents in their child's learning journey.
                            </p>
                        </div>

                        {/* Feature 6 */}
                        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300">
                            <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl">📚</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">English Foundation</h3>
                            <p className="text-gray-600">
                                Strong foundation in English language through stories, rhymes, and interactive sessions.
                            </p>
                        </div>

                        {/* Feature 7 */}
                        <div className="bg-gradient-to-br from-violet-50 to-indigo-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300">
                            <div className="bg-violet-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl">💻</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">E-Learning</h3>
                            <p className="text-gray-600">
                                Modern digital learning tools and smart classrooms to enhance the educational experience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Section */}
            <section className="py-16 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Our Programs 🌟
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Age-appropriate programs designed to support your child's development at every stage.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Nursery Program */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center mb-6">
                                <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-4 rounded-2xl mr-4">
                                    <span className="text-3xl">🍼</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">Nursery Program</h3>
                                    <p className="text-gray-600">Ages 2-3 years</p>
                                </div>
                            </div>
                            
                            {/* Nursery Image Placeholder */}
                            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl aspect-video flex items-center justify-center border-2 border-dashed border-green-300 mb-6">
                                <div className="text-center">
                                    <span className="text-4xl block mb-2">👼</span>
                                    <p className="text-gray-600 font-medium">Nursery Activities Image</p>
                                </div>
                            </div>

                            <ul className="space-y-3 mb-6">
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

                            <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 rounded-full font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300">
                                Learn More About Nursery
                            </button>
                        </div>

                        {/* LKG Program */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center mb-6">
                                <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-4 rounded-2xl mr-4">
                                    <span className="text-3xl">🌱</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">LKG Program</h3>
                                    <p className="text-gray-600">Ages 3-4 years</p>
                                </div>
                            </div>
                            
                            {/* LKG Image Placeholder */}
                            <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl aspect-video flex items-center justify-center border-2 border-dashed border-pink-300 mb-6">
                                <div className="text-center">
                                    <span className="text-4xl block mb-2">👶</span>
                                    <p className="text-gray-600 font-medium">LKG Activities Image</p>
                                </div>
                            </div>

                            <ul className="space-y-3 mb-6">
                                <li className="flex items-center text-gray-700">
                                    <span className="text-green-500 mr-3">✓</span>
                                    Basic alphabet and number recognition
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="text-green-500 mr-3">✓</span>
                                    Color and shape identification
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="text-green-500 mr-3">✓</span>
                                    Motor skill development
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="text-green-500 mr-3">✓</span>
                                    Social skills and sharing
                                </li>
                            </ul>

                            <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300">
                                Learn More About LKG
                            </button>
                        </div>

                        {/* UKG Program */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center mb-6">
                                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-4 rounded-2xl mr-4">
                                    <span className="text-3xl">🌟</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">UKG Program</h3>
                                    <p className="text-gray-600">Ages 4-5 years</p>
                                </div>
                            </div>
                            
                            {/* UKG Image Placeholder */}
                            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl aspect-video flex items-center justify-center border-2 border-dashed border-blue-300 mb-6">
                                <div className="text-center">
                                    <span className="text-4xl block mb-2">🧒</span>
                                    <p className="text-gray-600 font-medium">UKG Activities Image</p>
                                </div>
                            </div>

                            <ul className="space-y-3 mb-6">
                                <li className="flex items-center text-gray-700">
                                    <span className="text-green-500 mr-3">✓</span>
                                    Reading and writing preparation
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="text-green-500 mr-3">✓</span>
                                    Basic math concepts
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="text-green-500 mr-3">✓</span>
                                    Science exploration
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="text-green-500 mr-3">✓</span>
                                    School readiness skills
                                </li>
                            </ul>

                            <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-full font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all duration-300">
                                Learn More About UKG
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Preview Section */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Happy Moments 📸
                        </h2>
                        <p className="text-xl text-gray-600">
                            See our little learners in action!
                        </p>
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                        {[
                            "https://lles-galary-section-s3.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2025-07-09+at+22.00.48.jpeg",
                            "https://lles-galary-section-s3.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2025-07-09+at+22.06.02.jpeg",
                            "https://lles-galary-section-s3.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2025-07-09+at+22.06.15.jpeg",
                            "https://lles-galary-section-s3.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2025-07-09+at+22.08.35.jpeg",
                            "https://lles-galary-section-s3.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2025-07-09+at+22.08.36+(1).jpeg",
                            "https://lles-galary-section-s3.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2025-07-09+at+22.16.45.jpeg",
                            "https://lles-galary-section-s3.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2025-07-09+at+22.35.13+(1).jpeg",
                            "https://lles-galary-section-s3.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2025-07-09+at+22.45.05.jpeg"
                        ].map((imageUrl, index) => (
                            <div key={index} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 aspect-square">
                                <img 
                                    src={imageUrl}
                                    alt={`Happy moment ${index + 1} - Little Light A play School children activities`}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <button 
                            onClick={() => navigate('/gallery/fun-activities')}
                            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300"
                        >
                            View Full Gallery
                        </button>
                    </div>
                </div>
            </section>

            {/* Admission CTA Section */}
            <section className="py-16 px-4 bg-gradient-to-br from-indigo-600 to-purple-600">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-white rounded-3xl p-12 shadow-2xl">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Ready to Start Your Child's Journey? 🚀
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Join our loving school family and give your child the best foundation for their bright future. 
                            Limited seats available for the new academic year!
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button 
                                onClick={() => navigate('/admissions')}
                                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                            >
                                🎒 Apply Now - Admission Open!
                            </button>
                            <button className="border-2 border-indigo-600 text-indigo-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-indigo-600 hover:text-white transition-all duration-300">
                                📞 Call: +91 70380 57687
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