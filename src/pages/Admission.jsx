import { useState } from 'react';

const AdmissionPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        parentMobile: '',
        program: '',
        aadharFile: null
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const programs = [
        { value: 'nursery', label: 'Nursery (2-3 years)' },
        { value: 'lkg', label: 'LKG (3-4 years)' },
        { value: 'ukg', label: 'UKG (4-5 years)' }
    ];

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

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData(prev => ({
            ...prev,
            aadharFile: file
        }));
        if (errors.aadharFile) {
            setErrors(prev => ({
                ...prev,
                aadharFile: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required';
        }

        if (!formData.parentMobile.trim()) {
            newErrors.parentMobile = 'Parent mobile number is required';
        } else if (!/^[6-9]\d{9}$/.test(formData.parentMobile)) {
            newErrors.parentMobile = 'Please enter a valid 10-digit mobile number';
        }

        if (!formData.program) {
            newErrors.program = 'Please select a program';
        }

        if (!formData.aadharFile) {
            newErrors.aadharFile = 'Aadhar card document is required';
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
        
        // Simulate form submission
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            alert('Admission form submitted successfully! We will contact you soon.');
            // Reset form
            setFormData({
                fullName: '',
                parentMobile: '',
                program: '',
                aadharFile: null
            });
            // Reset file input
            document.getElementById('aadharFile').value = '';
        } catch (error) {
            alert('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        🎒 Admission Application
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Start your child's educational journey with us. Fill out the form below to apply for admission.
                    </p>
                </div>

                {/* Admission Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">📋</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 1</h3>
                        <p className="text-gray-600 text-sm">Fill Application Form</p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">📞</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 2</h3>
                        <p className="text-gray-600 text-sm">We'll Contact You</p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                        <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">🏫</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 3</h3>
                        <p className="text-gray-600 text-sm">Visit School & Enroll</p>
                    </div>
                </div>

                {/* Admission Form */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6">
                        <h2 className="text-2xl font-bold text-white">Admission Application Form</h2>
                        <p className="text-indigo-100 mt-2">Please fill all required fields carefully</p>
                    </div>

                    <form onSubmit={handleSubmit} className="p-8 space-y-8">
                        {/* Student Information Section */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                                <span className="bg-indigo-100 p-2 rounded-full mr-3">👶</span>
                                Student Information
                            </h3>

                            {/* Full Name */}
                            <div className="mb-6">
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                                    Student's Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors ${
                                        errors.fullName ? 'border-red-500 bg-red-50' : ''
                                    }`}
                                    placeholder="Enter student's full name"
                                />
                                {errors.fullName && (
                                    <p className="mt-2 text-sm text-red-600 flex items-center">
                                        <span className="mr-1">⚠️</span>
                                        {errors.fullName}
                                    </p>
                                )}
                            </div>

                            {/* Program Selection */}
                            <div className="mb-6">
                                <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-2">
                                    Select Program *
                                </label>
                                <select
                                    id="program"
                                    name="program"
                                    value={formData.program}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors ${
                                        errors.program ? 'border-red-500 bg-red-50' : ''
                                    }`}
                                >
                                    <option value="">Choose a program</option>
                                    {programs.map((program) => (
                                        <option key={program.value} value={program.value}>
                                            {program.label}
                                        </option>
                                    ))}
                                </select>
                                {errors.program && (
                                    <p className="mt-2 text-sm text-red-600 flex items-center">
                                        <span className="mr-1">⚠️</span>
                                        {errors.program}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Parent Information Section */}
                        <div className="border-t border-gray-200 pt-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                                <span className="bg-green-100 p-2 rounded-full mr-3">👨‍👩‍👧‍👦</span>
                                Parent Information
                            </h3>

                            {/* Parent Mobile Number */}
                            <div className="mb-6">
                                <label htmlFor="parentMobile" className="block text-sm font-medium text-gray-700 mb-2">
                                    Parent's Mobile Number *
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="text-gray-500 sm:text-sm">+91</span>
                                    </div>
                                    <input
                                        type="tel"
                                        id="parentMobile"
                                        name="parentMobile"
                                        value={formData.parentMobile}
                                        onChange={handleInputChange}
                                        className={`w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors ${
                                            errors.parentMobile ? 'border-red-500 bg-red-50' : ''
                                        }`}
                                        placeholder="9876543210"
                                        maxLength="10"
                                    />
                                </div>
                                {errors.parentMobile && (
                                    <p className="mt-2 text-sm text-red-600 flex items-center">
                                        <span className="mr-1">⚠️</span>
                                        {errors.parentMobile}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Document Upload Section */}
                        <div className="border-t border-gray-200 pt-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                                <span className="bg-yellow-100 p-2 rounded-full mr-3">📄</span>
                                Required Documents
                            </h3>

                            {/* Aadhar Card Upload */}
                            <div className="mb-6">
                                <label htmlFor="aadharFile" className="block text-sm font-medium text-gray-700 mb-2">
                                    Student's Aadhar Card *
                                </label>
                                <div className={`border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-indigo-400 transition-colors ${
                                    errors.aadharFile ? 'border-red-500 bg-red-50' : ''
                                }`}>
                                    <input
                                        type="file"
                                        id="aadharFile"
                                        name="aadharFile"
                                        onChange={handleFileChange}
                                        accept=".pdf,.jpg,.jpeg,.png"
                                        className="hidden"
                                    />
                                    <label htmlFor="aadharFile" className="cursor-pointer">
                                        <div className="flex flex-col items-center">
                                            <span className="text-4xl mb-2">📎</span>
                                            <span className="text-sm font-medium text-gray-700">
                                                Click to upload Aadhar Card
                                            </span>
                                            <span className="text-xs text-gray-500 mt-1">
                                                PDF, JPG, PNG up to 5MB
                                            </span>
                                        </div>
                                    </label>
                                    {formData.aadharFile && (
                                        <div className="mt-4 p-3 bg-green-50 rounded-lg">
                                            <p className="text-sm text-green-700 flex items-center">
                                                <span className="mr-2">✅</span>
                                                {formData.aadharFile.name}
                                            </p>
                                        </div>
                                    )}
                                </div>
                                {errors.aadharFile && (
                                    <p className="mt-2 text-sm text-red-600 flex items-center">
                                        <span className="mr-1">⚠️</span>
                                        {errors.aadharFile}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="border-t border-gray-200 pt-8">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-300 ${
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
                                            Submitting Application...
                                        </span>
                                    ) : (
                                        '🎒 Submit Application'
                                    )}
                                </button>
                                <button
                                    type="button"
                                    className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300"
                                    onClick={() => {
                                        setFormData({
                                            fullName: '',
                                            parentMobile: '',
                                            program: '',
                                            aadharFile: null
                                        });
                                        setErrors({});
                                        document.getElementById('aadharFile').value = '';
                                    }}
                                >
                                    Clear Form
                                </button>
                            </div>
                        </div>

                        {/* Important Notes */}
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                            <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                                <span className="mr-2">ℹ️</span>
                                Important Information
                            </h4>
                            <ul className="text-sm text-blue-800 space-y-2">
                                <li>• All fields marked with (*) are mandatory</li>
                                <li>• We will contact you within 2-3 working days after submission</li>
                                <li>• Please ensure all documents are clear and readable</li>
                                <li>• Age criteria: Nursery (2-3 years), LKG (3-4 years), UKG (4-5 years)</li>
                                <li>• For any queries, call us at +1 (234) 567-8900</li>
                            </ul>
                        </div>
                    </form>
                </div>

                {/* Contact Information */}
                <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help? 🤝</h3>
                    <p className="text-gray-600 mb-6">
                        Our admission team is here to assist you with any questions about the application process.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a 
                            href="tel:+12345678900" 
                            className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300 flex items-center justify-center"
                        >
                            📞 Call: +1 (234) 567-8900
                        </a>
                        <a 
                            href="mailto:admissions@lles.edu" 
                            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center"
                        >
                            ✉️ Email: admissions@lles.edu
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdmissionPage;
