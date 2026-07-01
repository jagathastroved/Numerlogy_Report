import { createContext, useContext, useState, ReactNode } from 'react';
import { NumerologyReportData, PersonalDetails } from '../types';
import { fetchNumerologyReport } from '../api/report';

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

      // Call actual API
      const apiData = await fetchNumerologyReport(details);

      // Map API response to the frontend format
      const mappedData: NumerologyReportData = {
        personalDetails: details,
        coreNumbers: {
          birthNumber: apiData.coreNumbers?.birthNumber || 0,
          destinyNumber: apiData.coreNumbers?.destinyNumber || 0,
          nameNumber: apiData.coreNumbers?.nameNumber || 0,
          lifePathNumber: apiData.lifePathDetail?.lifePathNumber || apiData.lifePathMath?.lifePathNumber || 0,
          birthNumberContent: apiData.coreNumbers?.birthNumberContent || '',
          destinyNumberContent: apiData.coreNumbers?.destinyNumberContent || '',
          nameNumberContent: apiData.coreNumbers?.nameNumberContent || ''
        },
        interpretations: {
          lifePath: {
            title: `Life Path ${apiData.lifePathDetail?.lifePathNumber || ''}`,
            subtitle: "Your Foundational Vibration",
            description: apiData.lifePathDetail?.numberContent || '',
            strengths: apiData.lifePathDetail?.topStrengths || [],
            challenges: apiData.lifePathDetail?.topChallenges || [],
          },
          destiny: {
            title: `Name Number ${apiData.coreNumbers?.nameNumber || apiData.nameDestinyNumberPage?.nameDestinyNumber || ''}`,
            desc: apiData.nameDestinyNumberPage?.destinyNumberContent || apiData.coreNumbers?.destinyNumberContent || ''
          }
        },
        lucky_traits: {
          lucky_numbers: apiData.luckyTraits?.luckyNumbers || [],
          lucky_colors: apiData.luckyTraits?.luckyColors || []
        },
        monthlyForecast: {
          monthForecastNumber: apiData.monthlyForecast?.monthForecastNumber || 0,
          monthForecastContent: apiData.monthlyForecast?.monthForecastContent || ''
        }
      };

      setReportData(mappedData);
    } catch (error) {
      console.error('Failed to fetch report:', error);
      // Fallback static content on error
      setReportData({
        personalDetails: details,

        coreNumbers: {
          birthNumber: 7,
          destinyNumber: 5,
          nameNumber: 9,
          lifePathNumber: 3,

          birthNumberContent:
            "Your Birth Number reveals the qualities you naturally possess and the way you approach life. It reflects your personality, instincts, strengths, and the characteristics that shape your everyday decisions. This number highlights your natural abilities, how you respond to challenges, and the talents that come effortlessly to you. Understanding your Birth Number helps you recognize your true potential and make the most of your unique gifts throughout life.",

          destinyNumberContent:
            "Your Destiny Number represents your life's purpose and the path you are meant to follow. It highlights your talents, ambitions, and the opportunities that guide your personal and professional growth. This number reflects your long-term potential and the contributions you are capable of making. By understanding your Destiny Number, you can align your goals with your true purpose and make decisions that support a fulfilling and meaningful life journey.",

          nameNumberContent:
            "Your Name Number reflects the energy and vibration associated with your name. It reveals how you express yourself, communicate with others, and the impression you leave on the people around you. This number also highlights your strengths, social qualities, and personal style. Understanding your Name Number helps you gain greater confidence, build stronger relationships, and make better use of the qualities that define your public identity."
        },

        interpretations: {
          lifePath: {
            title: "Life Path",
            subtitle: "The Creative Communicator",
            description:
              "As a Life Path Number 3, you are naturally creative, expressive, and optimistic. You have a gift for communicating ideas and inspiring others through your words, talents, or artistic abilities. Your enthusiasm and positive outlook attract opportunities, while your imagination allows you to think beyond limits. By staying focused and believing in your abilities, you can achieve lasting success and make a meaningful impact.",
            strengths: [
              "Creative thinking",
              "Excellent communication",
              "Optimistic mindset",
              "Charismatic personality"
            ],
            challenges: [
              "Difficulty staying focused",
              "Emotional sensitivity",
              "Occasional self-doubt"
            ]
          },

          destiny: {
            title: "Name Number",
            desc:
              "Your Name Number reflects the energy expressed through your name and the qualities others recognize in you. It highlights your communication style, personal strengths, and the influence you have on those around you. This number encourages you to embrace your individuality, use your talents with confidence, and build meaningful relationships while making a positive contribution to the world."
          }
        },

        lucky_traits: {
          lucky_numbers: [3, 7, 9, 12, 21],
          lucky_colors: ["Yellow", "Black", "Gold"]
        },

        monthlyForecast: {
          monthForecastNumber: 5,
          monthForecastContent:
            "This month is filled with opportunities for growth, learning, and positive change. Unexpected situations may encourage you to step outside your comfort zone and embrace new experiences. Staying flexible, confident, and open-minded will help you make the most of these opportunities. Focus on maintaining balance, making thoughtful decisions, and using your creativity to overcome challenges and move closer to your personal and professional goals."
        }
      });
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
