// src/pages/LibraryApp.jsx 

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, Home, BookOpen, User, MessageCircle, Users, Bell } from 'lucide-react';
import QuoteWidget from '../components/QuoteWidget';
import EmptyState from '../components/EmptyState';
import BookSkeleton from '../components/BookSkeleton';

const LibraryApp = () => {
  const [activeTab, setActiveTab] = useState('Suggested read');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  const books = [
    {
      id: 1,
      title: "Fundamentals of Car Production",
      author: "Turbo A. T. E.",
      progress: 53,
      edition: "First Edition",
      color: "bg-blue-100 dark:bg-blue-900",
      textColor: "text-blue-900 dark:text-blue-100"
    },
    {
      id: 2,
      title: "Electronics",
      author: "Meehan B. Z.",
      progress: 53,
      edition: "First Edition",
      color: "bg-teal-100 dark:bg-teal-800",
      textColor: "text-teal-900 dark:text-teal-100"
    },
    {
      id: 3,
      title: "How to Draw",
      author: "Benjamin G. Y.",
      progress: 10,
      edition: "First Edition",
      color: "bg-red-100 dark:bg-red-800",
      textColor: "text-red-900 dark:text-red-100"
    },
    {
      id: 4,
      title: "Technology",
      author: "Ishigami Senku",
      progress: 99,
      edition: "First Edition",
      color: "bg-teal-600 dark:bg-teal-700",
      textColor: "text-white"
    }
  ];

  const tabs = ['Suggested read', 'Textbooks', 'Handouts'];

  return (
    <div className="w-full max-w-sm mx-auto bg-gray-50 dark:bg-gray-900 min-h-screen md:max-w-4xl lg:max-w-6xl text-gray-900 dark:text-gray-100">
      
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 md:px-8">
        <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
        <h1 className="text-xl font-bold text-gray-900 dark:text-white md:text-2xl">A*-Library</h1>
        <div className="w-10 h-10 bg-blue-200 dark:bg-blue-700 rounded-full flex items-center justify-center">
          <User className="w-6 h-6 text-blue-600 dark:text-blue-100" />
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 mb-6 md:px-8">
        <div className="relative max-w-md mx-auto md:max-w-lg">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-300" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-3 bg-blue-50 dark:bg-gray-800 rounded-lg border-none outline-none text-gray-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>
      </div>

      {/* Quote Widget */}
      <div className="px-4 lg:px-8 mb-6">
        <QuoteWidget />
      </div>

      {/* Tabs */}
      <div className="px-4 mb-6 md:px-8">
        <div className="flex space-x-4 justify-center md:justify-start">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-blue-200 dark:bg-blue-700 text-blue-800 dark:text-white'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Books Section */}
      <div className="px-4 md:px-8">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, idx) => (
              <BookSkeleton key={idx} />
            ))}
          </div>
        ) : books.length === 0 ? (
          <EmptyState
            message="No books available"
            subtext="Try checking again later or search for a different book."
          />
        ) : (
          <div className="space-y-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3 xl:grid-cols-4">
            {books.map((book) => (
              <Link to={`/summary/${book.id}`} key={book.id} state={book}>
                <div className={`${book.color} rounded-xl p-4 relative overflow-hidden md:p-6 hover:shadow-lg transition`}>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <div className={`text-xs font-medium ${book.textColor} opacity-80 mb-1`}>
                        {book.edition}
                      </div>
                      <h3 className={`text-lg font-bold ${book.textColor} leading-tight mb-1 md:text-xl`}>
                        {book.title}
                      </h3>
                      <p className={`text-sm ${book.textColor} opacity-75 mb-3 md:text-base`}>
                        {book.author}
                      </p>
                      <div className="w-full bg-white dark:bg-gray-700 bg-opacity-30 rounded-full h-1.5 mb-2">
                        <div
                          className="bg-white h-1.5 rounded-full transition-all duration-300"
                          style={{ width: `${book.progress}%` }}
                        ></div>
                      </div>
                      <span className={`text-xs ${book.textColor} opacity-75 md:text-sm`}>
                        {book.progress}%
                      </span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <div className={`w-16 h-16 ${book.textColor} opacity-30 text-2xl md:w-20 md:h-20 md:text-3xl`}>
                        {book.id === 1 && '🚗'}
                        {book.id === 2 && '💻'}
                        {book.id === 3 && '🎨'}
                        {book.id === 4 && '🔬'}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 md:max-w-4xl lg:max-w-6xl">
        <div className="flex justify-around py-3 md:justify-center md:space-x-8">
          <button className="flex flex-col items-center space-y-1 md:flex-row md:space-y-0 md:space-x-2">
            <Home className="w-6 h-6 text-gray-700 dark:text-white" />
            <span className="hidden md:block text-sm text-gray-700 dark:text-white">Home</span>
          </button>
          <button className="flex flex-col items-center space-y-1 md:flex-row md:space-y-0 md:space-x-2">
            <BookOpen className="w-6 h-6 text-gray-400 dark:text-gray-300" />
            <span className="hidden md:block text-sm text-gray-400 dark:text-gray-300">Books</span>
          </button>
          <button className="flex flex-col items-center space-y-1 md:flex-row md:space-y-0 md:space-x-2">
            <Users className="w-6 h-6 text-gray-400 dark:text-gray-300" />
            <span className="hidden md:block text-sm text-gray-400 dark:text-gray-300">Community</span>
          </button>
          <button className="flex flex-col items-center space-y-1 md:flex-row md:space-y-0 md:space-x-2">
            <MessageCircle className="w-6 h-6 text-gray-400 dark:text-gray-300" />
            <span className="hidden md:block text-sm text-gray-400 dark:text-gray-300">Messages</span>
          </button>
          <button className="flex flex-col items-center space-y-1 md:flex-row md:space-y-0 md:space-x-2">
            <User className="w-6 h-6 text-red-500" />
            <span className="hidden md:block text-sm text-red-500">Profile</span>
          </button>
          <button className="flex flex-col items-center space-y-1 md:flex-row md:space-y-0 md:space-x-2">
            <Bell className="w-6 h-6 text-gray-400 dark:text-gray-300" />
            <span className="hidden md:block text-sm text-gray-400 dark:text-gray-300">Notifications</span>
          </button>
        </div>
      </div>

      <div className="h-20"></div>
    </div>
  );
};

export default LibraryApp;
