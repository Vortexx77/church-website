import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';

const Carousel = ({ slides, autoPlay = true, autoPlayInterval = 5000, className = '' }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const slideRef = useRef(null);
    const intervalRef = useRef(null);

    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        if (isTransitioning || index === currentSlide) return;
        setIsTransitioning(true);
        setCurrentSlide(index);
    };

    // Auto-play functionality
    useEffect(() => {
        if (autoPlay) {
            intervalRef.current = setInterval(nextSlide, autoPlayInterval);
            return () => clearInterval(intervalRef.current);
        }
    }, [autoPlay, autoPlayInterval]);

    // Pause auto-play on hover
    const handleMouseEnter = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    const handleMouseLeave = () => {
        if (autoPlay) {
            intervalRef.current = setInterval(nextSlide, autoPlayInterval);
        }
    };

    // GSAP animation for slide transitions
    useEffect(() => {
        if (slideRef.current) {
            gsap.fromTo(
                slideRef.current,
                { opacity: 0, scale: 1.05 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    ease: 'power2.out',
                    onComplete: () => setIsTransitioning(false),
                }
            );
        }
    }, [currentSlide]);

    return (
        <div
            className={`relative w-full h-full overflow-hidden ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Slide Container */}
            <div className="relative w-full h-full">
                <div
                    ref={slideRef}
                    className="absolute inset-0 w-full h-full"
                    key={currentSlide}
                >
                    {slides[currentSlide]?.image && (
                        <img
                            src={slides[currentSlide].image}
                            alt={slides[currentSlide].title || `Slide ${currentSlide + 1}`}
                            className="w-full h-full object-cover"
                        />
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

                    {/* Content Overlay */}
                    {(slides[currentSlide]?.title || slides[currentSlide]?.subtitle) && (
                        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                            <div className="container mx-auto px-4 max-w-4xl">
                                {slides[currentSlide]?.title && (
                                    <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-wide uppercase">
                                        {slides[currentSlide].title}
                                    </h2>
                                )}
                                {slides[currentSlide]?.subtitle && (
                                    <p className="text-lg sm:text-xl md:text-2xl font-light opacity-90 max-w-2xl mx-auto">
                                        {slides[currentSlide].subtitle}
                                    </p>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                disabled={isTransitioning}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button
                onClick={nextSlide}
                disabled={isTransitioning}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        disabled={isTransitioning}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                ? 'bg-[#C9A87C] scale-125'
                                : 'bg-white/50 hover:bg-white/70'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
                <div
                    className="h-full bg-[#C9A87C] transition-all duration-300 ease-linear"
                    style={{
                        width: `${((currentSlide + 1) / slides.length) * 100}%`,
                    }}
                />
            </div>
        </div>
    );
};

export default Carousel;