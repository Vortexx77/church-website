import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * WelcomeSection Component
 * This component displays the welcome message from the pastor, including his
 * photo, a brief message, and call-to-action buttons.
 */
const WelcomeSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Image of the pastor */}
          <div className="w-full md:w-1/3 flex-shrink-0">
            <img 
              src="https://placehold.co/400x500/ccc/333?text=Pastor+Jeffrey" 
              alt="Pastor Jeffrey Marsh" 
              className="rounded-lg shadow-lg w-full"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x500/ccc/333?text=Image+Not+Found'; }}
            />
          </div>
          {/* Welcome text content */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">JEFFREY MARSH</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Welcome to Kampala Community Church! We are a family of believers passionate about God's word and His presence. Our doors are always open to people from all backgrounds, regardless of where they are on their spiritual journey. We hope you'll join us for a service to experience our community for yourself.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <button className="bg-[#C9A87C] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#b39164] transition-colors flex items-center space-x-2">
                <span>Our Beliefs</span>
              </button>
              <button className="bg-gray-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-700 transition-colors flex items-center space-x-2">
                <span>Watch a Sermon</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
