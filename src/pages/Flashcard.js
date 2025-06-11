import React from 'react';
import {
  ArrowLeft,
  Search,
  FileText,
  Clock,
  Star,
  Home,
  Book,
  Users,
  Instagram,
  MapPin,
  Bell
} from 'lucide-react';

export default function QuizDetailScreen() {
  return (
    <div className="min-h-screen bg-gray-100">
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

      {/* Quiz Header Card */}
      <div className="bg-[#0C1639] pb-6">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#14214D] rounded-lg p-4 flex items-center justify-between">
            <div>
              <h2 className="text-white text-xl font-semibold">GENS301 Quiz</h2>
              <p className="text-blue-200 text-sm">GET 100 Points</p>
            </div>
            <div className="flex items-center gap-1 text-yellow-400">
              <Star size={20} fill="currentColor" />
              <span className="text-white font-semibold">40</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 -mt-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              Brief explanation about this quiz
            </h3>

            {/* Quiz Stats */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">60 Question</div>
                  <div className="text-gray-500 text-sm">10 point for a correct answer</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">1 hour 15 min</div>
                  <div className="text-gray-500 text-sm">Total duration of the quiz</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Win 60 star</div>
                  <div className="text-gray-500 text-sm">Answer all questions correctly</div>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="mb-8">
              <p className="text-gray-700 font-medium mb-4">
                Please read the text below carefully so you can understand it
              </p>

              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>1 point given for a correct answer and no marks for an incorrect answer</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Tap on options to select the correct answer</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Tap on the bookmark icon to save interesting questions</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Click submit if you are sure you want to complete all the quizzes</span>
                </li>
              </ul>
            </div>

            {/* Start Quiz Button */}
            <button className="w-full bg-[#0C1639] hover:bg-opacity-90 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors">
              Start Quiz
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-around">
            <button className="flex flex-col items-center gap-1 p-2 text-[#0C1639]">
              <Home size={24} />
            </button>
            <button className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-gray-600">
              <Book size={24} />
            </button>
            <button className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-gray-600">
              <Users size={24} />
            </button>
            <button className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-gray-600">
              <Instagram size={24} />
            </button>
            <button className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-gray-600">
              <MapPin size={24} />
            </button>
            <button className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-gray-600">
              <Bell size={24} />
            </button>
          </div>
        </div>
      </div>

      <div className="h-20"></div>
    </div>
  );
}
