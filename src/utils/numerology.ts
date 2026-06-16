/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  LIFE_PATH_INTERPRETATIONS,
  DESTINY_INTERPRETATIONS,
  type NumerologyInsights
} from '../types';

/**
 * Reduce a number to a single digit (1-9) or a Master Number (11, 22, 33)
 */
export function reduceToNumerologyDigit(num: number): number {
  if (num === 11 || num === 22 || num === 33) {
    return num;
  }
  
  let current = num;
  while (current > 9) {
    // Sum digits
    let sum = 0;
    while (current > 0) {
      sum += current % 10;
      current = Math.floor(current / 10);
    }
    current = sum;
    
    // Check if intermediate sum is a Master Number
    if (current === 11 || current === 22 || current === 33) {
      return current;
    }
  }
  return current;
}

/**
 * Pythagorean Letter Mapping:
 * A=1, B=2, C=3, D=4, E=5, F=6, G=7, H=8, I=9
 * J=1, K=2, L=3, M=4, N=5, O=6, P=7, Q=8, R=9
 * S=1, T=2, U=3, V=4, W=5, X=6, Y=7, Z=8
 */
const PYTHAGOREAN_VALUE: Record<string, number> = {
  A: 1, J: 1, S: 1,
  B: 2, K: 2, T: 2,
  C: 3, L: 3, U: 3,
  D: 4, M: 4, V: 4,
  E: 5, N: 5, W: 5,
  F: 6, O: 6, X: 6,
  G: 7, P: 7, Y: 7,
  H: 8, Q: 8, Z: 8,
  I: 9, R: 9
};

/**
 * Calculate the Destiny Number based on Full Name
 */
export function calculateDestinyNumber(fullName: string): number {
  const letters = fullName.toUpperCase().replace(/[^A-Z]/g, '');
  let sum = 0;
  for (let i = 0; i < letters.length; i++) {
    const char = letters[i];
    if (PYTHAGOREAN_VALUE[char]) {
      sum += PYTHAGOREAN_VALUE[char];
    }
  }
  return reduceToNumerologyDigit(sum);
}

/**
 * Calculate the Life Path Number based on standard reduced birth parameters
 */
export function calculateLifePathNumber(day: number, month: number, year: number): number {
  const dayReduced = reduceToNumerologyDigit(day);
  const monthReduced = reduceToNumerologyDigit(month);
  const yearReduced = reduceToNumerologyDigit(year);
  
  const totalSum = dayReduced + monthReduced + yearReduced;
  return reduceToNumerologyDigit(totalSum);
}

/**
 * Calculate Lucky Number for the current year (Personal Year)
 */
export function calculateLuckyNumberThisYear(day: number, month: number, currentYear: number = 2026): number {
  const dayReduced = reduceToNumerologyDigit(day);
  const monthReduced = reduceToNumerologyDigit(month);
  const yearReduced = reduceToNumerologyDigit(currentYear);
  
  const sum = dayReduced + monthReduced + yearReduced;
  return reduceToNumerologyDigit(sum);
}

/**
 * Retrieve supportive/hostile numbers based on standard Pythagorean relationships
 */
export function getFriendlyAndEnemyNumbers(lifePath: number): { friendly: number[]; enemy: number[] } {
  const normalized = lifePath > 9 ? reduceToNumerologyDigit(lifePath) : lifePath;
  switch (normalized) {
    case 1:
      return { friendly: [1, 3, 5, 9], enemy: [4, 6, 8] };
    case 2:
      return { friendly: [2, 4, 6, 8], enemy: [1, 5, 9] };
    case 3:
      return { friendly: [1, 3, 5, 7], enemy: [4, 8] };
    case 4:
      return { friendly: [2, 4, 6, 8], enemy: [1, 3, 5] };
    case 5:
      return { friendly: [1, 3, 5, 7, 9], enemy: [2, 4, 6] };
    case 6:
      return { friendly: [2, 4, 6, 8, 9], enemy: [1, 7] };
    case 7:
      return { friendly: [1, 3, 5, 7, 9], enemy: [2, 8] };
    case 8:
      return { friendly: [2, 4, 6, 8], enemy: [1, 4, 5] };
    case 9:
      return { friendly: [1, 3, 6, 7, 9], enemy: [2, 4, 8] };
    default:
      return { friendly: [1, 3, 9], enemy: [4, 8] };
  }
}

/**
 * Compile aggregate report insights for full rendering
 */
export function generateNumerologyReport(
  fullName: string,
  dayStr: string,
  monthStr: string,
  yearStr: string
): NumerologyInsights {
  const day = parseInt(dayStr, 10) || 15;
  const month = parseInt(monthStr, 10) || 5;
  const year = parseInt(yearStr, 10) || 1990;
  
  const lifePathNumber = calculateLifePathNumber(day, month, year);
  const destinyNumber = calculateDestinyNumber(fullName);
  const luckyNumberThisYear = calculateLuckyNumberThisYear(day, month, 2026);
  const { friendly, enemy } = getFriendlyAndEnemyNumbers(lifePathNumber);
  
  // Interpretations lookup
  const lifePathDetails = LIFE_PATH_INTERPRETATIONS[lifePathNumber] || LIFE_PATH_INTERPRETATIONS[7];
  const destinyDetails = DESTINY_INTERPRETATIONS[destinyNumber] || DESTINY_INTERPRETATIONS[5];
  
  return {
    lifePathNumber,
    destinyNumber,
    luckyNumberThisYear,
    friendlyNumbers: friendly,
    enemyNumbers: enemy,
    lifePathTitle: lifePathDetails.title,
    lifePathDescription: lifePathDetails.description,
    destinyTitle: destinyDetails.title,
    destinyDescription: destinyDetails.desc,
    personalityTraits: lifePathDetails.traits,
    strengths: lifePathDetails.strengths,
    challenges: lifePathDetails.challenges,
    careerRecommendations: lifePathDetails.careers,
    relationshipCompatibility: lifePathDetails.compatibility
  };
}
