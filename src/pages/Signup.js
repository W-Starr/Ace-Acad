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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center p-4 transition-colors">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 px-6 pt-8 pb-6 text-center">
          <img
            src="/logo.jpg"
            alt="Ace-Acad Logo"
            className="h-20 mx-auto mb-4"
          />
          <h1 className="text-lg font-semibold text-[#0C1639] dark:text-white mb-2">
            Fill out this form
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">Please complete your information</p>
        </div>

        {/* Form */}
        <div className="px-6 pb-8 space-y-4">
          {[
            { name: "firstName", placeholder: "First Name" },
            { name: "middleName", placeholder: "Middle Name (Optional)" },
            { name: "lastName", placeholder: "Last Name" },
            { name: "emailPhone", placeholder: "Email/Phone no." },
            { name: "password", placeholder: "New Password", type: "password" },
            { name: "confirmPassword", placeholder: "Confirm Password", type: "password" }
          ].map((field) => (
            <div key={field.name}>
              <input
                type={field.type || "text"}
                name={field.name}
                value={formData[field.name]}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-md text-sm placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0C1639] focus:border-transparent"
                placeholder={field.placeholder}
              />
            </div>
          ))}

          {/* Dropdowns */}
          {[
            {
              name: "faculty",
              options: ["Faculty of Science", "Faculty of Arts", "Faculty of Engineering", "Faculty of Medicine"]
            },
            {
              name: "department",
              options: ["Computer Science", "Mathematics", "Physics", "Chemistry"]
            },
            {
              name: "level",
              options: ["100 Level", "200 Level", "300 Level", "400 Level"]
            }
          ].map(({ name, options }) => (
            <div key={name}>
              <select
                name={name}
                value={formData[name]}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#0C1639] focus:border-transparent"
              >
                <option value="" disabled>{name.charAt(0).toUpperCase() + name.slice(1)}</option>
                {options.map((option) => (
                  <option key={option} value={option.toLowerCase().replace(/\s+/g, '-')}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}

          {/* Terms Checkbox */}
          <div className="flex items-start space-x-3 pt-2">
            <input
              type="checkbox"
              name="agreeToTerms"
              id="terms"
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
              className="mt-1 h-4 w-4 text-[#0C1639] focus:ring-[#0C1639] border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600"
            />
            <label htmlFor="terms" className="text-sm text-gray-700 dark:text-gray-300 leading-tight">
              By creating an account, you agree to our Terms
            </label>
          </div>

          {/* Continue Button */}
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-[#0C1639] text-white py-3 px-4 rounded-md text-sm font-medium hover:opacity-90 transition-colors mt-6"
          >
            Continue
          </button>

          {/* Sign In Link */}
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
            Already have an account?{' '}
            <a href="/login" className="text-[#0C1639] dark:text-blue-400 hover:underline font-medium">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
