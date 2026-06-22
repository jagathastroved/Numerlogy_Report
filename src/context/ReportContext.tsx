import { createContext, useContext, useState, ReactNode } from 'react';
import { NumerologyReportData, PersonalDetails } from '../types';
import { generateNumerologyReport } from '../data/numerologyData';

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
      try { return JSON.parse(saved); } catch (e) {}
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

      // We no longer use fallbackReport, we directly set the generated insights
      // Since generateNumerologyReport doesn't return the full NumerologyReportData shape,
      // we need to construct it or assume dynamicInsights is the full shape.
      // Assuming generateNumerologyReport now returns the full shape NumerologyReportData.
      const mockData = dynamicInsights as unknown as NumerologyReportData;
      mockData.personalDetails = details;

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
