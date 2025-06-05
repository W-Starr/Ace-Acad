import React, { useState } from 'react';
import { Bell, Plus, Minus, Play, Home, BookOpen, Users, MessageCircle, User, Search } from 'lucide-react';

const LearningDashboard = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const questItems = [
    { id: 1, code: 'MCM302', color: 'bg-red-500', icon: '📊' },
    { id: 2, code: 'EEE202', color: 'bg-blue-500', icon: '⚡' },
    { id: 3, code: 'Quiz', color: 'bg-purple-500', icon: '❓' },
    { id: 4, code: 'MAT304', color: 'bg-red-500', icon: '📐' },
    { id: 5, code: 'PHY Cards', color: 'bg-blue-600', icon: '🔬' }
  ];

  const steps = [
    {
      id: 1,
      title: "Step 1",
      description: "Read Chapter 12 of Advanced Engineering Mathematics by K.A. Stroud and skip \"Determinants by rank on page 167"
    },
    {
      id: 2,
      title: "Step 2", 
      description: "Read Chapter 10 of Advanced Engineering Mathematics by K.A. Stroud and Watch the Youtube Video above for the easiest way to solve a 2x2 Matrix."
    }
  ];

  return (
    <div className="w-full max-w-sm mx-auto bg-gray-50 min-h-screen md:max-w-4xl lg:max-w-6xl">
      {/* Header */}
      <div className="bg-white px-4 py-4 md:px-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900 md:text-xl">Hello, Meerah!</h2>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-xs">🏆</span>
                </div>
                <span className="text-sm text-gray-600">Silver Rank</span>
              </div>
            </div>
          </div>
          <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
            <Bell className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Quest for today */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base font-semibold text-gray-900 md:text-lg">Quest for today</h3>
            <button className="text-sm text-blue-600 hover:text-blue-700">Show all</button>
          </div>
          <div className="flex space-x-3 overflow-x-auto pb-2 md:justify-start">
            {questItems.map((item) => (
              <div key={item.id} className="flex-shrink-0">
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex flex-col items-center justify-center text-white mb-2 md:w-20 md:h-20`}>
                  <span className="text-2xl md:text-3xl">{item.icon}</span>
                </div>
                <p className="text-xs text-center text-gray-600 font-medium">{item.code}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 md:px-8 md:grid md:grid-cols-3 md:gap-8">
        {/* Left Column - Main Content */}
        <div className="md:col-span-2">
          {/* Subject Card */}
          <div className="bg-white rounded-2xl p-6 mb-6 relative overflow-hidden">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 md:text-3xl">
                  Determinants of matrices
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Learn how to find the determinants of 2x2 and 3x3 Matrices
                </p>
              </div>
              <div className="ml-4 bg-gray-100 rounded-lg p-2">
                <Plus className="w-5 h-5 text-gray-600 mb-2" />
                <div className="w-6 h-px bg-gray-400 mb-2"></div>
                <Minus className="w-5 h-5 text-gray-600" />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3 mb-6">
              <button className="flex-1 bg-red-500 text-white rounded-xl py-3 px-4 flex items-center justify-center space-x-2 font-semibold">
                <Play className="w-5 h-5" />
                <div>
                  <div className="text-xs opacity-90">Complete in 2 days (High Priority)</div>
                  <div className="text-sm">▶ Start</div>
                </div>
              </button>
              <button className="bg-red-500 text-white rounded-xl py-3 px-4 flex items-center justify-center">
                <Play className="w-6 h-6" />
                <span className="ml-1 text-sm font-semibold">Watch Tutorial</span>
              </button>
            </div>

            {/* Steps */}
            <div className="space-y-4">
              {steps.map((step) => (
                <div key={step.id} className={`flex items-start space-x-3 p-4 rounded-xl ${
                  currentStep === step.id ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50'
                }`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                    currentStep === step.id ? 'bg-blue-500' : 'bg-gray-400'
                  }`}>
                    {step.id}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">{step.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Progress */}
        <div className="md:col-span-1">
          {/* Today's Progress */}
          <div className="bg-white rounded-2xl p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Progress</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-2 relative">
                  <span className="text-2xl font-bold text-blue-600">5</span>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-xs">📚</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 font-medium">Total</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-2 relative">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                    <span className="text-xs">✏️</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 font-medium">Completed</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-2 relative">
                  <span className="text-2xl font-bold text-blue-600">4</span>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-400 rounded-full flex items-center justify-center">
                    <span className="text-xs">⏰</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 font-medium">Upcoming</p>
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
            <Search className="w-6 h-6 text-gray-400" />
            <span className="hidden md:block text-sm text-gray-400">Search</span>
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

export default LearningDashboard;