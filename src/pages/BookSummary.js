// src/pages/BookSummary.js
import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BookSummary = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const book = location.state;

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
        <div>
          <p className="text-lg mb-2">No book data was passed.</p>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-6 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-6">
        <button onClick={() => navigate(-1)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-2xl font-bold">{book.title}</h1>
      </div>

      {/* Book Details */}
      <div className={`p-6 rounded-lg shadow ${book.color}`}>
        <p className={`mb-1 text-sm ${book.textColor}`}>Edition: {book.edition}</p>
        <p className={`mb-2 text-sm ${book.textColor}`}>Author: {book.author}</p>
        <div className="mb-4">
          <div className="w-full bg-white dark:bg-gray-700 bg-opacity-30 rounded-full h-2 mb-1">
            <div
              className="bg-white h-2 rounded-full transition-all duration-300"
              style={{ width: `${book.progress}%` }}
            ></div>
          </div>
          <span className={`text-xs ${book.textColor}`}>{book.progress}% Completed</span>
        </div>
        <p className="text-sm mt-4 text-gray-700 dark:text-gray-200">
          This is a placeholder for the book's description. You can add notes, chapter breakdowns, or summaries here.
        </p>
      </div>
    </div>
  );
};

export default BookSummary;
