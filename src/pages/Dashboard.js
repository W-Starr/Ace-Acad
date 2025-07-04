import React, { useState, useEffect } from 'react';
import {
  Search, RotateCcw, Calendar, BookOpen, Home, Bell, User, Settings, Moon, Sun
} from 'lucide-react';
import useDarkMode from '../hooks/useDarkMode';
import QuoteWidget from '../components/QuoteWidget';
import QuoteSkeleton from '../components/QuoteSkeleton'; // ⬅️ Add this
// Simulate loading
const useLoading = (delay = 1000) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), delay);
    return () => clearTimeout(timeout);
  }, [delay]);
  return isLoading;
};

const StudentDashboard = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const isLoading = useLoading(); // 👈 simulate loading delay

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 w-full max-w-sm mx-auto lg:max-w-4xl xl:max-w-6xl transition-colors duration-200">
      {/* Header */}
      <div className="px-4 py-4 lg:px-8 lg:py-6">
        <div className="flex items-center justify-between mb-4 lg:mb-6">
          <div className="flex items-center space-x-3 lg:space-x-4">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b2e6de2e?w=48&h=48&fit=crop&crop=face"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100 lg:text-lg">Hello, Meerah!</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 lg:text-base">Keep up the great work! 💪</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 lg:p-3 rounded-full bg-white dark:bg-gray-800 border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm"
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-500" />
              ) : (
                <Moon className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
              )}
            </button>
            <div className="bg-white dark:bg-gray-800 rounded-full px-3 py-1 lg:px-4 lg:py-2 text-sm font-medium shadow-sm border dark:border-gray-700 text-gray-900 dark:text-gray-100">
              2/3
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6 lg:mb-8">
          <Search className="absolute left-3 lg:left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 lg:pl-12 pr-4 py-3 lg:py-4 bg-white dark:bg-gray-800 rounded-lg border-none outline-none text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
          />
        </div>
      </div>

      {/* Motivational Quote Widget or Skeleton */}
      <div className="px-4 lg:px-8 mb-6">
        {isLoading ? <QuoteSkeleton /> : <QuoteWidget />}
      </div>

      {/* Dashboard Content */}
      <div className="px-4 pb-24 lg:px-8 lg:pb-8">
        <div className="lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-8 lg:space-y-0 space-y-6">

          {/* Study Guide */}
          <div className="lg:col-span-2 xl:col-span-3">
            <div className="flex justify-between items-center mb-3 lg:mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 lg:text-xl">Study Guide</h2>
              <button className="text-blue-600 dark:text-blue-400 text-sm font-medium lg:text-base">View</button>
            </div>
            {isLoading ? (
              <div className="animate-pulse h-32 bg-blue-100 dark:bg-blue-900/30 rounded-2xl mb-6 lg:mb-8" />
            ) : (
              <div className="bg-blue-100 dark:bg-blue-900/30 rounded-2xl p-4 lg:p-6 mb-6 lg:mb-8">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <BookOpen className="w-5 h-5 text-blue-700 dark:text-blue-400" />
                      <span className="text-sm font-medium text-blue-900 dark:text-blue-300">60% Complete</span>
                      <RotateCcw className="w-4 h-4 text-blue-700 dark:text-blue-400" />
                    </div>
                    <h3 className="font-bold text-blue-900 dark:text-blue-200 text-lg mb-1">
                      MATH244: Methods of Linear Algebra II
                    </h3>
                    <p className="text-blue-800 dark:text-blue-300 text-sm">Keep going! You're doing great!</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Next Class */}
          <div className="lg:col-span-1">
            <div className="flex justify-between items-center mb-3 lg:mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 lg:text-xl">Next Class</h2>
              <button className="text-blue-600 dark:text-blue-400 text-sm font-medium lg:text-base">See All</button>
            </div>
            {isLoading ? (
              <div className="animate-pulse h-28 bg-red-100 dark:bg-red-900/30 rounded-2xl mb-6 lg:mb-8" />
            ) : (
              <div className="bg-red-100 dark:bg-red-900/30 rounded-2xl p-4 lg:p-6 mb-6 lg:mb-8">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="w-5 h-5 text-red-700 dark:text-red-400" />
                      <span className="text-xs bg-white dark:bg-gray-800 text-red-800 dark:text-red-300 px-2 py-1 rounded">
                        Assignments
                      </span>
                      <RotateCcw className="w-4 h-4 text-red-700 dark:text-red-400" />
                    </div>
                    <h3 className="font-bold text-red-900 dark:text-red-200 text-lg mb-1">
                      MATH242: Calculus II
                    </h3>
                    <p className="text-red-800 dark:text-red-300 text-sm">Today, 9:00am</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Assignments */}
          <div className="lg:col-span-1 xl:col-span-2">
            <div className="flex justify-between items-center mb-3 lg:mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 lg:text-xl">Assignments</h2>
              <button className="text-blue-600 dark:text-blue-400 text-sm font-medium lg:text-base">See All</button>
            </div>

            <div className="space-y-4 mb-6 lg:mb-8">
              {isLoading ? (
                <>
                  <div className="animate-pulse h-24 bg-purple-100 dark:bg-purple-900/30 rounded-2xl" />
                  <div className="animate-pulse h-24 bg-red-100 dark:bg-red-900/30 rounded-2xl" />
                </>
              ) : (
                <>
                  <div className="bg-purple-100 dark:bg-purple-900/30 rounded-2xl p-4 lg:p-6">
                    <h3 className="font-bold text-purple-900 dark:text-purple-200">MEEN202: Engineering Drawing</h3>
                    <p className="text-purple-800 dark:text-purple-300 text-sm">Due Tomorrow</p>
                  </div>
                  <div className="bg-red-100 dark:bg-red-900/30 rounded-2xl p-4 lg:p-6">
                    <h3 className="font-bold text-red-900 dark:text-red-200">CHEN202: Management Test</h3>
                    <p className="text-red-800 dark:text-red-300 text-sm">Coming up in 5 days</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation (unchanged) */}
      {/* ... keep your existing nav code here */}
    </div>
  );
};

export default StudentDashboard;
