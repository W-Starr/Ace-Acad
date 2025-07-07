import React, { useState, useEffect } from 'react';
import {
  Bell, Plus, Minus, Play,
  User
} from 'lucide-react';
import QuoteWidget from '../components/QuoteWidget';
import LearningSkeleton from '../components/LearningSkeleton';
import API from '../api/api';


const LearningDashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const [questItems, setQuestItems] = useState([]);
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [questsRes, stepsRes] = await Promise.all([
          API.get('/api/study/quests'),
          API.get('/api/study/steps'),
        ]);

        setQuestItems(questsRes.data);
        setSteps(stepsRes.data);
      } catch (error) {
        console.error('Error fetching study guide data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        <LearningSkeleton />
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm mx-auto bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white md:max-w-4xl lg:max-w-6xl">

      {/* Header */}
      <div className="bg-white dark:bg-gray-800 px-4 py-4 md:px-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold md:text-xl">Hello, Meerah!</h2>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-xs">🏆</span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300">Silver Rank</span>
              </div>
            </div>
          </div>
          <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
            <Bell className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Quote Widget */}
        <div className="px-4 lg:px-8 mb-6">
          <QuoteWidget />
        </div>

        {/* Quest */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base font-semibold md:text-lg">Quest for today</h3>
            <button className="text-sm text-blue-600 hover:text-blue-700">Show all</button>
          </div>
          <div className="flex space-x-3 overflow-x-auto pb-2">
            {questItems.map(item => (
              <div key={item.id} className="flex-shrink-0">
                <div className={`${item.color} w-16 h-16 rounded-2xl flex flex-col items-center justify-center text-white mb-2 md:w-20 md:h-20`}>
                  <span className="text-2xl md:text-3xl">{item.icon}</span>
                </div>
                <p className="text-xs text-center text-gray-600 dark:text-gray-300 font-medium">{item.code}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 md:px-8 md:grid md:grid-cols-3 md:gap-8">
        <div className="md:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2 md:text-3xl">Determinants of matrices</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                  Learn how to find the determinants of 2x2 and 3x3 Matrices
                </p>
              </div>
              <div className="ml-4 bg-gray-100 dark:bg-gray-700 rounded-lg p-2">
                <Plus className="w-5 h-5 text-gray-600 dark:text-white mb-2" />
                <div className="w-6 h-px bg-gray-400 dark:bg-gray-600 mb-2"></div>
                <Minus className="w-5 h-5 text-gray-600 dark:text-white" />
              </div>
            </div>

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

            <div className="space-y-4">
              {steps.map((step) => (
                <div key={step.id} className={`flex items-start space-x-3 p-4 rounded-xl transition-colors ${
                  currentStep === step.id
                    ? 'bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-700'
                    : 'bg-gray-50 dark:bg-gray-700'
                }`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                    currentStep === step.id ? 'bg-blue-500' : 'bg-gray-400 dark:bg-gray-600'
                  }`}>
                    {step.id}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{step.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningDashboard;
