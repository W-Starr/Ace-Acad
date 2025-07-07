import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import API from '../api/api';


export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      setError("Reset token is missing from the URL.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const response = await API.post("/auth/reset-password", {
        token,
        password,
      });

      if (response.data?.message) {
        setMessage("✅ Password reset successful! Redirecting to login...");
        setTimeout(() => navigate("/login"), 3000);
      } else {
        setError("Something went wrong. Try again.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-[#0C1639] dark:text-white mb-6">
          Reset Your Password
        </h1>

        {message && (
          <div className="mb-4 text-green-600 font-medium text-center">{message}</div>
        )}
        {error && (
          <div className="mb-4 text-red-600 font-medium text-center">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            placeholder="New password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0C1639]"
          />
          <input
            type="password"
            placeholder="Confirm new password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0C1639]"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0C1639] text-white py-3 rounded hover:opacity-90 transition-colors"
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
}
