import React from 'react';

const SermonList = ({ sermons, setActiveFilter }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {sermons.map((sermon) => (
        <div key={sermon.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="h-48 bg-gray-200 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gray-500">{sermon.thumbnail} Image</span>
            </div>
            <button className="absolute inset-0 flex items-center justify-center group">
              <div className="w-16 h-16 bg-black bg-opacity-60 rounded-full flex items-center justify-center group-hover:bg-opacity-80 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
            </button>
          </div>
          <div className="p-6">
            <div className="text-xs text-blue-600 font-semibold uppercase tracking-wide mb-1">
              {sermon.series}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{sermon.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{sermon.preacher} • {new Date(sermon.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
            <p className="text-sm text-gray-600 mb-4">{sermon.scripture}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {sermon.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="bg-gray-100 text-gray-800 text-xs px-2.5 py-0.5 rounded cursor-pointer"
                  onClick={() => setActiveFilter(tag)}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex space-x-2">
              <a 
                href={sermon.videoUrl} 
                className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch
              </a>
              <a 
                href={sermon.audioUrl} 
                className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center ml-4"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
                Listen
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SermonList;
