import React from 'react';

export default function QuoteSkeleton() {
  return (
    <div className="bg-[#0C1639] text-white rounded-xl p-4 shadow-md space-y-3 max-w-xl mx-auto animate-pulse">
      <div className="flex items-center justify-between">
        <div className="w-32 h-8 bg-[#14214D] rounded-md" />
        <div className="w-20 h-6 bg-blue-800 rounded-md" />
      </div>
      <div className="w-full h-6 bg-white bg-opacity-20 rounded-md" />
      <div className="w-3/4 h-6 bg-white bg-opacity-10 rounded-md" />
    </div>
  );
}
