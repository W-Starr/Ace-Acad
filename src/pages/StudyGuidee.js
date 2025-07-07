import React, { useState, useEffect } from 'react';
import {
  Menu, Search, User, Play, CheckCircle, Grid3X3,
  Home, BookOpen, Users, MessageCircle, Bell
} from 'lucide-react';
import QuoteWidget from '../components/QuoteWidget';
import EmptyState from '../components/EmptyState';
import StudySkeleton from '../components/StudySkeleton';
import API from '../api/api';


const StudyGuidePage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [progressStats, setProgressStats] = useState([]);
  const [studyItems, setStudyItems] = useState([]);

  // Fetch data from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsRes, guidesRes] = await Promise.all([
          API.get('/api/study/progress-stats'),
          API.get('/api/study/guides')
        ]);
        setProgressStats(statsRes.data);
        setStudyItems(guidesRes.data);
      } catch (err) {
        console.error("Error loading study guide:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredItems = studyItems.filter(item => {
    if (activeFilter === 'all') return true;
    return item.status === activeFilter;
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <StudySkeleton />
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm mx-auto bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen md:max-w-4xl lg:max-w-6xl">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 px-4 py-4 md:px-8">
        <div className="flex items-center justify-between mb-4">
          <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          <h1 className="text-xl font-bold text-gray-900 dark:text-white md:text-2xl">Study Guide</h1>
          <div className="w-10 h-10 bg-blue-200 dark:bg-blue-800 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-blue-600 dark:text-white" />
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-3 bg-blue-50 dark:bg-gray-700 dark:text-white rounded-lg border-none outline-none text-gray-700 placeholder-gray-500 dark:placeholder-gray-300"
          />
        </div>

        {/* Quote Widget */}
        <div className="px-4 lg:px-8 mb-6">
          <QuoteWidget />
        </div>

        {/* Progress Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {progressStats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-2 relative md:w-20 md:h-20`}>
                <span className={`text-2xl font-bold ${stat.textColor} md:text-3xl`}>{stat.value}</span>
                {stat.icon && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-xs">{stat.icon}</span>
                  </div>
                )}
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-300 font-medium md:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Study Filter Tabs */}
      <div className="px-4 mb-4 md:px-8">
        <div className="flex space-x-2 overflow-x-auto">
          {[
            { key: 'all', label: 'All' },
            { key: 'in-progress', label: 'In Progress' },
            { key: 'completed', label: 'Completed' },
            { key: 'not-started', label: 'Not Started' }
          ].map(filter => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors
                ${activeFilter === filter.key ? 'bg-blue-500 text-white' : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'}`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Toggle Button */}
      <div className="px-4 mb-4 flex justify-end md:px-8">
        <button className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
          <Grid3X3 className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>
      </div>

      {/* Study Cards */}
      <div className="px-4 space-y-4 md:px-8 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3">
        {filteredItems.length === 0 ? (
          <div className="col-span-full">
            <EmptyState message="No study guides available" subtext="Try changing your filter or check back later." />
          </div>
        ) : (
          filteredItems.map(item => (
            <div key={item.id} className={`${item.bgColor} rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow`}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight md:text-xl">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4 md:text-base">
                    {item.description}
                  </p>
                </div>
                {item.hasOptions && (
                  <button className="ml-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
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
                    <Play className="w-5 h-5 text-white" />
                  </button>
                )}
                {item.hasOptions && (
                  <button className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 md:max-w-4xl lg:max-w-6xl">
        <div className="flex justify-around py-3 md:justify-center md:space-x-8">
          {[Home, BookOpen, Users, MessageCircle, User, Bell].map((Icon, idx) => (
            <button key={idx} className="flex flex-col items-center space-y-1 md:flex-row md:space-y-0 md:space-x-2 text-gray-700 dark:text-gray-300">
              <Icon className={`w-6 h-6 ${Icon === User ? 'text-red-500' : ''}`} />
              <span className={`hidden md:block text-sm ${Icon === User ? 'text-red-500' : ''}`}>{Icon.name}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="h-20"></div>
    </div>
  );
};

export default StudyGuidePage;
