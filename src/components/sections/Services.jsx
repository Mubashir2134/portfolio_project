import React, { useState } from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { servicesData } from "../../data/servicesData";
import { useResponsive } from "../../hooks/useResponsive";
import Card from "../ui/Card";
import Section from "../ui/Section";

const ServiceCard = ({ service, index }) => (
  <Card 
    className="p-8 h-full min-h-[400px] group"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div className="flex flex-col h-full">
      <div className="mb-6">
        <img
          src={service.imgUrl}
          alt={service.heading}
          className="w-20 h-20 object-contain mb-4 group-hover:scale-110 transition-transform duration-300"
        />
        <h3 className="text-2xl font-semibold text-white mb-4">
          {service.heading}
        </h3>
      </div>
      
      <div className="space-y-3 flex-1">
        {service.skills.map((skill, skillIndex) => (
          <div
            key={skillIndex}
            className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors duration-300"
          >
            <div className="text-white/60 group-hover:text-white transition-colors duration-300">
              <MdOutlineKeyboardDoubleArrowRight />
            </div>
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  </Card>
);

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { getCardsPerView, isMobile } = useResponsive();
  const cardsPerView = getCardsPerView();
  const totalSlides = Math.ceil(servicesData.length / cardsPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <Section id="services" background="secondary">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Services I <span className="text-gradient">Provide</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Delivering high-quality solutions across multiple domains with expertise and creativity
        </p>
      </div>

      {/* Services Carousel */}
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-out gap-8"
          style={{
            transform: `translateX(-${currentSlide * (100 / cardsPerView)}%)`
          }}
        >
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={`flex-shrink-0 ${
                cardsPerView === 1 ? 'w-full' : 
                cardsPerView === 2 ? 'w-1/2' : 'w-1/3'
              }`}
              style={{ marginRight: cardsPerView === 1 ? 0 : '2rem' }}
            >
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {totalSlides > 1 && !isMobile && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
              aria-label="Previous services"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
              aria-label="Next services"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Pagination Dots */}
      {totalSlides > 1 && (
        <div className="flex justify-center mt-12 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-white scale-125'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </Section>
  );
};

export default Services;