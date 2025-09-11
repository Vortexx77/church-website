import React, { useState } from 'react';

const SermonFilters = ({ seriesList, preachers, tags, activeFilter, setActiveFilter }) => {
  const [showSeries, setShowSeries] = useState(false);
  const [showPreachers, setShowPreachers] = useState(false);
  const [showTags, setShowTags] = useState(false);

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2 mb-4">
        <button 
          onClick={() => setActiveFilter('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium ${activeFilter === 'all' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          All Sermons
        </button>
        
        <div className="relative inline-block text-left ml-2">
          <button 
            onClick={() => setShowSeries(!showSeries)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${seriesList.includes(activeFilter) ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} flex items-center`}
          >
            Series
            <svg className="ml-2 -mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {showSeries && (
            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
              <div className="py-1">
                {seriesList.map((series, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveFilter(series);
                      setShowSeries(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {series}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="relative inline-block text-left">
          <button 
            onClick={() => setShowPreachers(!showPreachers)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${preachers.includes(activeFilter) ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} flex items-center`}
          >
            Speaker
            <svg className="ml-2 -mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {showPreachers && (
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
              <div className="py-1">
                {preachers.map((preacher, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveFilter(preacher);
                      setShowPreachers(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {preacher}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="relative inline-block text-left">
          <button 
            onClick={() => setShowTags(!showTags)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${tags.includes(activeFilter) ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} flex items-center`}
          >
            Topics
            <svg className="ml-2 -mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {showTags && (
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
              <div className="py-1">
                {tags.map((tag, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveFilter(tag);
                      setShowTags(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {tag.charAt(0).toUpperCase() + tag.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {activeFilter !== 'all' && (
        <div className="flex items-center">
          <span className="text-sm text-gray-600">Filtered by: </span>
          <span className="ml-2 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full flex items-center">
            {activeFilter}
            <button 
              onClick={() => setActiveFilter('all')}
              className="ml-2 text-blue-600 hover:text-blue-800"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
        </div>
      )}
    </div>
  );
};

export default SermonFilters;