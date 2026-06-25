import { createContext, useContext, useState, ReactNode } from 'react';
import { NumerologyReportData, PersonalDetails } from '../types';
import { generateNumerologyReport, fallbackReport } from '../data/numerologyData';

interface ReportContextType {
  reportData: NumerologyReportData | null;
  isLoading: boolean;
  fetchReport: (details: PersonalDetails) => Promise<void>;
}

const ReportContext = createContext<ReportContextType | undefined>(undefined);

export function ReportProvider({ children }: { children: ReactNode }) {
  const [reportData, setReportData] = useState<NumerologyReportData | null>(() => {
    const saved = sessionStorage.getItem('numerologyReportData');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { }
    }
    return null;
  });
  const [isLoading, setIsLoading] = useState(false);

  const fetchReport = async (details: PersonalDetails) => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      // const response = await fetch('/api/numerology', { method: 'POST', body: JSON.stringify(details) });
      // const data = await response.json();

      // Simulating API delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      const dynamicInsights = generateNumerologyReport(
        details.fullName || 'User',
        details.birthDay,
        details.birthMonth,
        details.birthYear
      );

      // Construct the full NumerologyReportData shape using dynamic insights and fallback for missing properties
      const mockData: NumerologyReportData = {
        ...fallbackReport,
        personalDetails: details,
        coreNumbers: {
          birthNumber: dynamicInsights.destinyNumber,
          destinyNumber: dynamicInsights.lifePathNumber,
          nameNumber: dynamicInsights.destinyNumber,
        },
        interpretations: {
          lifePath: {
            title: dynamicInsights.lifePathTitle,
            subtitle: "Your Life Path",
            description: dynamicInsights.lifePathDescription,
            traits: dynamicInsights.personalityTraits,
            strengths: dynamicInsights.strengths,
            challenges: dynamicInsights.challenges,
            careers: dynamicInsights.careerRecommendations,
            compatibility: dynamicInsights.relationshipCompatibility
          },
          destiny: {
            title: dynamicInsights.destinyTitle,
            desc: dynamicInsights.destinyDescription
          }
        }
      };

      setReportData(mockData);
      sessionStorage.setItem('numerologyReportData', JSON.stringify(mockData));
    } catch (error) {
      console.error('Failed to fetch report:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ReportContext.Provider value={{ reportData, isLoading, fetchReport }}>
      {children}
    </ReportContext.Provider>
  );
}

export function useReport() {
  const context = useContext(ReportContext);
  if (context === undefined) {
    throw new Error('useReport must be used within a ReportProvider');
  }
  return context;
}
