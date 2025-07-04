import React, { useState, useEffect } from 'react';
import motivationalQuotes from '../data/quotes';
import { Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function QuoteWidget() {
  const categories = motivationalQuotes?.map(q => q.category) || [];
  const [selectedCategory, setSelectedCategory] = useState(categories[0] || '');
  const [quote, setQuote] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const getQuoteFromCategory = (category) => {
    const found = motivationalQuotes.find(q => q.category === category);
    if (!found || !found.quotes?.length) return 'No quote in this category';
    return found.quotes[Math.floor(Math.random() * found.quotes.length)];
  };

  const refreshQuote = () => {
    setIsVisible(false);
    setIsLoading(true);
    setTimeout(() => {
      const newQuote = getQuoteFromCategory(selectedCategory);
      setQuote(newQuote);
      setIsVisible(true);
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    refreshQuote();
    const interval = setInterval(refreshQuote, 10000); // ⏱ every 10s
    return () => clearInterval(interval);
  }, [selectedCategory]);

  return (
    <div className="bg-[#0C1639] text-white rounded-xl p-4 shadow-md space-y-3 max-w-xl mx-auto">
      {/* Category Dropdown + Manual Refresh */}
      <div className="flex items-center justify-between">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="bg-[#14214D] text-white px-3 py-1 rounded-lg text-sm font-semibold focus:outline-none"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <button
          onClick={refreshQuote}
          className="text-blue-300 hover:text-white transition"
        >
          <Sparkles size={16} className="inline-block mr-1" />
          New
        </button>
      </div>

      {/* Quote Display */}
      {isLoading ? (
        <div className="h-6 w-3/4 bg-blue-300/20 animate-pulse rounded-md"></div>
      ) : (
        <AnimatePresence mode="wait">
          {isVisible && (
            <motion.blockquote
              key={quote}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="text-lg font-medium italic text-white leading-relaxed"
            >
              “{quote}”
            </motion.blockquote>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}
