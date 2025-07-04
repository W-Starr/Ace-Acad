// src/components/QuizSkeleton.js
import React from 'react';

export default function QuizSkeleton({ count = 2 }) {
  return (
    <div className="space-y-4 mb-8">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 animate-pulse"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-300 dark:bg-gray-700 rounded-lg" />
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/3" />
              <div className="flex gap-4">
                <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/4" />
                <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/4" />
              </div>
            </div>
            <div className="w-6 h-6 bg-yellow-200 dark:bg-yellow-600 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
}
