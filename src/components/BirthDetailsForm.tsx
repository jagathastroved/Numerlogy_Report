import React, { useState, useMemo } from 'react';
import { type PersonalDetails } from '../types';
import { useNavigate } from 'react-router-dom';
import { Country, City } from 'country-state-city';
import { useReport } from '../context/ReportContext';
import { motion, AnimatePresence } from 'motion/react';

interface BirthDetailsFormProps {
  data: PersonalDetails;
  language: string;
  setLanguage: (lang: string) => void;
  onChange: (updates: Partial<PersonalDetails>) => void;
}

const MONTHS = [
  { name: 'January', val: '1' },
  { name: 'February', val: '2' },
  { name: 'March', val: '3' },
  { name: 'April', val: '4' },
  { name: 'May', val: '5' },
  { name: 'June', val: '6' },
  { name: 'July', val: '7' },
  { name: 'August', val: '8' },
  { name: 'September', val: '9' },
  { name: 'October', val: '10' },
  { name: 'November', val: '11' },
  { name: 'December', val: '12' }
];

export default function BirthDetailsForm({
  data,
  language,
  setLanguage,
  onChange,
}: BirthDetailsFormProps) {
  const navigate = useNavigate();
  const { fetchReport } = useReport();
  const [activeTab, setActiveTab] = useState<'Numerology'>('Numerology');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const availableCities = useMemo(() => {
    if (!data.birthCountry) return [];
    return City.getCitiesOfCountry(data.birthCountry) || [];
  }, [data.birthCountry]);

  const filteredCities = useMemo(() => {
    if (!data.birthCountry) return [];
    if (!data.birthCity || data.birthCity.length < 3) return [];
    const lower = data.birthCity.toLowerCase();
    return availableCities.filter(c => c.name.toLowerCase().includes(lower)).slice(0, 100);
  }, [data.birthCity, availableCities, data.birthCountry]);

  const days = Array.from({ length: 31 }, (_, i) => String(i + 1));
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1920 + 1 }, (_, i) => String(currentYear - i));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchReport(data);
    navigate('/calculating');
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center p-4 relative"
      style={{ backgroundImage: "url('/spiritual_bg.png')" }}
    >
      <div className="max-w-6xl w-full h-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 py-4">

        {/* Left Side Text */}
        <div className="text-white space-y-6">
          <h1 className="text-4xl md:text-5xl font-normal leading-tight text-white drop-shadow-md font-serif">
            Get All Your Questions <br /> Answered — Right Here
          </h1>
        </div>

        {/* Right Side Form Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-md w-full ml-auto flex flex-col">

          {/* Tabs */}
          <div className="flex w-full shrink-0">
            <button
              onClick={() => setActiveTab('Numerology')}
              className={`flex-1 py-4 text-center font-normal text-sm transition-colors duration-200 ${activeTab === 'Numerology'
                ? 'bg-[#F97316] text-white'
                : 'bg-white text-gray-500 hover:bg-gray-50'
                }`}
            >
              Numerology
            </button>
          </div>

          <div className="p-6 md:p-8 space-y-6 relative">
            {/* Header Title Grid */}
            <div className="flex justify-between items-start">
              <div>
                <h2 className="font-serif text-2xl font-normal text-gray-800 tracking-tight leading-none">
                  Enter Your Birth Details
                </h2>
                <p className="text-gray-500 text-sm mt-2 font-medium">
                  Get your personalized Kundli with accurate predictions.
                </p>
              </div>

              {/* Language Selection */}
              <div className="relative mt-1">
                <label htmlFor="language-select" className="absolute -top-2 left-2 px-1 bg-white text-[10px] text-red-500 font-normal tracking-wide z-10">
                  Language
                </label>
                <div className="relative">
                  <select
                    id="language-select"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="pl-3 pr-8 py-2 text-sm font-normal text-gray-700 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 cursor-pointer appearance-none relative z-0"
                  >
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-gray-500 z-10">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Input Details form */}
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Row: Name and Gender */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    id="name-input"
                    type="text"
                    required
                    value={data.fullName}
                    onChange={(e) => onChange({ fullName: e.target.value })}
                    className="w-full px-4 py-3 text-sm text-gray-800 font-medium placeholder-gray-800 border border-gray-200 rounded-xl focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
                    placeholder="Your Name"
                  />
                </div>

                <div className="relative">
                  <label htmlFor="gender-select" className="absolute -top-2 left-3 px-1 bg-white text-[10px] text-red-500 font-normal tracking-wide z-10">
                    Gender
                  </label>
                  <div className="relative">
                    <select
                      id="gender-select"
                      required
                      value={data.gender}
                      onChange={(e) => onChange({ gender: e.target.value as 'Male' | 'Female' | 'Prefer not to say' })}
                      className="w-full pl-4 pr-8 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 cursor-pointer appearance-none relative z-0"
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Prefer not to say">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500 z-10">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Day / Month / Year Dropdowns */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {/* Day */}
                <div className="relative">
                  <label htmlFor="day-select" className="absolute -top-2 left-2 px-1 bg-white text-[10px] text-red-400 font-normal tracking-wide z-10">
                    Day
                  </label>
                  <div className="relative">
                    <select
                      id="day-select"
                      required
                      value={data.birthDay}
                      onChange={(e) => onChange({ birthDay: e.target.value })}
                      className="w-full pl-3 pr-8 py-3 text-sm text-gray-700 font-medium bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 cursor-pointer appearance-none relative z-0"
                    >
                      {days.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-gray-500 z-10">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                {/* Month */}
                <div className="relative">
                  <label htmlFor="month-select" className="absolute -top-2 left-2 px-1 bg-white text-[10px] text-red-400 font-normal tracking-wide z-10">
                    Month
                  </label>
                  <div className="relative">
                    <select
                      id="month-select"
                      required
                      value={data.birthMonth}
                      onChange={(e) => onChange({ birthMonth: e.target.value })}
                      className="w-full pl-2 pr-8 py-3 text-sm text-gray-700 font-medium bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 cursor-pointer appearance-none relative z-0"
                    >
                      {MONTHS.map((m) => (
                        <option key={m.val} value={m.val}>{m.name}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-gray-500 z-10">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                {/* Year */}
                <div className="relative">
                  <label htmlFor="year-select" className="absolute -top-2 left-2 px-1 bg-white text-[10px] text-red-400 font-normal tracking-wide z-10">
                    Year
                  </label>
                  <div className="relative">
                    <select
                      id="year-select"
                      required
                      value={data.birthYear}
                      onChange={(e) => onChange({ birthYear: e.target.value })}
                      className="w-full pl-3 pr-8 py-3 text-sm text-gray-700 font-medium bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 cursor-pointer appearance-none relative z-0"
                    >
                      {years.map((y) => (
                        <option key={y} value={y}>{y}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-gray-500 z-10">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Birth Time: Hour / Minute */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                {/* Hour */}
                <div className="relative">
                  <label id="hour-label" htmlFor="hour-select" className="absolute -top-2 left-2 px-1 bg-white text-[10px] text-red-400 font-normal tracking-wide z-10">
                    Birth Hour
                  </label>
                  <div className="relative">
                    <select
                      id="hour-select"
                      aria-labelledby="hour-label"
                      required
                      value={data.birthHour}
                      onChange={(e) => onChange({ birthHour: e.target.value })}
                      className="w-full pl-3 pr-8 py-3 text-sm text-gray-700 font-medium bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 cursor-pointer appearance-none relative z-0"
                    >
                      {Array.from({ length: 24 }, (_, i) => {
                        const ampm = i < 12 ? 'am' : 'pm';
                        const displayHour = i % 12 || 12;
                        return <option key={i} value={String(i).padStart(2, '0')}>{`${displayHour} (${ampm})`}</option>;
                      })}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-gray-500 z-10">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                {/* Minute */}
                <div className="relative">
                  <label id="minute-label" htmlFor="minute-select" className="absolute -top-2 left-2 px-1 bg-white text-[10px] text-red-400 font-normal tracking-wide z-10">
                    Birth Minute
                  </label>
                  <div className="relative">
                    <select
                      id="minute-select"
                      aria-labelledby="minute-label"
                      required
                      value={data.birthMinute}
                      onChange={(e) => onChange({ birthMinute: e.target.value })}
                      className="w-full pl-3 pr-8 py-3 text-sm text-gray-700 font-medium bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 cursor-pointer appearance-none relative z-0"
                    >
                      {Array.from({ length: 60 }, (_, i) => String(i).padStart(2, '0')).map((min) => (
                        <option key={min} value={min}>{min}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-gray-500 z-10">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row: Country and City */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="relative">
                  <label htmlFor="country-select" className="absolute -top-2 left-3 px-1 bg-white text-[10px] text-red-400 font-normal tracking-wide z-10">
                    Country
                  </label>
                  <div className="relative">
                    <select
                      id="country-select"
                      required
                      value={data.birthCountry}
                      onChange={(e) => onChange({ birthCountry: e.target.value, birthCity: '' })}
                      className="w-full pl-4 pr-8 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 cursor-pointer appearance-none relative z-0"
                    >
                      <option value="">Select Country</option>
                      {Country.getAllCountries().map((c) => (
                        <option key={c.isoCode} value={c.isoCode}>{c.name}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500 z-10">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="city-input" className="absolute -top-2 left-3 px-1 bg-white text-[10px] text-red-400 font-normal tracking-wide z-10">
                    City
                  </label>
                  <div className="relative">
                    <input
                      id="city-input"
                      type="text"
                      required
                      value={data.birthCity}
                      onChange={(e) => {
                        onChange({ birthCity: e.target.value });
                        setShowSuggestions(true);
                      }}
                      onFocus={() => setShowSuggestions(true)}
                      onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                      disabled={!data.birthCountry}
                      placeholder="Type your city"
                      className="w-full pl-4 pr-8 py-3 text-sm font-medium text-gray-800 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 cursor-text relative z-0 disabled:opacity-50"
                      autoComplete="off"
                    />
                    <AnimatePresence>
                      {showSuggestions && filteredCities.length > 0 && (
                        <motion.ul
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="absolute left-0 right-0 top-full z-50 mt-1 max-h-48 overflow-y-auto bg-white border border-gray-200 rounded-xl shadow-xl py-1"
                        >
                          {filteredCities.map((city, idx) => (
                            <li
                              key={`${city.name}-${idx}`}
                              onMouseDown={(e) => e.preventDefault()}
                              onClick={() => {
                                onChange({ birthCity: city.name });
                                setShowSuggestions(false);
                              }}
                              className="px-4 py-2 text-sm text-gray-700 font-medium hover:bg-orange-50 hover:text-orange-600 cursor-pointer transition-colors"
                            >
                              {city.name}
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Orange CTA Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-[#F97316] hover:bg-orange-600 active:scale-[0.98] text-white font-normal text-base rounded-xl shadow-lg transition-all duration-200 cursor-pointer text-center"
                >
                  Create Your Free Kundli Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
