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
      
      // Dynamic calculations based on user input:
      const day = parseInt(details.birthDay) || 1;
      const month = parseInt(details.birthMonth) || 1;
      const year = parseInt(details.birthYear) || 2000;
      
      const { generateNumerologyReport } = await import('../utils/numerology');
      const { LIFE_PATH_INTERPRETATIONS } = await import('../types');
      
      const dynamicInsights = generateNumerologyReport(
        details.fullName || 'User',
        details.birthDay,
        details.birthMonth,
        details.birthYear
      );

      // Deep copy to prevent modifying the fallbackReport reference
      const mockData = JSON.parse(JSON.stringify(fallbackReport));
      mockData.personalDetails = details;
      
      // Update Core Numbers
      mockData.coreNumbers.lifePath = dynamicInsights.lifePathNumber;
      mockData.coreNumbers.destiny = dynamicInsights.destinyNumber;
      mockData.coreNumbers.challengeNumbers = dynamicInsights.enemyNumbers.slice(0, 4); // Dummy mapping for UI

      // Update Interpretations
      const realSubtitle = LIFE_PATH_INTERPRETATIONS[dynamicInsights.lifePathNumber]?.subtitle || "A journey of discovery";
      
      mockData.interpretations.lifePath = {
        title: dynamicInsights.lifePathTitle,
        subtitle: realSubtitle,
        description: dynamicInsights.lifePathDescription,
        traits: dynamicInsights.personalityTraits,
        strengths: dynamicInsights.strengths,
        challenges: dynamicInsights.challenges,
        careers: dynamicInsights.careerRecommendations,
        compatibility: dynamicInsights.relationshipCompatibility
      };
      
      mockData.interpretations.destiny = {
        title: dynamicInsights.destinyTitle,
        desc: dynamicInsights.destinyDescription
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
