import React, { useState, useEffect } from 'react';
import {
  Search, RotateCcw, Calendar, BookOpen, Sun, Moon
} from 'lucide-react';
import useDarkMode from '../hooks/useDarkMode';
import QuoteWidget from '../components/QuoteWidget';
import QuoteSkeleton from '../components/QuoteSkeleton';
import API from '../api/api'; // ✅ correct


const StudentDashboard = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await API.get("/api/dashboard"); // ✅ Backend call
        setUser(response.data); // assuming it returns { message: 'Welcome, {name}' }
      } catch (error) {
        console.error("Error fetching dashboard:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboard();
  }, []);

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
              <p className="font-semibold text-gray-900 dark:text-gray-100 lg:text-lg">
                {isLoading ? "Loading..." : user?.message || "Hello, Guest!"}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 lg:text-base">
                {isLoading ? "" : "Keep up the great work! 💪"}
              </p>
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

      {/* Quotes */}
      <div className="px-4 lg:px-8 mb-6">
        {isLoading ? <QuoteSkeleton /> : <QuoteWidget />}
      </div>

      {/* Dashboard Content */}
      {/* Keep your study guide, assignments, and classes here (unchanged) */}

    </div>
  );
};

export default StudentDashboard;
