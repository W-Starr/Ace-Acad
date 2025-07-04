// src/components/QuizSkeleton.js
import React from 'react';

const QuizSkeleton = () => {
  return (
    <div className="animate-pulse max-w-4xl mx-auto px-4 py-6">
      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-300 dark:bg-gray-700 rounded-full mb-6" />

      {/* Question Numbers */}
      <div className="flex items-center justify-center gap-2 mb-8">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700" />
        ))}
      </div>

      {/* Question */}
      <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-6" />

      {/* Answer Options */}
      <div className="space-y-4 mb-12">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="w-full h-14 rounded-lg bg-gray-300 dark:bg-gray-700" />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between gap-4">
        <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-700" />
        <div className="flex-1 max-w-xs h-12 rounded-lg bg-gray-300 dark:bg-gray-700" />
        <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-700" />
      </div>
    </div>
  );
};

export default QuizSkeleton;
