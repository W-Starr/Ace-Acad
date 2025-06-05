import React from 'react';

// Dummy data
const studyGuide = {
  title: "MATH244: Methods of Linear Algebra II",
  message: "Keep going! You're doing great!",
  progress: "60% Complete",
};

const nextClass = {
  title: "MATH242: Calculus II",
  time: "Today, 9:00am",
  tag: "Assignments",
};

const assignments = [
  {
    title: "MEEN202: Engineering Drawing",
    due: "Due Tomorrow",
    status: "Completed",
  },
  {
    title: "CHEN202: Introduction to Management Test",
    due: "Coming up in 5 days",
    status: "Completed",
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-white px-4 pb-24">
      {/* Welcome Banner */}
      <div className="mt-6 mb-4 p-4 rounded-xl bg-blue-50 shadow">
        <p className="text-sm font-medium text-gray-700">👋 Hello, Meerah!</p>
        <p className="text-sm text-gray-500">Keep up the great work 💪</p>
        <div className="text-xs mt-2 bg-white rounded-full w-10 h-10 flex items-center justify-center border float-right">
          2/3
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-3 rounded-md border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0C1639]"
        />
      </div>

      {/* Study Guide Section */}
      <SectionHeader title="Study Guide" />
      <Card className="bg-blue-100">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold">{studyGuide.title}</p>
            <p className="text-sm text-gray-600">{studyGuide.message}</p>
          </div>
          <span className="text-xs font-semibold text-blue-900">{studyGuide.progress}</span>
        </div>
      </Card>

      {/* Next Class Section */}
      <SectionHeader title="Next Class" />
      <Card className="bg-red-100">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold">{nextClass.title}</p>
            <p className="text-sm text-gray-600">{nextClass.time}</p>
          </div>
          <span className="text-xs font-semibold text-red-800 bg-white px-2 py-1 rounded">
            {nextClass.tag}
          </span>
        </div>
      </Card>

      {/* Assignments Section */}
      <SectionHeader title="Assignments" />
      {assignments.map((item, idx) => (
        <Card key={idx} className="bg-purple-100">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-gray-600">{item.due}</p>
            </div>
            <span className="text-xs font-semibold text-purple-800 bg-white px-2 py-1 rounded">
              {item.status}
            </span>
          </div>
        </Card>
      ))}

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

// Reusable Section Header
const SectionHeader = ({ title }) => (
  <div className="flex justify-between items-center mt-6 mb-2">
    <h2 className="text-sm font-semibold">{title}</h2>
    <a href="#" className="text-xs text-[#0C1639] font-medium">
      See All
    </a>
  </div>
);

// Reusable Card Component
const Card = ({ children, className }) => (
  <div className={`rounded-lg p-4 shadow-sm mb-4 ${className}`}>{children}</div>
);

// Bottom Nav Placeholder
const BottomNav = () => (
  <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-3 shadow-md">
    {['🏠', '📘', '📅', '🔔', '⚙️'].map((icon, idx) => (
      <button key={idx} className="text-xl">{icon}</button>
    ))}
  </div>
);

export default Dashboard;
