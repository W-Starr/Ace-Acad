import React, { useState } from 'react';
import { Menu, Search, User, Play, Clock, CheckCircle, Calendar, Home, BookOpen, Users, MessageCircle, Bell, Grid3X3 } from 'lucide-react';

const StudyGuidePage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const progressStats = [
    { label: 'Total', value: 5, color: 'bg-blue-100', textColor: 'text-blue-600' },
    { label: 'Completed', value: 1, color: 'bg-green-100', textColor: 'text-green-600', icon: '✏️' },
    { label: 'Upcoming', value: 4, color: 'bg-blue-100', textColor: 'text-blue-600' }
  ];

  const studyItems = [
    {
      id: 1,
      title: "MATH244: Methods of Linear Algebra II",
      description: "Learn how to find the determinants of 2x2 and 3x3 matrices.",
      status: "completed",
      statusColor: "bg-green-500",
      statusText: "Completed",
      statusIcon: "✓",
      bgColor: "bg-white",
      hasOptions: true
    },
    {
      id: 2,
      title: "Addition, Subtraction and Multiplication of Matrices",
      description: "Learn the basic operations of matrices, the quick way to save time in exams",
      status: "in-progress",
      statusColor: "bg-purple-500",
      statusText: "Watch now 5:30",
      statusIcon: "⏰",
      bgColor: "bg-purple-50",
      hasPlay: true
    },
    {
      id: 3,
      title: "EEEM202: Electronic Circuits",
      description: "Learn all about AC Circuits",
      status: "upcoming",
      statusColor: "bg-gray-400",
      statusText: "Upcoming",
      statusIcon: "📅",
      bgColor: "bg-white",
      hasOptions: true
    }
  ];

  const filteredItems = studyItems.filter(item => {
    if (activeFilter === 'all') return true;
    return item.status === activeFilter;
  });

  return (
    <div className="w-full max-w-sm mx-auto bg-gray-50 min-h-screen md:max-w-4xl lg:max-w-6xl">
      {/* Header */}
      <div className="bg-white px-4 py-4 md:px-8">
        <div className="flex items-center justify-between mb-4">
          <Menu className="w-6 h-6 text-gray-700" />
          <h1 className="text-xl font-bold text-gray-900 md:text-2xl">Study Guide</h1>
          <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-blue-600" />
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-3 bg-blue-50 rounded-lg border-none outline-none text-gray-700 placeholder-gray-500"
          />
        </div>

        {/* Progress Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {progressStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-2 relative md:w-20 md:h-20`}>
                <span className={`text-2xl font-bold ${stat.textColor} md:text-3xl`}>{stat.value}</span>
                {stat.icon && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-xs">{stat.icon}</span>
                  </div>
                )}
              </div>
              <p className="text-xs text-gray-600 font-medium md:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="px-4 mb-4 md:px-8">
        <div className="flex space-x-2 overflow-x-auto">
          {[
            { key: 'all', label: 'All', count: 5 },
            { key: 'completed', label: 'Completed', count: 1 },
            { key: 'in-progress', label: 'In Progress', count: 1 },
            { key: 'upcoming', label: 'Upcoming', count: 4 }
          ].map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeFilter === filter.key
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>
      </div>

      {/* Grid View Toggle */}
      <div className="px-4 mb-4 flex justify-end md:px-8">
        <button className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors">
          <Grid3X3 className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Study Items */}
      <div className="px-4 space-y-4 md:px-8 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className={`${item.bgColor} rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight md:text-xl">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 md:text-base">
                  {item.description}
                </p>
              </div>
              {item.hasOptions && (
                <button className="ml-4 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <span className="text-gray-400 text-lg">⋯</span>
                </button>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className={`${item.statusColor} text-white px-3 py-1.5 rounded-full flex items-center space-x-2 text-sm font-medium`}>
                <span>{item.statusIcon}</span>
                <span>{item.statusText}</span>
              </div>
              
              {item.hasPlay && (
                <button className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  <Play className="w-5 h-5 text-white ml-0.5" />
                </button>
              )}
              
              {item.hasOptions && (
                <button className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <CheckCircle className="w-4 h-4 text-white" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Add more content padding for desktop */}
      <div className="hidden md:block">
        <div className="px-8 mt-8">
          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Study Statistics</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="text-2xl font-bold text-blue-600 mb-1">12hrs</div>
                <div className="text-sm text-gray-600">This Week</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <div className="text-2xl font-bold text-green-600 mb-1">85%</div>
                <div className="text-sm text-gray-600">Completion Rate</div>
              </div>
            </div>
          </div>
        </div>
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

export default StudyGuidePage;