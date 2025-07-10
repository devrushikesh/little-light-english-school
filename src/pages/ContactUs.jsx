import { useState } from 'react';

const ContactUsPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid 10-digit mobile number';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message should be at least 10 characters long';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        
        try {
            // Simulate form submission
            await new Promise(resolve => setTimeout(resolve, 2000));
            alert('Thank you for your message! We will get back to you soon.');
            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            alert('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: '📍',
            title: 'Visit Us',
            details: [
                'Little Light A play School',
                'Gad Society, Near Pavtya Maruti Temple',
                'Damani Nagar, Solapur 413001'
            ],
            color: 'from-blue-500 to-indigo-500'
        },
        {
            icon: '📞',
            title: 'Call Us',
            details: [
                '+91 70380 57687',
                '+91 88309 99766',
                'Mon-Fri: 8:00 AM - 5:00 PM'
            ],
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: '✉️',
            title: 'Email Us',
            details: [
                'info@lles.edu',
                'admissions@lles.edu',
                'principal@lles.edu'
            ],
            color: 'from-purple-500 to-pink-500'
        }
    ];

    const quickContacts = [
        {
            department: 'Admissions',
            contact: '+91 70380 57687',
            email: 'admissions@lles.edu',
            hours: 'Mon-Fri: 9:00 AM - 4:00 PM'
        },
        {
            department: 'Principal Office',
            contact: '+91 88309 99766',
            email: 'principal@lles.edu',
            hours: 'Mon-Fri: 10:00 AM - 3:00 PM'
        },
        {
            department: 'General Inquiry',
            contact: '+91 70380 57687',
            email: 'info@lles.edu',
            hours: 'Mon-Sat: 8:00 AM - 5:00 PM'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            {/* Hero Section */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        📞 Contact Us
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We'd love to hear from you! Get in touch with us for admissions, 
                        general inquiries, or to schedule a visit to our school.
                    </p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {contactInfo.map((info, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className={`bg-gradient-to-r ${info.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                                    <span className="text-2xl">{info.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{info.title}</h3>
                                <div className="space-y-2 text-center">
                                    {info.details.map((detail, idx) => (
                                        <p key={idx} className="text-gray-600">{detail}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        
                        {/* Contact Form */}
                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6">
                                <h2 className="text-2xl font-bold text-white">Send us a Message</h2>
                                <p className="text-indigo-100 mt-2">Fill out the form and we'll get back to you</p>
                            </div>

                            <form onSubmit={handleSubmit} className="p-8 space-y-6">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors ${
                                            errors.name ? 'border-red-500 bg-red-50' : ''
                                        }`}
                                        placeholder="Your full name"
                                    />
                                    {errors.name && (
                                        <p className="mt-2 text-sm text-red-600 flex items-center">
                                            <span className="mr-1">⚠️</span>
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors ${
                                            errors.email ? 'border-red-500 bg-red-50' : ''
                                        }`}
                                        placeholder="your.email@example.com"
                                    />
                                    {errors.email && (
                                        <p className="mt-2 text-sm text-red-600 flex items-center">
                                            <span className="mr-1">⚠️</span>
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                {/* Phone */}
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number *
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <span className="text-gray-500 sm:text-sm">+91</span>
                                        </div>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className={`w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors ${
                                                errors.phone ? 'border-red-500 bg-red-50' : ''
                                            }`}
                                            placeholder="9876543210"
                                            maxLength="10"
                                        />
                                    </div>
                                    {errors.phone && (
                                        <p className="mt-2 text-sm text-red-600 flex items-center">
                                            <span className="mr-1">⚠️</span>
                                            {errors.phone}
                                        </p>
                                    )}
                                </div>

                                {/* Subject */}
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject *
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors appearance-none bg-white cursor-pointer ${
                                                errors.subject ? 'border-red-500 bg-red-50' : ''
                                            }`}
                                            style={{ 
                                                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                                                backgroundPosition: 'right 0.5rem center',
                                                backgroundRepeat: 'no-repeat',
                                                backgroundSize: '1.5em 1.5em'
                                            }}
                                        >
                                            <option value="" disabled className="text-gray-500">Select a subject</option>
                                            <option value="admission" className="text-gray-900">Admission Inquiry</option>
                                            <option value="general" className="text-gray-900">General Information</option>
                                            <option value="curriculum" className="text-gray-900">Curriculum Questions</option>
                                            <option value="fees" className="text-gray-900">Fee Structure</option>
                                            <option value="facilities" className="text-gray-900">School Facilities</option>
                                            <option value="transport" className="text-gray-900">Transportation</option>
                                            <option value="other" className="text-gray-900">Other</option>
                                        </select>
                                    </div>
                                    {errors.subject && (
                                        <p className="mt-2 text-sm text-red-600 flex items-center">
                                            <span className="mr-1">⚠️</span>
                                            {errors.subject}
                                        </p>
                                    )}
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows="5"
                                        className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors resize-none ${
                                            errors.message ? 'border-red-500 bg-red-50' : ''
                                        }`}
                                        placeholder="Please describe your inquiry in detail..."
                                    ></textarea>
                                    {errors.message && (
                                        <p className="mt-2 text-sm text-red-600 flex items-center">
                                            <span className="mr-1">⚠️</span>
                                            {errors.message}
                                        </p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-300 ${
                                        isSubmitting 
                                            ? 'opacity-50 cursor-not-allowed' 
                                            : 'hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 shadow-lg hover:shadow-xl'
                                    }`}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending Message...
                                        </span>
                                    ) : (
                                        '📨 Send Message'
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Quick Contact & Info */}
                        <div className="space-y-8">
                            {/* Quick Contact */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <span className="bg-blue-100 p-2 rounded-full mr-3">🏢</span>
                                    Quick Contact
                                </h3>
                                <div className="space-y-6">
                                    {quickContacts.map((contact, index) => (
                                        <div key={index} className="border-l-4 border-indigo-500 pl-6">
                                            <h4 className="font-semibold text-gray-900 mb-2">{contact.department}</h4>
                                            <div className="space-y-1 text-sm text-gray-600">
                                                <p className="flex items-center">
                                                    <span className="mr-2">📞</span>
                                                    <a href={`tel:${contact.contact}`} className="hover:text-indigo-600 transition-colors">
                                                        {contact.contact}
                                                    </a>
                                                </p>
                                                <p className="flex items-center">
                                                    <span className="mr-2">✉️</span>
                                                    <a href={`mailto:${contact.email}`} className="hover:text-indigo-600 transition-colors">
                                                        {contact.email}
                                                    </a>
                                                </p>
                                                <p className="flex items-center">
                                                    <span className="mr-2">🕒</span>
                                                    {contact.hours}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* School Hours */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <span className="bg-green-100 p-2 rounded-full mr-3">🕒</span>
                                    School Hours
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                        <span className="font-medium text-gray-700">Monday - Friday</span>
                                        <span className="text-gray-600">8:00 AM - 3:30 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                        <span className="font-medium text-gray-700">Saturday</span>
                                        <span className="text-gray-600">9:00 AM - 12:00 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                        <span className="font-medium text-gray-700">Sunday</span>
                                        <span className="text-red-500">Closed</span>
                                    </div>
                                    <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                                        <h4 className="font-semibold text-yellow-800 mb-2">Office Hours</h4>
                                        <p className="text-sm text-yellow-700">
                                            Administrative office is open Monday to Friday, 7:30 AM - 4:00 PM
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <span className="bg-purple-100 p-2 rounded-full mr-3">🗺️</span>
                                    Location
                                </h3>
                                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl aspect-video flex items-center justify-center border-2 border-dashed border-gray-300">
                                    <div className="text-center">
                                        <span className="text-4xl block mb-2">🗺️</span>
                                        <p className="text-gray-600 font-medium">School Location Map</p>
                                        <p className="text-sm text-gray-500">Interactive map will be displayed here</p>
                                    </div>
                                </div>
                                <div className="mt-4 text-center">
                                    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                                        📍 Get Directions
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            ❓ Frequently Asked Questions
                        </h2>
                        <p className="text-xl text-gray-600">
                            Quick answers to common questions
                        </p>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                q: "What are the admission requirements?",
                                a: "We require the child's birth certificate, Aadhar card, vaccination records, and previous school records (if applicable). Age criteria: Nursery (2-3 years), LKG (3-4 years), UKG (4-5 years)."
                            },
                            {
                                q: "Do you provide transportation?",
                                a: "Yes, we provide safe and reliable school bus transportation covering most areas of the city. Transportation fees are separate from tuition fees."
                            },
                            {
                                q: "What is your teacher-to-student ratio?",
                                a: "We maintain a low teacher-to-student ratio of 1:15 to ensure personalized attention for each child."
                            },
                            {
                                q: "Are meals provided at school?",
                                a: "Yes, we provide nutritious, hygienic meals and snacks. We can accommodate special dietary requirements with prior notice."
                            },
                            {
                                q: "Can parents visit the school?",
                                a: "Absolutely! We encourage parents to visit our campus. Please schedule an appointment so we can give you a proper tour and answer all your questions."
                            }
                        ].map((faq, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg p-6">
                                <h4 className="font-semibold text-gray-900 mb-3">{faq.q}</h4>
                                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUsPage;
