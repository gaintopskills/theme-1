import React, { useState, useEffect, useRef } from 'react';

export const Carousel = () => {
    const images = [
        "https://images.unsplash.com/photo-1566679056462-2075774c8c07?q=80&w=2675&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1670414701148-16ac8873a150?q=80&w=2648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=2856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMounted, setIsMounted] = useState(false);
    const slideInterval = useRef(null);

    useEffect(() => {
        // Mark component as mounted
        setIsMounted(true);

        // Auto-slide logic
        slideInterval.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => {
            clearInterval(slideInterval.current);
        };
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    if (!isMounted) return null; // Wait until client-side hydration

    return (
        <div className="relative w-full h-screen bg-black flex items-center justify-center">
            <div className="overflow-hidden w-3/4 h-3/4">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-full h-full flex items-center justify-center"
                        >
                            <img
                                src={src}
                                alt={`Slide ${index + 1}`}
                                className="rounded-md object-cover w-full h-full"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 bg-orange-500 hover:bg-red-700 text-white rounded-full w-10 h-10 flex items-center justify-center"
            >
                &#8592;
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 bg-orange-500 hover:bg-red-700 text-white rounded-full w-10 h-10 flex items-center justify-center"
            >
                &#8594;
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${
                            index === currentIndex ? 'bg-orange-500' : 'bg-gray-400'
                        }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
