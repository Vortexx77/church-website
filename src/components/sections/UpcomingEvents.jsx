import React from 'react';

/**
 * UpcomingEventsSection Component
 * This component displays a list of upcoming events in a card format.
 */
const UpcomingEventsSection = () => {
  // Sample data for events. In a real application, this would come from an API.
  const events = [
    {
      title: "Women's Conference",
      image: 'https://placehold.co/600x400/a7a7a7/fff?text=Womens+Conf',
      link: '#',
    },
    {
      title: "Men's Conference",
      image: 'https://placehold.co/600x400/a7a7a7/fff?text=Mens+Conf',
      link: '#',
    },
    {
      title: 'Vacation Bible School',
      image: 'https://placehold.co/600x400/a7a7a7/fff?text=VBS',
      link: '#',
    },
  ];

  return (
    <section className="bg-[#F5F5F5] py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">UPCOMING EVENTS</h2>
        {/* Decorative underline */}
        <div className="w-24 h-1 bg-[#C9A87C] mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} title={event.title} image={event.image} link={event.link} />
          ))}
        </div>
        
        <div className="mt-12">
          <button className="bg-gray-800 text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-700 transition-colors">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};

/**
 * EventCard Component
 * A reusable card for displaying a single event.
 */
const EventCard = ({ title, image, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/ccc/333?text=Image+Not+Found'; }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
        <a href={link} className="text-[#C9A87C] font-semibold hover:underline">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default UpcomingEventsSection;
