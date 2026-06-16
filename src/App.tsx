import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import BirthDetailsForm from './components/BirthDetailsForm';
import AstroCalculatingSlide from './components/AstroCalculatingSlide';
import NumerologyReportLayout from './components/NumerologyReportLayout';
import { type PersonalDetails } from './types';

// Import our Numerology slide components
import AstroIntroSlide from './components/AstroIntroSlide';
import CoreNumbers from './components/CoreNumbers';
import AstroLifeMathSlide from './components/AstroLifeMathSlide';
import AstroLifeDetailSlide from './components/AstroLifeDetailSlide';
import AstroNameMathSlide from './components/AstroNameMathSlide';
import AstroOverviewSlide from './components/AstroOverviewSlide';
import AstroLoShuStorySlide from './components/AstroLoShuStorySlide';
import AstroLoShuGridSlide from './components/AstroLoShuGridSlide';
import AstroLoShuSignificanceSlide from './components/AstroLoShuSignificanceSlide';
import AstroLoShuAnalysisSlide from './components/AstroLoShuAnalysisSlide';
import AstroMonthSlide from './components/AstroMonthSlide';
import AstroCheckoutSlide from './components/AstroCheckoutSlide';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [language, setLanguage] = useState<string>('English');

  // Pre-populated defaults to Nivash, 10 Oct 2002, 10:30:00, Chennai, India
  const [personalDetails, setPersonalDetails] = useState<PersonalDetails>({
    fullName: 'Jagath',
    gender: '',
    birthDay: '',
    birthMonth: '',
    birthYear: '',
    birthHour: '',
    birthSecond: '',
    birthCountry: 'IN',
    birthCity: ''
  });
  
  const handleUpdateDetails = (updates: Partial<PersonalDetails>) => {
    setPersonalDetails((prev) => ({ ...prev, ...updates }));
  };

  return (
    <Routes>
      <Route path="/" element={
        <BirthDetailsForm
          data={personalDetails}
          language={language}
          setLanguage={setLanguage}
          onChange={handleUpdateDetails}
        />
      } />
      <Route path="/calculating" element={<AstroCalculatingSlide onComplete={() => navigate('/welcome')} />} />
      
      {/* Nested Layout for the Report Pages */}
      <Route element={<NumerologyReportLayout />}>
        <Route path="/welcome" element={<AstroIntroSlide />} />
        <Route path="/core-numbers" element={<CoreNumbers />} />
        <Route path="/life-path-math" element={<AstroLifeMathSlide />} />
        <Route path="/life-path-detail" element={<AstroLifeDetailSlide />} />
        <Route path="/name-destiny-math" element={<AstroNameMathSlide />} />
        <Route path="/numerology-overview" element={<AstroOverviewSlide />} />
        <Route path="/lo-shu-story" element={<AstroLoShuStorySlide />} />
        <Route path="/lo-shu-grid" element={<AstroLoShuGridSlide />} />
        <Route path="/lo-shu-significance" element={<AstroLoShuSignificanceSlide />} />
        <Route path="/lo-shu-analysis" element={<AstroLoShuAnalysisSlide />} />
        <Route path="/month-forecast" element={<AstroMonthSlide />} />
        <Route path="/premium-deliverables" element={<AstroCheckoutSlide />} />
      </Route>
    </Routes>
  );
}
