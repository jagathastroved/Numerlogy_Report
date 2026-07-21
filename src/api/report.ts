import { PersonalDetails } from '../types';
import { Country } from 'country-state-city';

const API_URL = 'https://ai-numerology.astroved.com/generate-report';

export const fetchNumerologyReport = async (details: PersonalDetails) => {
  try {
    const countryObj = Country.getCountryByCode(details.birthCountry.toUpperCase());
    const countryName = countryObj ? countryObj.name : details.birthCountry;

    const payload = {
      fullName: details.fullName,
      email: details.email,
      gender: details.gender ? details.gender.toLowerCase() : '',
      birthDay: details.birthDay.padStart(2, '0'),
      birthMonth: details.birthMonth.padStart(2, '0'),
      birthYear: details.birthYear,
      birthHour: details.birthHour.padStart(2, '0'),
      birthMinute: details.birthMinute.padStart(2, '0'),
      birthSecond: (details.birthSecond || '00').padStart(2, '0'),
      birthCountry: countryName.toLowerCase(),
      birthCity: details.birthCity.toLowerCase()
    };

    console.log('Sending API Payload:', payload);

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true'
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Error fetching report: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};
