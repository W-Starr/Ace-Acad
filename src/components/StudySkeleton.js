// src/components/StudySkeleton.js
import React from 'react';

const StudySkeleton = () => {
  return (
    <div className="animate-pulse px-4 py-6 md:px-8 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="h-6 w-1/2 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-4 w-1/3 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>

      {/* Search bar */}
      <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>

      {/* Quote box */}
      <div className="h-24 bg-gray-200 dark:bg-gray-800 rounded-xl"></div>

      {/* Progress stats */}
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center space-y-2">
            <div className="w-16 h-16 bg-gray-300 dark:bg-gray-700 rounded-2xl"></div>
            <div className="h-3 w-10 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>
        ))}
      </div>

      {/* Filter Tabs */}
      <div className="flex space-x-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-8 w-20 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
        ))}
      </div>

      {/* Grid of study items */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="bg-gray-200 dark:bg-gray-800 p-6 rounded-2xl space-y-4">
            <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="h-3 w-full bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="h-3 w-5/6 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="flex space-x-3 mt-4">
              <div className="w-20 h-8 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudySkeleton;
