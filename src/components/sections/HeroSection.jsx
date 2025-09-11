import React from 'react';

/**
 * HeroSection Component
 * This is the main visual introduction on the homepage. It includes the large
 * background image, a welcoming message, and three prominent info boxes.
 */
const HeroSection = () => {
  return (
    <section 
      className="relative bg-cover bg-center h-[80vh] md:h-[90vh] text-white flex items-center justify-center"
      style={{ backgroundImage: "url('https://placehold.co/1920x1080/444/fff?text=Church+Worship')" }}
    >
      {/* Dark overlay with gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
      
      {/* Main content of the hero section */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-wider uppercase text-white drop-shadow-lg">
          We Welcome You.
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-gray-100 font-medium leading-relaxed">
          Join us this Sunday for a powerful time of worship and fellowship.
        </p>
        <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300 uppercase text-sm tracking-widest">
          Plan Your Visit
        </button>
      </div>
      
      {/* Container for the info boxes that overlap the bottom of the hero section */}
      <div className="absolute -bottom-20 md:-bottom-16 left-1/2 -translate-x-1/2 w-[90%] md:w-full max-w-4xl z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 shadow-lg rounded-lg overflow-hidden">
          <InfoBox 
            icon={<MapPinIcon />}
            title="New? Start Here!"
            description="Find service times, directions, and what to expect."
          />
          <InfoBox 
            icon={<VideoIcon />}
            title="Livestream Service"
            description="Watch our services live every Sunday morning."
            isFeatured={true}
          />
          <InfoBox 
            icon={<GiftIcon />}
            title="Support by Giving"
            description="Your generosity helps us spread the message."
          />
        </div>
      </div>
    </section>
  );
};

/**
 * InfoBox Component
 * A reusable component for the three informational boxes in the HeroSection.
 */
const InfoBox = ({ icon, title, description, isFeatured = false }) => {
  const bgColor = isFeatured ? 'bg-white' : 'bg-[#F5F5F5]';
  const textColor = isFeatured ? 'text-gray-800' : 'text-gray-700';
  const titleColor = isFeatured ? 'text-[#C9A87C]' : 'text-gray-800';

  return (
    <div className={`${bgColor} ${textColor} p-6 text-center flex flex-col items-center`}>
      <div className="mb-3">{icon}</div>
      <h3 className={`text-lg font-bold mb-2 ${titleColor}`}>{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

// Custom SVG Icons used in the InfoBox component.
const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-[#C9A87C]">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const VideoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-[#C9A87C]">
    <polygon points="23 7 16 12 23 17 23 7" />
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
  </svg>
);

const GiftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-[#C9A87C]">
    <polyline points="20 12 20 22 4 22 4 12" />
    <rect x="2" y="7" width="20" height="5" />
    <line x1="12" y1="22" x2="12" y2="7" />
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
  </svg>
);

export default HeroSection;
