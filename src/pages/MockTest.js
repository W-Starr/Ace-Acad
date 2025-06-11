import React, { useState } from 'react';
import { Menu, Search, FileText, Clock, Star, Trash2 } from 'lucide-react';

export default function QuizHomeScreen() {
  const [activeTab, setActiveTab] = useState('Up Next!');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = ['All', 'Review', 'Previous', 'Up Next!'];

  const quizzes = [
    {
      id: 1,
      name: 'GENS301',
      questions: 60,
      duration: '1 hour 15 min',
      stars: 40,
      type: 'upcoming'
    },
    {
      id: 2,
      name: 'STAT301',
      questions: 60,
      duration: '1 hour 15 min',
      stars: 38,
      type: 'upcoming'
    }
  ];

  const retryQuiz = {
    name: 'MATH341',
    questions: 10,
    duration: '35 min'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#0C1639] text-white">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <button className="p-2 hover:bg-opacity-70 rounded-lg transition-colors lg:hidden">
              <Menu size={24} />
            </button>
            <div className="hidden lg:block"></div>
            <button className="p-2 hover:bg-opacity-70 rounded-lg transition-colors">
              <Search size={24} />
            </button>
          </div>

          <div className="mb-6">
            <p className="text-blue-200 text-sm mb-2">Hello, Meerah!</p>
            <h1 className="text-2xl lg:text-3xl font-bold">Let's test your knowledge</h1>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white text-gray-900 pl-10 pr-12 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0C1639]"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
              <div className="w-6 h-6 flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-gray-400 rounded"></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Tabs */}
        <div className="bg-white rounded-lg p-1 mb-6 shadow-sm">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-shrink-0 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? 'bg-[#0C1639] text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Quiz Cards */}
        <div className="space-y-4 mb-8">
          {quizzes.map((quiz) => (
            <div key={quiz.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                {/* Quiz Icon */}
                <div className="w-16 h-16 bg-gray-300 rounded-lg flex-shrink-0 flex items-center justify-center">
                  <FileText className="text-gray-600" size={24} />
                </div>

                {/* Quiz Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{quiz.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                    <div className="flex items-center gap-1">
                      <FileText size={16} />
                      <span>{quiz.questions} Questions</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{quiz.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 text-yellow-500 flex-shrink-0">
                  <Star size={16} fill="currentColor" />
                  <span className="text-gray-900 font-semibold">{quiz.stars}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Retry Quiz Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Retry Quiz</h2>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center gap-4 mb-4">
              {/* Quiz Icon */}
              <div className="w-16 h-16 bg-gray-300 rounded-lg flex-shrink-0 flex items-center justify-center">
                <FileText className="text-gray-600" size={24} />
              </div>

              {/* Quiz Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{retryQuiz.name}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <FileText size={16} />
                    <span>{retryQuiz.questions} Question</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{retryQuiz.duration}</span>
                  </div>
                </div>
              </div>

              {/* Delete Button */}
              <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors flex-shrink-0">
                <Trash2 size={20} />
              </button>
            </div>

            {/* Retry Button */}
            <button className="w-full bg-[#0C1639] hover:bg-opacity-90 text-white py-3 px-4 rounded-lg font-medium transition-colors">
              Retry Quiz
            </button>
          </div>
        </div>

        {/* Start Quiz Button */}
        <button className="w-full bg-[#0C1639] hover:bg-opacity-90 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors shadow-lg">
          Start Quiz
        </button>
      </div>

      {/* Bottom spacing for mobile */}
      <div className="h-8"></div>
    </div>
  );
}
