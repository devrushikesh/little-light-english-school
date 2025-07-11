import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const GalleryPage = () => {
    const { category } = useParams();
    const navigate = useNavigate();
    const [galleryData, setGalleryData] = useState({});
    const [currentCategory, setCurrentCategory] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [videoThumbnails, setVideoThumbnails] = useState({});

    // Gallery categories configuration
    const categories = {
        'events': { 
            name: 'Events', 
            icon: '🎉',
            description: 'Special events and celebrations at our school'
        },
        'classrooms': { 
            name: 'Classrooms', 
            icon: '🏫',
            description: 'Our bright and colorful learning spaces'
        },
        'sports': { 
            name: 'Sports', 
            icon: '⚽',
            description: 'Physical activities and sports events'
        },
        'fun-activities': { 
            name: 'Fun Activities', 
            icon: '🎨',
            description: 'Creative and recreational activities'
        },
        'celebrations': { 
            name: 'Celebrations', 
            icon: '🎊',
            description: 'Festival celebrations and special occasions'
        }
    };

    // Default category if none provided or invalid
    const defaultCategory = 'fun-activities';

    useEffect(() => {
        // Determine the current category
        const validCategory = category && categories[category] ? category : defaultCategory;
        setCurrentCategory(validCategory);
        
        // If URL category is invalid, redirect to default
        if (category && !categories[category]) {
            navigate(`/gallery/${defaultCategory}`, { replace: true });
            return;
        }
        
        fetchGalleryData();
    }, [category, navigate]);

    // Effect to preload video thumbnails
    useEffect(() => {
        const images = getCurrentCategoryImages();
        const videoUrls = images.filter(url => isVideoUrl(url));
        
        // Preload thumbnails for first 3 videos to improve UX
        videoUrls.slice(0, 3).forEach(videoUrl => {
            if (!videoThumbnails[videoUrl]) {
                getVideoThumbnail(videoUrl);
            }
        });
    }, [galleryData, currentCategory]);

    // Effect for keyboard navigation in lightbox
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (!selectedImage) return;
            
            switch (e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowLeft':
                    navigateImage('prev');
                    break;
                case 'ArrowRight':
                    navigateImage('next');
                    break;
            }
        };

        if (selectedImage) {
            document.addEventListener('keydown', handleKeyPress);
            // Prevent body scroll when lightbox is open
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
            document.body.style.overflow = 'unset';
        };
    }, [selectedImage]);

    const fetchGalleryData = async () => {
        setLoading(true);
        setError(null);
        
        try {
            // Fetch gallery.json from AWS S3
            const response = await fetch('https://lles-galary-section-s3.s3.ap-south-1.amazonaws.com/gallery.json');
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            console.log('Fetched gallery data:', data); // Debug log
            setGalleryData(data);
        } catch (err) {
            console.error('Error fetching gallery data:', err);
            setError('Failed to load gallery images. Please try again later.');
            // Fallback data in case of error - match the JSON structure
        } finally {
            setLoading(false);
        }
    };

    const getCurrentCategoryImages = () => {
        const validCategory = currentCategory || defaultCategory;
        
        // Map our URL categories to the JSON keys
        const categoryKeyMap = {
            'events': 'Events',
            'classrooms': 'Classrooms', 
            'sports': 'Sports',
            'fun-activities': 'Fun Activities',
            'celebrations': 'Celebrations'
        };
        
        const jsonKey = categoryKeyMap[validCategory] || categoryKeyMap[defaultCategory];
        const categoryData = galleryData[jsonKey] || [];
        
        console.log('Current category:', validCategory);
        console.log('JSON key:', jsonKey);
        console.log('Category data:', categoryData);
        console.log('Available keys in galleryData:', Object.keys(galleryData));
        
        // Handle both array of URLs and array of objects
        if (Array.isArray(categoryData)) {
            return categoryData.map(item => {
                // If it's a string, return as is
                if (typeof item === 'string') {
                    return item;
                }
                // If it's an object, extract the URL
                if (typeof item === 'object' && item !== null) {
                    return item.url || item.src || item.link || '';
                }
                return '';
            }).filter(url => url); // Filter out empty URLs
        }
        
        return [];
    };

    const handleCategoryChange = (newCategory) => {
        navigate(`/gallery/${newCategory}`);
    };

    const openLightbox = (imageUrl, index) => {
        setSelectedImage({ url: imageUrl, index });
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const navigateImage = (direction) => {
        if (!selectedImage) return;
        
        const images = getCurrentCategoryImages();
        const currentIndex = selectedImage.index;
        let newIndex;
        
        if (direction === 'next') {
            newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
        } else {
            newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
        }
        
        setSelectedImage({ url: images[newIndex], index: newIndex });
    };

    // Function to generate video thumbnail
    const generateVideoThumbnail = (videoUrl) => {
        return new Promise((resolve) => {
            const video = document.createElement('video');
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            video.crossOrigin = 'anonymous';
            video.muted = true;
            video.playsInline = true;
            video.preload = 'metadata';
            
            video.onloadedmetadata = () => {
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                
                // Seek to 3 seconds or 25% of video duration for better thumbnail
                const seekTime = Math.min(3, video.duration * 0.25);
                video.currentTime = seekTime;
            };
            
            video.onseeked = () => {
                try {
                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                    canvas.toBlob((blob) => {
                        if (blob) {
                            const thumbnailUrl = URL.createObjectURL(blob);
                            resolve(thumbnailUrl);
                        } else {
                            resolve(null);
                        }
                    }, 'image/jpeg', 0.8);
                } catch (error) {
                    console.error('Error generating thumbnail:', error);
                    resolve(null);
                }
            };
            
            video.onerror = () => {
                console.error('Video load error for:', videoUrl);
                resolve(null);
            };
            
            video.src = videoUrl;
            video.load();
        });
    };

    // Function to get or generate video thumbnail
    const getVideoThumbnail = async (videoUrl) => {
        // Check if thumbnail already exists
        if (videoThumbnails[videoUrl]) {
            return videoThumbnails[videoUrl];
        }
        
        // Generate new thumbnail
        const thumbnail = await generateVideoThumbnail(videoUrl);
        if (thumbnail) {
            setVideoThumbnails(prev => ({
                ...prev,
                [videoUrl]: thumbnail
            }));
        }
        return thumbnail;
    };

    // Function to check if URL is a video
    const isVideoUrl = (url) => {
        const videoExtensions = ['.mp4', '.mov', '.avi', '.webm', '.mkv', '.m4v'];
        return videoExtensions.some(ext => url.toLowerCase().includes(ext));
    };

    // Function to handle video thumbnail loading
    const handleVideoClick = async (videoUrl, index, e) => {
        e.preventDefault();
        e.stopPropagation();
        
        // Generate thumbnail if not exists
        if (!videoThumbnails[videoUrl]) {
            const thumbnail = await getVideoThumbnail(videoUrl);
            console.log('Generated thumbnail for:', videoUrl, thumbnail);
        }
        
        openLightbox(videoUrl, index);
    };

    const currentCategoryInfo = categories[currentCategory] || categories[defaultCategory];
    const images = getCurrentCategoryImages();

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            {/* Header Section */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            <span className="mr-3">{currentCategoryInfo.icon}</span>
                            Gallery - {currentCategoryInfo.name}
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            {currentCategoryInfo.description}
                        </p>
                    </div>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {Object.entries(categories).map(([categoryKey, categoryInfo]) => (
                            <button
                                key={categoryKey}
                                onClick={() => handleCategoryChange(categoryKey)}
                                className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                                    currentCategory === categoryKey
                                        ? 'bg-indigo-600 text-white shadow-lg scale-105'
                                        : 'bg-white text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 shadow-md hover:shadow-lg'
                                }`}
                            >
                                <span className="mr-2">{categoryInfo.icon}</span>
                                {categoryInfo.name}
                            </button>
                        ))}
                    </div>

                    {/* Loading State */}
                    {loading && (
                        <div className="text-center py-16">
                            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
                            <p className="mt-4 text-gray-600">Loading gallery images...</p>
                        </div>
                    )}

                    {/* Error State */}
                    {error && (
                        <div className="text-center py-16">
                            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
                                <span className="text-4xl block mb-4">❌</span>
                                <p className="text-red-800 font-semibold mb-2">Oops! Something went wrong</p>
                                <p className="text-red-600 mb-4">{error}</p>
                                <button
                                    onClick={fetchGalleryData}
                                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                                >
                                    Try Again
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Gallery Grid */}
                    {!loading && !error && (
                        <>
                            {images.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                    {images.map((imageUrl, index) => (
                                        <div
                                            key={index}
                                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                                            onClick={() => isVideoUrl(imageUrl) ? handleVideoClick(imageUrl, index, event) : openLightbox(imageUrl, index)}
                                        >
                                            <div className="aspect-square overflow-hidden relative">
                                                {isVideoUrl(imageUrl) ? (
                                                    <>
                                                        {/* Video Thumbnail */}
                                                        {videoThumbnails[imageUrl] ? (
                                                            <img
                                                                src={videoThumbnails[imageUrl]}
                                                                alt={`${currentCategoryInfo.name} video ${index + 1}`}
                                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                                loading="lazy"
                                                            />
                                                        ) : (
                                                            <div 
                                                                className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center"
                                                                onMouseEnter={() => getVideoThumbnail(imageUrl)}
                                                            >
                                                                <div className="text-center">
                                                                    <svg className="w-16 h-16 text-gray-600 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                                                                        <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"/>
                                                                    </svg>
                                                                    <p className="text-xs text-gray-600">Loading...</p>
                                                                </div>
                                                            </div>
                                                        )}
                                                        
                                                        {/* Video Play Icon Overlay */}
                                                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300">
                                                            <div className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-4 shadow-lg transform group-hover:scale-110 transition-all duration-300">
                                                                <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                                                                    <path d="M8 5v14l11-7z"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        {/* Video Duration Badge */}
                                                        <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                                                            VIDEO
                                                        </div>
                                                    </>
                                                ) : (
                                                    <img
                                                        src={imageUrl}
                                                        alt={`${currentCategoryInfo.name} image ${index + 1}`}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                        loading="lazy"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-16">
                                    <span className="text-6xl block mb-4">📷</span>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        No media yet
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        We're working on adding more photos and videos to this category. Check back soon!
                                    </p>
                                    <button
                                        onClick={() => handleCategoryChange('fun-activities')}
                                        className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors"
                                    >
                                        Browse Other Categories
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>

            {/* Media Stats */}
            {!loading && !error && images.length > 0 && (
                <section className="py-8 px-4 bg-white">
                    <div className="max-w-7xl mx-auto text-center">
                        <p className="text-gray-600">
                            Showing <span className="font-semibold text-indigo-600">{images.length}</span> media files 
                            in <span className="font-semibold text-indigo-600">{currentCategoryInfo.name}</span> category
                        </p>
                    </div>
                </section>
            )}

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
                    <div className="relative w-full h-full max-w-6xl max-h-full flex items-center justify-center">
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-6 right-6 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-300 z-20 backdrop-blur-sm border border-white border-opacity-20"
                            title="Close (ESC)"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Navigation Buttons */}
                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={() => navigateImage('prev')}
                                    className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-4 rounded-full transition-all duration-300 z-20 backdrop-blur-sm border border-white border-opacity-20"
                                    title="Previous (←)"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => navigateImage('next')}
                                    className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-4 rounded-full transition-all duration-300 z-20 backdrop-blur-sm border border-white border-opacity-20"
                                    title="Next (→)"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </>
                        )}

                        {/* Media Container */}
                        <div className="relative w-full h-full flex items-center justify-center p-16">
                            {isVideoUrl(selectedImage.url) ? (
                                <video
                                    src={selectedImage.url}
                                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                                    controls
                                    autoPlay
                                    preload="metadata"
                                    playsInline
                                    style={{ 
                                        backgroundColor: '#1a1a1a',
                                        minHeight: '300px',
                                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)'
                                    }}
                                />
                            ) : (
                                <img
                                    src={selectedImage.url}
                                    alt={`Gallery image`}
                                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                                    style={{
                                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)'
                                    }}
                                />
                            )}
                        </div>

                        {/* Image Counter & Info Bar */}
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white px-6 py-3 rounded-full backdrop-blur-md border border-white border-opacity-20">
                            <div className="flex items-center space-x-4 text-sm">
                                {images.length > 1 && (
                                    <span className="font-medium">
                                        {selectedImage.index + 1} of {images.length}
                                    </span>
                                )}
                                <span className="text-gray-300">•</span>
                                <span className="capitalize">
                                    {isVideoUrl(selectedImage.url) ? (
                                        <span className="flex items-center">
                                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z"/>
                                            </svg>
                                            Video
                                        </span>
                                    ) : (
                                        <span className="flex items-center">
                                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                                            </svg>
                                            Image
                                        </span>
                                    )}
                                </span>
                                <span className="text-gray-300">•</span>
                                <span className="text-gray-300">{currentCategoryInfo.name}</span>
                            </div>
                        </div>

                        {/* Loading indicator for images */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="bg-black bg-opacity-60 text-white px-4 py-2 rounded-lg opacity-0 animate-pulse">
                                Loading...
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GalleryPage;