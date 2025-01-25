import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BannerItem {
  id: number;
  imageUrl: string;
  title: string;
  link: string;
  bgColor: string;
}

const bannerData: BannerItem[] = [
  {
    id: 1,
    imageUrl: "https://res.cloudinary.com/dlfgy3dfq/image/upload/v1737655824/calenders_vdm26a.webp",
    title: "Calendars & Diaries",
    link: "/new-arrivals",
    bgColor: "bg-gradient-to-r from-white via-green-500/30 to-red-500/10"
  },
  {
    id: 2,
    imageUrl: "https://res.cloudinary.com/dlfgy3dfq/image/upload/v1737655856/apperial_jqgfx3.webp",
    title: "Apparel",
    link: "/deals",
    bgColor: "bg-gradient-to-r from-white via-green-500/30 to-red-500/10"
  },
  {
    id: 3,
    imageUrl: "https://res.cloudinary.com/dlfgy3dfq/image/upload/v1737655881/gift_vsonuz.webp",
    title: "Gifts",
    link: "/electronics",
    bgColor: "bg-gradient-to-r from-white via-green-500/30 to-red-500/10"
  },
  {
    id: 4,
    imageUrl: "https://res.cloudinary.com/dlfgy3dfq/image/upload/v1737655943/photo-gifts_s3wquq.webp",
    title: "Photo Gifts",
    link: "/electronics",
    bgColor: "bg-gradient-to-r from-white via-green-500/30 to-red-500/10"
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const extendedBannerData = [
    { ...bannerData[bannerData.length - 1], id: 0 },
    ...bannerData,
    { ...bannerData[0], id: bannerData.length + 1 }
  ];

  const handleSlideChange = useCallback((newSlide: number) => {
    setIsTransitioning(true);
    setCurrentSlide(newSlide);
  }, []);

  const resetToRealSlide = () => {
    setIsTransitioning(false);
    if (currentSlide === 0) {
      setCurrentSlide(bannerData.length);
    } else if (currentSlide === bannerData.length + 1) {
      setCurrentSlide(1);
    }
  };

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      handleSlideChange(currentSlide + 1);
    }
  }, [currentSlide, isTransitioning, handleSlideChange]);

  const prevSlide = useCallback(() => {
    if (!isTransitioning) {
      handleSlideChange(currentSlide - 1);
    }
  }, [currentSlide, isTransitioning, handleSlideChange]);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(nextSlide, 5000);
      return () => clearInterval(timer);
    }
  }, [isPaused, nextSlide]);

  const getRealIndex = (index: number) => {
    if (index === 0) return bannerData.length - 1;
    if (index === bannerData.length + 1) return 0;
    return index - 1;
  };

  return (
    <section 
      className="relative w-full overflow-hidden bg-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Featured promotions carousel"
    >
      {/* Aspect ratio container - 2:1 ratio (50%) */}
      <div className="relative w-full" style={{ paddingBottom: "50%" }}> 
        <div 
          ref={containerRef}
          className="absolute top-0 left-0 w-full h-full flex transition-transform duration-500 ease-out will-change-transform"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: isTransitioning ? 'transform 0.5s ease-out' : 'none',
          }}
          onTransitionEnd={resetToRealSlide}
        >
          {extendedBannerData.map((banner) => (
            <div
              key={banner.id}
              className={cn(
                "w-full h-full flex-shrink-0",
                banner.bgColor
              )}
            >
              <Link 
                href={banner.link}
                className="block relative w-full h-full focus:outline-none focus:ring-2 focus:ring-green-500"
                aria-label={`View ${banner.title}`}
              >
                <div className="absolute inset-0">
                  <Image
                    src={banner.imageUrl}
                    alt={banner.title}
                    fill
                    priority={currentSlide === banner.id}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    quality={90}
                  />
                  <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                      <button className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-white">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
          <button
            onClick={prevSlide}
            className="pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full bg-green-500/90 text-white shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50"
            disabled={isTransitioning}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full bg-green-500/90 text-white shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50"
            disabled={isTransitioning}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          {bannerData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index + 1)}
              className={cn(
                "w-12 h-1.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2",
                getRealIndex(currentSlide) === index 
                  ? "bg-green-600 scale-100" 
                  : "bg-white/70 scale-90 hover:scale-95"
              )}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={getRealIndex(currentSlide) === index ? "true" : "false"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;