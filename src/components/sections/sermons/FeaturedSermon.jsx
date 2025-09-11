import React from 'react';

const FeaturedSermon = ({ sermon, setActiveFilter }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
      <div className="md:flex">
        <div className="md:w-2/3 bg-gray-200 h-96 flex items-center justify-center">
          <span className="text-gray-500">Featured Video Player</span>
        </div>
        <div className="p-8 md:w-1/3">
          <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold mb-1">
            {sermon.series}
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{sermon.title}</h2>
          <p className="text-gray-600 mb-4">{sermon.preacher} • {new Date(sermon.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <p className="text-gray-700 mb-6">{sermon.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {sermon.tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded cursor-pointer"
                onClick={() => setActiveFilter(tag)}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex space-x-4">
            <a 
              href={sermon.videoUrl} 
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Watch
            </a>
            <a 
              href={sermon.audioUrl} 
              className="border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50 transition-colors flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
              Listen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSermon;
