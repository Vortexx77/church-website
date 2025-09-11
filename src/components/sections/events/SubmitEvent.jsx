import React from 'react';

const SubmitEvent = () => {
  return (
    <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Have an event to share?</h2>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        If you'd like to submit an event to be included in our calendar, please fill out our event submission form.
      </p>
      <button className="bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition-colors">
        Submit an Event
      </button>
    </div>
  );
};

export default SubmitEvent;
