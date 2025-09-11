import React from 'react';

const EventTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex border-b border-gray-200 mb-8">
      <button
        onClick={() => setActiveTab('upcoming')}
        className={`py-4 px-6 font-medium text-sm border-b-2 ${activeTab === 'upcoming' 
          ? 'border-blue-500 text-blue-600' 
          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
      >
        Upcoming Events
      </button>
      <button
        onClick={() => setActiveTab('past')}
        className={`py-4 px-6 font-medium text-sm border-b-2 ${activeTab === 'past' 
          ? 'border-blue-500 text-blue-600' 
          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
      >
        Past Events
      </button>
    </div>
  );
};

export default EventTabs;
