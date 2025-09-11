import React from 'react';

const LoadMoreSermons = ({ sermons, filteredSermons, setActiveFilter }) => {
  if (filteredSermons.length > 0) {
    return (
      <div className="mt-12 text-center">
        <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors">
          Load More Sermons
        </button>
      </div>
    )
  } else {
    return (
      <div className="text-center py-12">
        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="mt-2 text-lg font-medium text-gray-900">No sermons found</h3>
        <p className="mt-1 text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
        <div className="mt-6">
          <button 
            onClick={() => setActiveFilter('all')}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Clear filters
          </button>
        </div>
      </div>
    )
  }
};

export default LoadMoreSermons;
