import React, { useState } from 'react';
import { Calendar, Clock, BookOpen, Bell, Check, X } from 'lucide-react';

const ReminderScheduler = () => {
  const [reminder, setReminder] = useState({
    course: "",
    date: "",
    time: "",
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Reminder set:", reminder);
    setIsLoading(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setReminder({ course: "", date: "", time: "" });
    }, 3000);
  };

  const handleReset = () => {
    setReminder({ course: "", date: "", time: "" });
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 flex items-center justify-center">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Bell className="text-white" size={24} />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Set a Reminder</h1>
          <p className="text-gray-600">Never miss your important study sessions</p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 backdrop-blur-sm">
          {!isSubmitted ? (
            <div className="space-y-6">
              {/* Course Input */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <BookOpen size={16} className="text-blue-600" />
                  Course Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={reminder.course}
                    onChange={(e) => setReminder({ ...reminder, course: e.target.value })}
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-200 hover:border-gray-300"
                    placeholder="e.g., Mathematics 101"
                    required
                  />
                </div>
              </div>

              {/* Date Input */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <Calendar size={16} className="text-purple-600" />
                  Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={reminder.date}
                    onChange={(e) => setReminder({ ...reminder, date: e.target.value })}
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-purple-500 focus:bg-white transition-all duration-200 hover:border-gray-300"
                    required
                  />
                </div>
              </div>

              {/* Time Input */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <Clock size={16} className="text-green-600" />
                  Time
                </label>
                <div className="relative">
                  <input
                    type="time"
                    value={reminder.time}
                    onChange={(e) => setReminder({ ...reminder, time: e.target.value })}
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-green-500 focus:bg-white transition-all duration-200 hover:border-gray-300"
                    required
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <X size={18} />
                  Clear
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Setting...
                    </>
                  ) : (
                    <>
                      <Bell size={18} />
                      Set Reminder
                    </>
                  )}
                </button>
              </div>
            </div>
          ) : (
            /* Success State */
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Reminder Set!</h3>
              <p className="text-gray-600 mb-4">
                Your reminder for <span className="font-semibold text-blue-600">{reminder.course}</span> has been scheduled.
              </p>
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <div className="flex items-center justify-center gap-4 text-sm text-gray-700">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{new Date(reminder.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{reminder.time}</span>
                  </div>
                </div>
              </div>
              <div className="w-full bg-green-200 rounded-full h-1">
                <div className="bg-green-600 h-1 rounded-full animate-pulse"></div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-gray-500">
          <p>You'll receive a notification at the scheduled time</p>
        </div>
      </div>
    </div>
  );
};

export default ReminderScheduler;