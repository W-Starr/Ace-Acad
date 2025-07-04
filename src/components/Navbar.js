import { Link } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <nav
      className={`p-4 text-white shadow-md transition-colors duration-300 ${
        isDark ? "bg-gray-900" : ""
      }`}
      style={{ backgroundColor: isDark ? "" : "#0C1639" }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Ace-Acad
        </Link>

        {/* Links and Toggle */}
        <div className="flex items-center space-x-4">
          <Link to="/login" className="hover:underline">
            Login
          </Link>
          <Link to="/signup" className="hover:underline">
            Signup
          </Link>

          {/* Dark Mode Toggle Button */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full transition hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
