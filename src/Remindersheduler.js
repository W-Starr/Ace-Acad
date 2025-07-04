import React, { useState, useEffect } from 'react';
import { Calendar, Clock, BookOpen, Bell, Check, X } from 'lucide-react';

const ReminderScheduler = () => {
  const [reminder, setReminder] = useState({
    course: "",
    date: "",
    time: "",
    frequency: "Once",
    enabled: true,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Load saved reminders (for future use/display if needed)
  useEffect(() => {
    const savedReminders = localStorage.getItem("studyReminders");
    if (!savedReminders) localStorage.setItem("studyReminders", JSON.stringify([]));
  }, []);

  const saveReminderToLocalStorage = (newReminder) => {
    const existing = JSON.parse(localStorage.getItem("studyReminders")) || [];
    existing.push(newReminder);
    localStorage.setItem("studyReminders", JSON.stringify(existing));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSubmitted(true);
    saveReminderToLocalStorage(reminder);
    setTimeout(() => {
      setIsSubmitted(false);
      setReminder({ course: "", date: "", time: "", frequency: "Once", enabled: true });
    }, 3000);
  };

  const handleReset = () => {
    setReminder({ course: "", date: "", time: "", frequency: "Once", enabled: true });
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 p-4 flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Bell className="text-white" size={24} />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Set a Reminder</h1>
          <p className="text-gray-600 dark:text-gray-300">Never miss your important study sessions</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700 backdrop-blur-sm">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Course Input */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  <BookOpen size={16} className="text-blue-600" />
                  Course Name
                </label>
                <input
                  type="text"
                  value={reminder.course}
                  onChange={(e) => setReminder({ ...reminder, course: e.target.value })}
                  className="w-full bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3"
                  placeholder="e.g., Mathematics 101"
                  required
                />
              </div>

              {/* Date Input */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  <Calendar size={16} className="text-purple-600" />
                  Date
                </label>
                <input
                  type="date"
                  value={reminder.date}
                  onChange={(e) => setReminder({ ...reminder, date: e.target.value })}
                  className="w-full bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3"
                  required
                />
              </div>

              {/* Time Input */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  <Clock size={16} className="text-green-600" />
                  Time
                </label>
                <input
                  type="time"
                  value={reminder.time}
                  onChange={(e) => setReminder({ ...reminder, time: e.target.value })}
                  className="w-full bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3"
                  required
                />
              </div>

              {/* Frequency Dropdown */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Frequency
                </label>
                <select
                  value={reminder.frequency}
                  onChange={(e) => setReminder({ ...reminder, frequency: e.target.value })}
                  className="w-full bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3"
                >
                  <option value="Once">Once</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                </select>
              </div>

              {/* Enable Toggle */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Enable Reminder</span>
                <input
                  type="checkbox"
                  checked={reminder.enabled}
                  onChange={(e) => setReminder({ ...reminder, enabled: e.target.checked })}
                  className="w-5 h-5 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-500"
                >
                  <X size={18} />
                  Clear
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 disabled:opacity-70"
                >
                  {isLoading ? "Setting..." : "Set Reminder"}
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="text-green-600 dark:text-green-300" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Reminder Set!</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Your reminder for <span className="font-semibold text-blue-600 dark:text-blue-400">{reminder.course}</span> has been scheduled.
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-6">
                <div className="flex items-center justify-center gap-4 text-sm text-gray-700 dark:text-gray-200">
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
              <div className="w-full bg-green-200 dark:bg-green-700 rounded-full h-1">
                <div className="bg-green-600 dark:bg-green-400 h-1 rounded-full animate-pulse"></div>
              </div>
            </div>
          )}
        </div>
        <div className="text-center mt-6 text-sm text-gray-500 dark:text-gray-400">
          <p>You’ll receive a notification at the scheduled time</p>
        </div>
      </div>
    </div>
  );
};

export default ReminderScheduler;
