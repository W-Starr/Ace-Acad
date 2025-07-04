import React from 'react';

export default function BookSkeleton() {
  return (
    <div className="bg-gray-200 dark:bg-gray-700 animate-pulse rounded-xl p-4 md:p-6 h-48">
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/3 mb-2"></div>
      <div className="h-5 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2 mb-3"></div>
      <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded w-full mb-1"></div>
      <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded w-[50%]"></div>
    </div>
  );
}
