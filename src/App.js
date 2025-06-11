import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Library from './pages/Library';
import StudyGuide from './pages/StudyGuide';
import StudyGuidee from './pages/StudyGuidee';
import Flashcard from "./pages/Flashcard";
import MockTest from "./pages/MockTest";
import QuizScreen from './Quizscreen';
import ReminderScheduler from './Remindersheduler';

// Wrapper to access location outside <BrowserRouter>
const AppWrapper = () => {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const authRoutes = ['/', '/login', '/signup'];
    setShowNavbar(authRoutes.includes(location.pathname));
  }, [location.pathname]);

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/library" element={<Library />} />
        <Route path="/studyguide" element={<StudyGuide />} />
        <Route path="/studyguidee" element={<StudyGuidee />} />
        <Route path="/flashcard" element={<Flashcard />} />
        <Route path="/mocktest" element={<MockTest />} />
        <Route path="/quizscreen" element={<QuizScreen />} />
        <Route path="/remindersheduler" element={<ReminderScheduler />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;
