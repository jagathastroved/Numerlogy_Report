import { NumerologyReportData, LIFE_PATH_INTERPRETATIONS, DESTINY_INTERPRETATIONS } from '../types';

export const fallbackReport: NumerologyReportData = {
  personalDetails: {
    fullName: "",
    gender: "",
    birthDay: "",
    birthMonth: "",
    birthYear: "",
    birthHour: "",
    birthMinute: "",
    birthSecond: "",
    birthCountry: "IN",
    birthCity: ""
  },
  coreNumbers: {
    lifePath: 7,
    destiny: 2,
    name: 8,
    personality: 9,
    expression: 2,
    soulUrge: 2,
    subconsciousSelf: 4,
    challengeNumbers: [0, 7, 7, 7]
  },
  interpretations: {
    lifePath: LIFE_PATH_INTERPRETATIONS[5],
    destiny: DESTINY_INTERPRETATIONS[1]
  },
  loShuGrid: {
    grid: { "1": 1, "2": 2, "0": 3 },
    story: "Your Lo Shu Grid reveals a strong balance of energy...",
    analysis: "The presence of these numbers indicates a dynamic life path full of adventure and spiritual exploration."
  },
  monthlyForecast: "This month you will experience a surge in creative energy and new opportunities for travel."
};
