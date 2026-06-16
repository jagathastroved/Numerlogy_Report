import React, { createContext, useContext, useState, ReactNode } from 'react';
import { NumerologyReportData, PersonalDetails } from '../types';
import { fallbackReport } from '../data/fallbackReport';
import { calculateLifePathNumber, reduceToNumerologyDigit } from '../utils/numerology';

interface ReportContextType {
  reportData: NumerologyReportData | null;
  isLoading: boolean;
  fetchReport: (details: PersonalDetails) => Promise<void>;
}

const ReportContext = createContext<ReportContextType | undefined>(undefined);

export function ReportProvider({ children }: { children: ReactNode }) {
  const [reportData, setReportData] = useState<NumerologyReportData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchReport = async (details: PersonalDetails) => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      // const response = await fetch('/api/numerology', { method: 'POST', body: JSON.stringify(details) });
      // const data = await response.json();
      
      // Simulating API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Temporary logic to ensure Life Path and Destiny match user input so UI behaves as expected:
      const day = parseInt(details.birthDay) || 1;
      const month = parseInt(details.birthMonth) || 1;
      const year = parseInt(details.birthYear) || 2000;
      const lifePath = reduceToNumerologyDigit(reduceToNumerologyDigit(day) + reduceToNumerologyDigit(month) + reduceToNumerologyDigit(year));

      const mockData = { ...fallbackReport, personalDetails: details };
      mockData.coreNumbers.lifePath = lifePath;
      
      setReportData(mockData);
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
