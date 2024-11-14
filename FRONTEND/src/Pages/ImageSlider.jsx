import React, { useState, useEffect } from 'react';

const Carousel = () => {
    const slides = [
        'https://i.pravatar.cc/400?img=64',
        'https://i.pravatar.cc/400?img=32',
        'https://i.pravatar.cc/400?img=64',
        'https://i.pravatar.cc/400?img=32',
        'https://i.pravatar.cc/400?img=64',
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const autoSlideInterval = 3000; // Auto-slide interval in ms

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, autoSlideInterval);
        return () => clearInterval(interval);
    }, [slides.length]);

    const goToSlide = (index) => setCurrentIndex(index);
    const prevSlide = () => setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
    const nextSlide = () => setCurrentIndex((currentIndex + 1) % slides.length);

    return (
        <div className="relative w-full h-[10vh]" data-carousel="static" >
            {/* Carousel Wrapper */}
            <div className="relative h-[100%] overflow-hidden rounded-lg w-[50vw]">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute transition-opacity duration-1000 h-[100%] ease-in-out top-0 left-0 w-[50vw]  ${
                            index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <img
                            src={slide}
                            className="block w-full h-[100%] object-cover"
                            alt={`Slide ${index + 1}`}
                        />
                    </div>
                ))}
            </div>

            {/* Indicators */}
            <div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 transform -translate-x-1/2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-yellow-500' : 'bg-black'}`}
                        aria-current={index === currentIndex}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => goToSlide(index)}
                    ></button>
                ))}
            </div>

            {/* Controls */}
            <button
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={prevSlide}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
                    <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={nextSlide}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
                    <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};

export default Carousel;