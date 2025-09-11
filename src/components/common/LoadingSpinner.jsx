import React from 'react';

const LoadingSpinner = ({ size = 'medium' }) => {
  const sizes = {
    small: 'h-6 w-6',
    medium: 'h-12 w-12',
    large: 'h-16 w-16',
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`${sizes[size] || sizes.medium} animate-spin rounded-full border-b-2 border-blue-600`}
      />
    </div>
  );
};

export default LoadingSpinner;
