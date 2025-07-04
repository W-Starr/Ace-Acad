import React, { useState, useEffect } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import QuizSkeleton from '../components/QuizScreenSkeleton';


export default function QuizScreen() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(10);
  const [isLoading, setIsLoading] = useState(true);
  const totalQuestions = 60;

  const timeRemaining = "16:35";
  const question = "What is the first step in the business planning process?";
  const answers = [
    { id: 'A', text: 'Strategize' },
    { id: 'B', text: 'Draft' },
    { id: 'C', text: 'Revisitation and Proof-reading' },
    { id: 'D', text: 'Research' }
  ];
  const questionNumbers = Array.from({ length: 10 }, (_, i) => i + 1);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleAnswerSelect = (answerId) => {
    setSelectedAnswer(answerId);
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(null);
    }
  };

  if (isLoading) {
    return <QuizSkeleton />; // 
  }
  

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-[#0C1639] text-white">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button className="p-1 hover:bg-blue-700 rounded-full transition-colors">
                <ArrowLeft size={20} />
              </button>
              <h1 className="text-lg font-semibold">GENS301 Quiz</h1>
            </div>
            <div className="flex items-center gap-2 bg-white text-gray-800 px-3 py-1 rounded-full">
              <Clock size={16} />
              <span className="font-medium">{timeRemaining}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          {/* Progress Bar */}
          <div className="p-6 pb-4">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-6">
              <div
                className="bg-[#0C1639] h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
              ></div>
            </div>

            {/* Question Numbers */}
            <div className="flex items-center justify-center gap-2 mb-8 overflow-x-auto pb-2">
              {questionNumbers.map((num) => (
                <button
                  key={num}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 transition-all ${
                    num === currentQuestion
                      ? 'bg-[#0C1639] text-white'
                      : num < currentQuestion
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {num}
                </button>
              ))}
              {currentQuestion > 10 && (
                <div className="text-gray-400 text-sm font-medium px-2">
                  ... {currentQuestion}
                </div>
              )}
            </div>
          </div>

          {/* Question */}
          <div className="px-6 pb-6">
            <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white mb-8 leading-relaxed">
              {question}
            </h2>

            {/* Answer Options */}
            <div className="space-y-4 mb-12">
              {answers.map((answer) => (
                <button
                  key={answer.id}
                  onClick={() => handleAnswerSelect(answer.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-lg border-2 text-left transition-all hover:shadow-md ${
                    selectedAnswer === answer.id
                      ? 'border-[#0C1639] bg-blue-50 dark:bg-gray-700'
                      : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-500'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0 ${
                      selectedAnswer === answer.id ? 'bg-[#0C1639]' : 'bg-gray-400'
                    }`}
                  >
                    {answer.id}
                  </div>
                  <span className="text-gray-800 dark:text-gray-100 text-base lg:text-lg">
                    {answer.text}
                  </span>
                </button>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between gap-4">
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 1}
                className={`flex items-center justify-center w-12 h-12 rounded-full transition-all ${
                  currentQuestion === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-600 text-white hover:bg-gray-700'
                }`}
              >
                <ChevronLeft size={20} />
              </button>

              <button className="flex-1 max-w-xs bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-100 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-400 transition-all">
                Submit Quiz
              </button>

              <button
                onClick={handleNext}
                disabled={currentQuestion === totalQuestions}
                className={`flex items-center justify-center w-12 h-12 rounded-full transition-all ${
                  currentQuestion === totalQuestions
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-600 text-white hover:bg-gray-700'
                }`}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Question Counter */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium lg:hidden">
        {currentQuestion} of {totalQuestions}
      </div>

      <div className="h-20 lg:h-8"></div>
    </div>
  );
}
