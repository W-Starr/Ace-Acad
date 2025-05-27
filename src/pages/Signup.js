import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    emailPhone: '',
    faculty: '',
    department: '',
    level: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {/* Card Container */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header with Icon */}
        <div className="bg-white px-6 pt-8 pb-6 text-center">
          {/* Book Icon */}
          <div className="mb-4 flex justify-center">
            <div className="flex space-x-1">
              <div className="w-3 h-8 bg-blue-900 rounded-sm"></div>
              <div className="w-3 h-8 bg-blue-900 rounded-sm"></div>
              <div className="w-3 h-8 bg-blue-900 rounded-sm"></div>
            </div>
          </div>
          
          <h1 className="text-lg font-semibold text-gray-900 mb-2">Fill out this form</h1>
          <p className="text-sm text-gray-600">Please complete your information</p>
        </div>

        {/* Form Container */}
        <div className="px-6 pb-8 space-y-4">
          {/* First Name */}
          <div>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="First Name"
            />
          </div>

          {/* Middle Name */}
          <div>
            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Middle Name (Optional)"
            />
          </div>

          {/* Last Name */}
          <div>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Last Name"
            />
          </div>

          {/* Email/Phone */}
          <div>
            <input
              type="text"
              name="emailPhone"
              value={formData.emailPhone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Email/Phone no."
            />
          </div>

          {/* Faculty */}
          <div>
            <select
              name="faculty"
              value={formData.faculty}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
            >
              <option value="" disabled>Faculty</option>
              <option value="science">Faculty of Science</option>
              <option value="arts">Faculty of Arts</option>
              <option value="engineering">Faculty of Engineering</option>
              <option value="medicine">Faculty of Medicine</option>
            </select>
          </div>

          {/* Department */}
          <div>
            <select
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
            >
              <option value="" disabled>Department</option>
              <option value="computer-science">Computer Science</option>
              <option value="mathematics">Mathematics</option>
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
            </select>
          </div>

          {/* Level */}
          <div>
            <select
              name="level"
              value={formData.level}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
            >
              <option value="" disabled>Level</option>
              <option value="100">100 Level</option>
              <option value="200">200 Level</option>
              <option value="300">300 Level</option>
              <option value="400">400 Level</option>
            </select>
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="New Password"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Confirm Password"
            />
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start space-x-3 pt-2">
            <input
              type="checkbox"
              name="agreeToTerms"
              id="terms"
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
              className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="text-sm text-gray-700 leading-tight">
              By creating an account, you agree to our Terms
            </label>
          </div>

          {/* Continue Button */}
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors mt-6"
          >
            Continue
          </button>

          {/* Sign in Link */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{' '}
            <a href="/login" className="text-blue-600 hover:text-blue-800 font-medium">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;