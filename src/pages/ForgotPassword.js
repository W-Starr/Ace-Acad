// src/pages/ForgotPassword.js

import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending reset email
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md space-y-6">
        <h1 className="text-2xl font-bold text-center text-[#0C1639] dark:text-white">
          Forgot Password
        </h1>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0C1639]"
            />

            <button
              type="submit"
              className="w-full bg-[#0C1639] text-white py-3 rounded hover:opacity-90 transition-colors"
            >
              Send Reset Link
            </button>
          </form>
        ) : (
          <div className="text-center text-green-600 dark:text-green-400 font-medium">
            ✅ A reset link has been sent to <br />
            <span className="font-semibold">{email}</span>
          </div>
        )}

        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          Remember your password?{" "}
          <Link to="/login" className="text-[#0C1639] dark:text-white font-semibold hover:underline">
            Back to login
          </Link>
        </p>
      </div>
    </div>
  );
}
