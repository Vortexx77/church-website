import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-9xl font-bold text-blue-600">404</h1>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Page not found
          </h2>
          <p className="mt-2 text-gray-600">
            Sorry, we couldn't find the page you're looking for.
          </p>
        </div>
        
        <div className="mt-8">
          <Link
            to="/"
            className="w-full flex justify-center items-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-3 md:text-lg md:px-6 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Go back home
          </Link>
          
          <p className="mt-4 text-sm text-gray-500">
            Or try one of these pages:
          </p>
          
          <div className="mt-3 grid grid-cols-2 gap-3">
            {[
              { name: 'About', path: '/about' },
              { name: 'Ministries', path: '/ministries' },
              { name: 'Events', path: '/events' },
              { name: 'Sermons', path: '/sermons' },
              { name: 'Contact', path: '/contact', colSpan: 'col-span-2' }
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${item.colSpan || ''} px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 transition-colors duration-200`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500">
            Still can't find what you're looking for?{' '}
            <Link to="/contact" className="font-medium text-blue-600 hover:text-blue-500">
              Contact us
            </Link>{' '}
            and we'll help you out.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
