import React, { useState } from 'react';
import { Search, Menu, Home, BookOpen, User, MessageCircle, Users, Bell } from 'lucide-react';

const LibraryApp = () => {
  const [activeTab, setActiveTab] = useState('Suggested read');

  const books = [
    {
      id: 1,
      title: "Fundamentals of Car Production",
      author: "Turbo A. T. E.",
      progress: 53,
      edition: "First Edition",
      color: "bg-blue-100",
      textColor: "text-blue-900"
    },
    {
      id: 2,
      title: "Electronics",
      author: "Meehan B. Z.",
      progress: 53,
      edition: "First Edition",
      color: "bg-teal-100",
      textColor: "text-teal-900"
    },
    {
      id: 3,
      title: "How to Draw",
      author: "Benjamin G. Y.",
      progress: 10,
      edition: "First Edition",
      color: "bg-red-100",
      textColor: "text-red-900"
    },
    {
      id: 4,
      title: "Technology",
      author: "Ishigami Senku",
      progress: 99,
      edition: "First Edition",
      color: "bg-teal-600",
      textColor: "text-white"
    }
  ];

  const tabs = ['Suggested read', 'Textbooks', 'Handouts'];

  return (
    <div className="w-full max-w-sm mx-auto bg-gray-50 min-h-screen md:max-w-4xl lg:max-w-6xl">


      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 md:px-8">
        <Menu className="w-6 h-6 text-gray-700" />
        <h1 className="text-xl font-bold text-gray-900 md:text-2xl">A*-Library</h1>
        <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
          <User className="w-6 h-6 text-blue-600" />
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 mb-6 md:px-8">
        <div className="relative max-w-md mx-auto md:max-w-lg">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-3 bg-blue-50 rounded-lg border-none outline-none text-gray-700 placeholder-gray-500"
          />
        </div>
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
                  ? 'bg-blue-200 text-blue-800'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Books Grid */}
      <div className="px-4 space-y-4 md:px-8 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((book) => (
          <div
            key={book.id}
            className={`${book.color} rounded-xl p-4 relative overflow-hidden md:p-6`}
          >
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
                
                {/* Progress Bar */}
                <div className="w-full bg-white bg-opacity-30 rounded-full h-1.5 mb-2">
                  <div
                    className="bg-white h-1.5 rounded-full transition-all duration-300"
                    style={{ width: `${book.progress}%` }}
                  ></div>
                </div>
                <span className={`text-xs ${book.textColor} opacity-75 md:text-sm`}>
                  {book.progress}%
                </span>
              </div>
              
              {/* Book Icon/Illustration */}
              <div className="ml-4 flex-shrink-0">
                {book.id === 1 && (
                  <div className={`w-16 h-16 ${book.textColor} opacity-30 md:w-20 md:h-20`}>
                    🚗
                  </div>
                )}
                {book.id === 2 && (
                  <div className={`w-16 h-16 ${book.textColor} opacity-30 text-2xl md:w-20 md:h-20 md:text-3xl`}>
                    💻
                  </div>
                )}
                {book.id === 3 && (
                  <div className={`w-16 h-16 ${book.textColor} opacity-30 text-2xl md:w-20 md:h-20 md:text-3xl`}>
                    🎨
                  </div>
                )}
                {book.id === 4 && (
                  <div className={`w-16 h-16 ${book.textColor} opacity-30 text-2xl md:w-20 md:h-20 md:text-3xl`}>
                    🔬
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-white border-t border-gray-200 md:max-w-4xl lg:max-w-6xl">
        <div className="flex justify-around py-3 md:justify-center md:space-x-8">
          <button className="flex flex-col items-center space-y-1 md:flex-row md:space-y-0 md:space-x-2">
            <Home className="w-6 h-6 text-gray-700" />
            <span className="hidden md:block text-sm text-gray-700">Home</span>
          </button>
          <button className="flex flex-col items-center space-y-1 md:flex-row md:space-y-0 md:space-x-2">
            <BookOpen className="w-6 h-6 text-gray-400" />
            <span className="hidden md:block text-sm text-gray-400">Books</span>
          </button>
          <button className="flex flex-col items-center space-y-1 md:flex-row md:space-y-0 md:space-x-2">
            <Users className="w-6 h-6 text-gray-400" />
            <span className="hidden md:block text-sm text-gray-400">Community</span>
          </button>
          <button className="flex flex-col items-center space-y-1 md:flex-row md:space-y-0 md:space-x-2">
            <MessageCircle className="w-6 h-6 text-gray-400" />
            <span className="hidden md:block text-sm text-gray-400">Messages</span>
          </button>
          <button className="flex flex-col items-center space-y-1 md:flex-row md:space-y-0 md:space-x-2">
            <User className="w-6 h-6 text-red-500" />
            <span className="hidden md:block text-sm text-red-500">Profile</span>
          </button>
          <button className="flex flex-col items-center space-y-1 md:flex-row md:space-y-0 md:space-x-2">
            <Bell className="w-6 h-6 text-gray-400" />
            <span className="hidden md:block text-sm text-gray-400">Notifications</span>
          </button>
        </div>
      </div>

      {/* Bottom padding to account for fixed navigation */}
      <div className="h-20"></div>
    </div>
  );
};

export default LibraryApp;