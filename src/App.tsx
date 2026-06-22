import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import BirthDetailsForm from './components/flow/BirthDetailsForm';
import AstroCalculatingSlide from './components/flow/AstroCalculatingSlide';
import NumerologyReportLayout from './components/layout/NumerologyReportLayout';
import { type PersonalDetails } from './types';

// Import our Numerology slide components
import Welcome from './components/slides/Welcome';
import CoreNumbers from './components/slides/CoreNumbers';
import LifePathMath from './components/slides/LifePathMath';
import LifePathDetail from './components/slides/LifePathDetail';
import NameDestinyMath from './components/slides/NameDestinyMath';
import NumerologyOverview from './components/slides/NumerologyOverview';
import LuckyNumbers from './components/slides/LuckyNumbers';
import MonthForecast from './components/slides/MonthForecast';
import PremiumDeliverables from './components/slides/PremiumDeliverables';

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
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/core-numbers" element={<CoreNumbers />} />
        <Route path="/life-path-math" element={<LifePathMath />} />
        <Route path="/life-path-detail" element={<LifePathDetail />} />
        <Route path="/name-destiny-math" element={<NameDestinyMath />} />
        <Route path="/numerology-overview" element={<NumerologyOverview />} />
        <Route path="/lucky-numbers" element={<LuckyNumbers />} />
        <Route path="/month-forecast" element={<MonthForecast />} />
        <Route path="/premium-deliverables" element={<PremiumDeliverables />} />
      </Route>
    </Routes>
  );
}
