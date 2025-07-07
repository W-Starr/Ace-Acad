import React, { useState, useEffect } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import QuizSkeleton from '../components/QuizScreenSkeleton';
import API from '../api/api';



export default function QuizScreen() {
  const quizId = 'gens301'; // later can be passed via route or props
  const totalQuestions = 60;

  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [questionData, setQuestionData] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchQuestion();
  }, [currentQuestion]);

  const fetchQuestion = async () => {
    setIsLoading(true);
    try {
      const res = await API.get(`/quizzes/${quizId}/questions/${currentQuestion}`);
      setQuestionData(res.data);
      const existing = answers.find(a => a.questionNumber === currentQuestion);
      setSelectedAnswer(existing?.selectedAnswer || null);
    } catch (err) {
      console.error('Failed to fetch question:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnswerSelect = (answerId) => {
    setSelectedAnswer(answerId);
    const updated = answers.filter(a => a.questionNumber !== currentQuestion);
    updated.push({ questionNumber: currentQuestion, selectedAnswer: answerId });
    setAnswers(updated);
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmitQuiz = async () => {
    try {
      await API.post(`/quizzes/${quizId}/submit`, {
        quizId,
        answers
      });
      alert('Quiz submitted successfully!');
    } catch (err) {
      console.error('Submission failed:', err);
      alert('Failed to submit quiz.');
    }
  };

  if (isLoading || !questionData) {
    return <QuizSkeleton />;
  }

  const { question, answers: options, timeRemaining } = questionData;

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
          <div className="p-6 pb-4">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-6">
              <div
                className="bg-[#0C1639] h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <div className="px-6 pb-6">
            <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white mb-8 leading-relaxed">
              {question}
            </h2>

            <div className="space-y-4 mb-12">
              {options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleAnswerSelect(option.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-lg border-2 text-left transition-all hover:shadow-md ${
                    selectedAnswer === option.id
                      ? 'border-[#0C1639] bg-blue-50 dark:bg-gray-700'
                      : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-500'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0 ${
                      selectedAnswer === option.id ? 'bg-[#0C1639]' : 'bg-gray-400'
                    }`}
                  >
                    {option.id}
                  </div>
                  <span className="text-gray-800 dark:text-gray-100 text-base lg:text-lg">
                    {option.text}
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

              <button
                onClick={handleSubmitQuiz}
                className="flex-1 max-w-xs bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-100 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-400 transition-all"
              >
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
    </div>
  );
}
