import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import BirthDetailsForm from './components/flow/BirthDetailsForm';
import AstroCalculatingSlide from './components/flow/AstroCalculatingSlide';
import NumerologyReportLayout from './components/layout/NumerologyReportLayout';
import { type PersonalDetails } from './types';

// Import our Numerology slide components
import AstroIntroSlide from './components/slides/AstroIntroSlide';
import CoreNumbers from './components/slides/CoreNumbers';
import AstroLifeMathSlide from './components/slides/AstroLifeMathSlide';
import AstroLifeDetailSlide from './components/slides/AstroLifeDetailSlide';
import AstroNameMathSlide from './components/slides/AstroNameMathSlide';
import AstroOverviewSlide from './components/slides/AstroOverviewSlide';
import AstroMonthSlide from './components/slides/AstroMonthSlide';
import AstroLuckyNumbersSlide from './components/slides/AstroLuckyNumbersSlide';
import AstroCheckoutSlide from './components/slides/AstroCheckoutSlide';

export default function App() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState<string>('English');

  // Pre-populated defaults to Nivash, 10 Oct 2002, 10:30:00, Chennai, India
  const [personalDetails, setPersonalDetails] = useState<PersonalDetails>({
    fullName: '',
    email: '',
    gender: '',
    birthDay: '',
    birthMonth: '',
    birthYear: '',
    birthHour: '12',
    birthMinute: '00',
    birthAmPm: 'AM',
    birthSecond: '00',
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
        <Route path="/lucky-numbers" element={<AstroLuckyNumbersSlide />} />
        <Route path="/month-forecast" element={<AstroMonthSlide />} />
        <Route path="/premium-deliverables" element={<AstroCheckoutSlide />} />
      </Route>
    </Routes>
  );
}
