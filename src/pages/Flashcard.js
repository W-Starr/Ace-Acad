import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Search,
  Star,
  Home,
  Book,
  Users,
  Instagram,
  MapPin,
  Bell,
  Clock,
  FileText
} from 'lucide-react';
import QuoteWidget from '../components/QuoteWidget';
import API from '../api/api';


export default function QuizDetailScreen({ quizId = 'GENS301' }) {
  const [loading, setLoading] = useState(true);
  const [quizDetail, setQuizDetail] = useState(null);

  useEffect(() => {
    API.get(`/quizzes/${quizId}/detail`)
      .then(res => setQuizDetail(res.data))
      .catch(err => console.error('Failed to fetch quiz detail:', err))
      .finally(() => setLoading(false));
  }, [quizId]);

  if (loading || !quizDetail) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900"></div>
    );
  }

  const {
    name,
    totalQuestions,
    duration,
    stars,
    description,
    instructions
  } = quizDetail;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
      {/* Header */}
      <div className="bg-[#0C1639] text-white">
        <div className="flex items-center justify-between p-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <button className="p-1 hover:bg-opacity-80 rounded-full transition-colors">
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-lg font-medium">Quiz Section</h1>
          </div>
          <button className="p-1 hover:bg-opacity-80 rounded-full transition-colors">
            <Search size={20} />
          </button>
        </div>
      </div>

      {/* Motivational Quote */}
      <div className="px-4 lg:px-8 mb-6">
        <QuoteWidget />
      </div>

      {/* Quiz Info */}
      <div className="bg-[#0C1639] pb-6">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#14214D] rounded-lg p-4 flex items-center justify-between">
            <div>
              <h2 className="text-white text-xl font-semibold">{name}</h2>
              <p className="text-blue-200 text-sm">GET {stars * totalQuestions} Points</p>
            </div>
            <div className="flex items-center gap-1 text-yellow-400">
              <Star size={20} fill="currentColor" />
              <span className="text-white font-semibold">{stars}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 -mt-4 mb-20">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden p-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">
            {description}
          </h3>

          {/* Stats */}
          {[
            { icon: FileText, title: `${totalQuestions} Questions`, subtitle: `${stars} point for a correct answer` },
            { icon: Clock, title: duration, subtitle: 'Total duration of the quiz' },
            { icon: Star, title: `Win ${stars} star`, subtitle: 'Answer all questions correctly' }
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                <stat.icon size={20} className="text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-800 dark:text-white">{stat.title}</div>
                <div className="text-gray-500 dark:text-gray-300 text-sm">{stat.subtitle}</div>
              </div>
            </div>
          ))}

          {/* Instructions */}
          <div className="mb-8">
            <p className="text-gray-700 dark:text-gray-200 font-medium mb-4">
              Please read the text below carefully so you can understand it
            </p>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              {instructions.map((inst, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                  <span>{inst}</span>
                </li>
              ))}
            </ul>
          </div>

          <button className="w-full bg-[#0C1639] hover:bg-opacity-90 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors">
            Start Quiz
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-4 py-2">
        <div className="max-w-4xl mx-auto flex justify-around">
          {[Home, Book, Users, Instagram, MapPin, Bell].map((Icon, idx) => (
            <button key={idx} className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
              <Icon size={24} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
