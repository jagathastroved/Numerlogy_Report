import { useState, useEffect } from 'react';
import { PersonalDetails } from '../../types';
import { useNavigate } from 'react-router-dom';
import { Country, ICountry } from 'country-state-city';
import { useReport } from '../../context/ReportContext';
import { motion, AnimatePresence } from 'motion/react';
import CelestialBackground from '../animations/CelestialBackground';
import CustomSelect from '../ui/CustomSelect';

interface BirthDetailsFormProps {
  data: PersonalDetails;
  language: string;
  setLanguage: (lang: string) => void;
  onChange: (updates: Partial<PersonalDetails>) => void;
}

const MONTHS = [
  { name: 'Jan', val: '1' },
  { name: 'Feb', val: '2' },
  { name: 'Mar', val: '3' },
  { name: 'Apr', val: '4' },
  { name: 'May', val: '5' },
  { name: 'Jun', val: '6' },
  { name: 'Jul', val: '7' },
  { name: 'Aug', val: '8' },
  { name: 'Sep', val: '9' },
  { name: 'Oct', val: '10' },
  { name: 'Nov', val: '11' },
  { name: 'Dec', val: '12' }
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

  const [apiCities, setApiCities] = useState<{ name: string, displayName: string }[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isValidCity, setIsValidCity] = useState(false);

  useEffect(() => {
    if (!data.birthCountry || !data.birthCity || data.birthCity.length < 3) {
      setApiCities([]);
      return;
    }

    const timer = setTimeout(async () => {
      setIsSearching(true);
      try {
        const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(data.birthCity)}&count=20&language=en&format=json`);
        const dataJson = await response.json();

        if (!dataJson.results) {
          setApiCities([]);
          return;
        }

        // Filter by selected country
        const filteredByCountry = dataJson.results.filter((item: any) =>
          item.country_code.toLowerCase() === data.birthCountry.toLowerCase()
        );

        // Map the results to a unique list of city names
        const formattedCities = filteredByCountry.map((item: any) => ({
          name: item.name,
          displayName: [item.name, item.admin2, item.admin1, item.country].filter(Boolean).join(", ")
        }));

        // Remove duplicates by name
        const uniqueCities = Array.from(new Map(formattedCities.map((item: any) => [item.name, item])).values()) as { name: string, displayName: string }[];

        setApiCities(uniqueCities);
      } catch (error) {
        console.error("Error fetching cities:", error);
      } finally {
        setIsSearching(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [data.birthCity, data.birthCountry]);

  const days = Array.from({ length: 31 }, (_, i) => String(i + 1));
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1920 + 1 }, (_, i) => String(currentYear - i));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (data.birthCountry && (!data.birthCity || !isValidCity)) {
      alert("Please select a valid city from the suggested list.");
      return;
    }
    fetchReport(data);
    navigate('/calculating');
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-4 relative overflow-x-hidden overflow-y-auto"
    >
      <div className="fixed inset-0 z-0 bg-[#0B0F19]">
        <CelestialBackground />
      </div>
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center relative z-10 py-8 md:py-12">

        {/* Left Side Text */}
        <div className="text-white space-y-6 flex flex-col items-center md:items-start w-full">
          <h1 className="text-4xl md:text-5xl font-normal leading-tight text-white drop-shadow-md font-serif text-center md:text-left">
            Discover Your True Path <br className="hidden md:block" /> Through Numerology
          </h1>
          <p className="text-white/90 text-sm md:text-base leading-relaxed font-normal max-w-lg mx-auto md:mx-0 text-center md:text-left">
            Unlock the hidden meanings of your birth numbers and name. Gain deep insights into your personality, destiny, and life's true purpose.
          </p>

          <div className="space-y-4 pt-4 border-t border-white/20 max-w-md w-full">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600/20 flex items-center justify-center border border-indigo-500/50 mt-0.5">
                <svg className="w-3.5 h-3.5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div className="ml-3">
                <h3 className="text-base font-medium text-white">Core & Birth Analysis</h3>
                <p className="text-sm text-white/70 mt-0.5">Discover the deep meanings behind your birth numbers.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600/20 flex items-center justify-center border border-indigo-500/50 mt-0.5">
                <svg className="w-3.5 h-3.5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div className="ml-3">
                <h3 className="text-base font-medium text-white">Name Destiny</h3>
                <p className="text-sm text-white/70 mt-0.5">Understand how your name vibrates and shapes your true destiny.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600/20 flex items-center justify-center border border-indigo-500/50 mt-0.5">
                <svg className="w-3.5 h-3.5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div className="ml-3">
                <h3 className="text-base font-medium text-white">Lucky & Friendly Numbers</h3>
                <p className="text-sm text-white/70 mt-0.5">Unlock the specific numbers that bring you harmony and success.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600/20 flex items-center justify-center border border-indigo-500/50 mt-0.5">
                <svg className="w-3.5 h-3.5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div className="ml-3">
                <h3 className="text-base font-medium text-white">Month Forecast</h3>
                <p className="text-sm text-white/70 mt-0.5">Get actionable predictions and guidance for the upcoming months.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Form Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-visible max-w-md w-full mx-auto md:ml-auto md:mr-0 flex flex-col max-h-full">

          {/* Tabs */}
          <div className="flex w-full shrink-0">
            <button
              onClick={() => setActiveTab('Numerology')}
              className={`flex-1 py-3 text-center font-normal text-sm transition-colors duration-200 rounded-t-2xl ${activeTab === 'Numerology'
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-500 hover:bg-gray-50'
                }`}
            >
              Numerology
            </button>
          </div>

          <div className="p-5 md:p-6 space-y-4 relative flex-1">
            {/* Header Title Grid */}
            <div className="flex justify-between items-start">
              <div>
                <h2 className="font-serif text-xl font-normal text-gray-800 tracking-tight leading-none">
                  Enter Your Birth Details
                </h2>
                <p className="text-gray-500 text-sm mt-2 font-medium">
                  Get your personalized Numerology report with accurate predictions.
                </p>
              </div>

              {/* Language Selection */}
              <div className="relative mt-1">
                <label htmlFor="language-select" className="absolute -top-2 left-2 px-1 bg-white text-[10px] text-indigo-600 font-normal tracking-wide z-10">
                  Language
                </label>
                <div className="relative">
                  <CustomSelect
                    id="language-select"
                    value={language}
                    onChange={(val) => setLanguage(val)}
                    options={['English', 'Hindi']}
                    className="!pl-3 !pr-8 !py-2 !text-sm border-gray-200 rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Input Details form */}
            <form onSubmit={handleSubmit} className="space-y-3">

              {/* Row: Name and Gender */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="relative">
                  <label htmlFor="name-input" className="absolute -top-2 left-3 px-1 bg-white text-[10px] text-indigo-600 font-normal tracking-wide z-10">
                    Full Name
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    required
                    value={data.fullName}
                    onChange={(e) => onChange({ fullName: e.target.value })}
                    className="w-full px-4 py-3 text-sm text-gray-800 font-medium placeholder-gray-500 border border-gray-200 rounded-xl focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                    placeholder="Your Name"
                  />
                </div>

                <div className="relative">
                  <label htmlFor="gender-select" className="absolute -top-2 left-3 px-1 bg-white text-[10px] text-indigo-600 font-normal tracking-wide z-10">
                    Gender
                  </label>
                  <div className="relative">
                    <CustomSelect
                      id="gender-select"
                      required
                      value={data.gender}
                      onChange={(val) => onChange({ gender: val as 'Male' | 'Female' | 'Prefer not to say' })}
                      placeholder="Select Gender"
                      options={[
                        { value: 'Male', label: 'Male' },
                        { value: 'Female', label: 'Female' },
                        { value: 'Prefer not to say', label: 'Other' }
                      ]}
                      className="!pl-4 !pr-8 !py-3 !text-sm border-gray-200 rounded-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Email Address */}
              <div className="grid grid-cols-1 gap-3 pt-1">
                <div className="relative mt-1">
                  <label htmlFor="email-input" className="absolute -top-2 left-3 px-1 bg-white text-[10px] text-indigo-600 font-normal tracking-wide z-10">
                    Email Address
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    required
                    value={data.email}
                    onChange={(e) => onChange({ email: e.target.value })}
                    className="w-full px-4 py-3 text-sm text-gray-800 font-medium placeholder-gray-500 border border-gray-200 rounded-xl focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              {/* Day / Month / Year Dropdowns */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-1">
                {/* Day */}
                <div className="relative">
                  <label htmlFor="day-select" className="absolute -top-2 left-2 px-1 bg-white text-[10px] text-indigo-600 font-normal tracking-wide z-10">
                    Day
                  </label>
                  <div className="relative">
                    <CustomSelect
                      id="day-select"
                      required
                      value={data.birthDay}
                      onChange={(val) => onChange({ birthDay: val })}
                      placeholder="Day"
                      options={days}
                      className="!pl-2 sm:!pl-3 !pr-6 sm:!pr-8 !py-3 !text-xs sm:!text-sm border-gray-200 rounded-lg"
                    />
                  </div>
                </div>

                {/* Month */}
                <div className="relative">
                  <label htmlFor="month-select" className="absolute -top-2 left-2 px-1 bg-white text-[10px] text-indigo-600 font-normal tracking-wide z-10">
                    Month
                  </label>
                  <div className="relative">
                    <CustomSelect
                      id="month-select"
                      required
                      value={data.birthMonth}
                      onChange={(val) => onChange({ birthMonth: val })}
                      placeholder="Month"
                      options={MONTHS.map(m => ({ value: m.val, label: m.name }))}
                      className="!pl-2 sm:!pl-3 !pr-6 sm:!pr-8 !py-3 !text-xs sm:!text-sm border-gray-200 rounded-lg"
                    />
                  </div>
                </div>

                {/* Year */}
                <div className="relative">
                  <label htmlFor="year-select" className="absolute -top-2 left-2 px-1 bg-white text-[10px] text-indigo-600 font-normal tracking-wide z-10">
                    Year
                  </label>
                  <div className="relative">
                    <CustomSelect
                      id="year-select"
                      required
                      value={data.birthYear}
                      onChange={(val) => onChange({ birthYear: val })}
                      placeholder="Year"
                      options={years}
                      className="!pl-2 sm:!pl-3 !pr-6 sm:!pr-8 !py-3 !text-xs sm:!text-sm border-gray-200 rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Birth Time: Hour / Minute / Second */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-1">
                {/* Hour */}
                <div className="relative">
                  <label id="hour-label" htmlFor="hour-select" className="absolute -top-2 left-2 px-1 bg-white text-[10px] text-indigo-600 font-normal tracking-wide z-10">
                    Hour
                  </label>
                  <div className="relative">
                    <CustomSelect
                      id="hour-select"
                      required
                      value={data.birthHour}
                      onChange={(val) => {
                        onChange({
                          birthHour: val
                        });
                      }}
                      placeholder="Hour"
                      options={Array.from({ length: 24 }, (_, i) => {
                        const ampm = i < 12 ? 'Am' : 'pm';
                        const displayHour12 = i === 0 ? 12 : (i > 12 ? i - 12 : i);
                        const label = `${i} (${displayHour12} ${ampm})`;
                        return { value: String(i).padStart(2, '0'), label };
                      })}
                      className="!pl-2 sm:!pl-3 !pr-6 sm:!pr-8 !py-3 !text-xs sm:!text-sm border-gray-200 rounded-lg"
                    />
                  </div>
                </div>

                {/* Minute */}
                <div className="relative">
                  <label id="minute-label" htmlFor="minute-select" className="absolute -top-2 left-2 px-1 bg-white text-[10px] text-indigo-600 font-normal tracking-wide z-10">
                    Minute
                  </label>
                  <div className="relative">
                    <CustomSelect
                      id="minute-select"
                      required
                      value={data.birthMinute}
                      onChange={(val) => onChange({ birthMinute: val })}
                      placeholder="Min"
                      options={Array.from({ length: 60 }, (_, i) => String(i).padStart(2, '0'))}
                      className="!pl-2 sm:!pl-3 !pr-6 sm:!pr-8 !py-3 !text-xs sm:!text-sm border-gray-200 rounded-lg"
                    />
                  </div>
                </div>

                {/* Second */}
                <div className="relative">
                  <label id="second-label" htmlFor="second-select" className="absolute -top-2 left-2 px-1 bg-white text-[10px] text-indigo-600 font-normal tracking-wide z-10">
                    Second
                  </label>
                  <div className="relative">
                    <CustomSelect
                      id="second-select"
                      required
                      value={data.birthSecond || '00'}
                      onChange={(val) => onChange({ birthSecond: val })}
                      placeholder="Sec"
                      options={Array.from({ length: 60 }, (_, i) => String(i).padStart(2, '0'))}
                      className="!pl-2 sm:!pl-3 !pr-6 sm:!pr-8 !py-3 !text-xs sm:!text-sm border-gray-200 rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Row: Country and City */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                <div className="relative">
                  <label htmlFor="country-select" className="absolute -top-2 left-3 px-1 bg-white text-[10px] text-indigo-600 font-normal tracking-wide z-10">
                    Country
                  </label>
                  <div className="relative">
                    <CustomSelect
                      id="country-select"
                      required
                      value={data.birthCountry}
                      onChange={(val) => onChange({ birthCountry: val, birthCity: '' })}
                      placeholder="Select Country"
                      options={Country.getAllCountries().map((c: ICountry) => ({ value: c.isoCode, label: c.name }))}
                      className="!pl-4 !pr-8 !py-3 !text-sm border-gray-200 rounded-xl"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="city-input" className="absolute -top-2 left-3 px-1 bg-white text-[10px] text-indigo-600 font-normal tracking-wide z-10">
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
                        setIsValidCity(false);
                        setShowSuggestions(true);
                      }}
                      onFocus={() => setShowSuggestions(true)}
                      onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                      disabled={!data.birthCountry}
                      placeholder="Type your city"
                      className="w-full pl-4 pr-8 py-3 text-sm font-medium text-gray-800 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 cursor-text relative z-0 disabled:opacity-50"
                      autoComplete="off"
                    />
                    <AnimatePresence>
                      {showSuggestions && data.birthCity.length >= 3 && (
                        <motion.ul
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          className="absolute left-0 right-0 bottom-full z-50 mb-1 max-h-48 overflow-y-auto bg-white border border-gray-200 rounded-xl shadow-xl py-1"
                        >
                          {isSearching ? (
                            <li className="px-4 py-3 text-sm text-gray-500 font-medium flex items-center justify-center gap-2">
                              <svg className="animate-spin h-4 w-4 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Searching for "{data.birthCity}"...
                            </li>
                          ) : apiCities.length > 0 ? (
                            apiCities.map((city, idx) => (
                              <li
                                key={`${city.name}-${idx}`}
                                onMouseDown={(e) => e.preventDefault()}
                                onClick={() => {
                                  onChange({ birthCity: city.name });
                                  setIsValidCity(true);
                                  setShowSuggestions(false);
                                }}
                                className="px-4 py-2 text-sm text-gray-700 font-medium hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer transition-colors border-b border-gray-50 last:border-0"
                              >
                                <span className="block font-bold text-gray-900">{city.name}</span>
                                <span className="block text-[10px] text-gray-500 truncate mt-0.5">{city.displayName}</span>
                              </li>
                            ))
                          ) : (
                            <li className="px-4 py-3 text-sm text-gray-500 font-medium text-center">
                              No cities found. Please check spelling.
                            </li>
                          )}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Orange CTA Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white font-normal text-base rounded-xl shadow-lg transition-all duration-200 cursor-pointer text-center"
                >
                  Create Your Numerology Report Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
