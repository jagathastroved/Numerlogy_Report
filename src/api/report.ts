import { PersonalDetails } from '../types';
import { Country } from 'country-state-city';

const API_URL = '/api/proxy/generate-report';

export const fetchNumerologyReport = async (details: PersonalDetails) => {
  try {
    const countryObj = Country.getCountryByCode(details.birthCountry.toUpperCase());
    const countryName = countryObj ? countryObj.name : details.birthCountry;

    const payload = {
      fullName: details.fullName,
      email: details.email,
      gender: details.gender,
      birthDay: details.birthDay,
      birthMonth: details.birthMonth,
      birthYear: details.birthYear,
      birthHour: details.birthHour,
      birthMinute: details.birthMinute,
      birthSecond: details.birthSecond || '00',
      birthCountry: countryName,
      birthCity: details.birthCity
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
