import React from 'react';
import { BookOpen } from 'lucide-react';

export default function EmptyState({ icon: Icon = BookOpen, message = "No items to show", subtext = "", className = "" }) {
  return (
    <div className={`text-center text-gray-500 dark:text-gray-400 py-12 ${className}`}>
      <div className="flex justify-center mb-4">
        <div className="w-14 h-14 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
          <Icon className="w-6 h-6 text-gray-400 dark:text-gray-500" />
        </div>
      </div>
      <p className="text-lg font-semibold">{message}</p>
      {subtext && <p className="text-sm mt-1">{subtext}</p>}
    </div>
  );
}
