// src/components/LearningSkeleton.js
import React from 'react';

const LearningSkeleton = () => {
  return (
    <div className="animate-pulse space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700"></div>
          <div>
            <div className="w-24 h-4 bg-gray-300 dark:bg-gray-700 mb-1 rounded"></div>
            <div className="w-16 h-3 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>
        </div>
        <div className="w-10 h-10 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
      </div>

      {/* Quote Placeholder */}
      <div className="w-full h-20 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>

      {/* Quest Items */}
      <div className="flex space-x-3 overflow-x-auto">
        {Array.from({ length: 5 }).map((_, idx) => (
          <div key={idx} className="flex-shrink-0 space-y-2 text-center">
            <div className="w-16 h-16 bg-gray-300 dark:bg-gray-700 rounded-2xl"></div>
            <div className="w-12 h-3 bg-gray-300 dark:bg-gray-700 mx-auto rounded"></div>
          </div>
        ))}
      </div>

      {/* Lesson Card */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow space-y-4">
        <div className="w-3/4 h-5 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="w-1/2 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>

        <div className="flex space-x-3 mt-4">
          <div className="flex-1 h-12 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
          <div className="w-36 h-12 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
        </div>

        <div className="space-y-3 mt-4">
          {Array.from({ length: 2 }).map((_, idx) => (
            <div key={idx} className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-700"></div>
              <div className="flex-1 space-y-2">
                <div className="w-3/4 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="w-full h-3 bg-gray-300 dark:bg-gray-700 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningSkeleton;
