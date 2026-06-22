import { NumerologyReportData, LIFE_PATH_INTERPRETATIONS, DESTINY_INTERPRETATIONS, NumerologyInsights } from '../types';

export const REPORT_PAGES = [
  { path: '/welcome', title: 'Welcome' },
  { path: '/core-numbers', title: 'Core Numbers' },
  { path: '/life-path-math', title: 'Life Path Math' },
  { path: '/life-path-detail', title: 'Life Path Detail' },
  { path: '/name-destiny-math', title: 'Name Destiny Math' },
  { path: '/numerology-overview', title: 'Numerology Overview' },
  { path: '/lucky-numbers', title: 'Lucky Numbers' },
  { path: '/month-forecast', title: 'Month Forecast' },
  { path: '/premium-deliverables', title: 'Premium Deliverables' }
];

export const staticContent = {
  layout: {
    reportIndex: "Report Index",
    enterDifferentDetails: "Enter Different Details",
    showIndex: "Show Index",
    next: "Next"
  },
  introSlide: {
    greeting: "Hey",
    paragraphs: [
      "Welcome to your personalized numerology report! Here, we’ll look at the special meanings behind your numbers. Numerology can give you helpful info about your personality, strong points, weak points, and life path.",
      "Numerology is best used as a guide to help you in life, along with your intuition, good choices, and common sense. It should be a tool to help you live your life better, not the only thing you depend on."
    ],
    whatWeCoverTitle: "We cover the following points in your numerology report:",
    whatWeCoverItems: [
      "Your core numbers (life path, destiny, name, and more)",
      "Your personality, strengths and weaknesses",
      "Detailed Birth Number calculation and personality analysis",
      "Unlock your Name Destiny and numerology insights",
      "Get personalized Monthly Forecast and future guidance"
    ],
    calloutText: "Click NEXT to see your core numbers, which are the most important in numerology."
  },
  coreNumbersSlide: {
    title: "Your Core Numbers",
    description: "Your core numbers in numerology are like pieces of a puzzle that make up who you are. There are main numbers that create your personality profile. To really understand yourself, you need to look at how all these numbers work together.",
    labels: {
      lifePath: "Your Life Path Number",
      destiny: "Your Destiny Number",
      personality: "Your Personality Number",
      expression: "Your Expression Number",
      soulUrge: "Your Soul Urge Number",
      subconsciousSelf: "Your Subconscious Self Number",
      challengeNumbers: "Your Challenge\nNumbers"
    },
    calloutText: "Let's check out your life path number. Click NEXT to see it."
  },
  lifeMathSlide: {
    title: "Calculating Your Life Path",
    description: "Your Life Path Number reveals the most about your personality and the kind of life you might lead. We calculate it by continually adding the digits of your birth date until we reach a single number (or a Master Number).",
    exactDateLabel: "Your Exact Birth Date",
    day: "Day",
    month: "Month",
    year: "Year",
    step1: "Step 1:",
    step1Desc: "Reduce day, month, and year individually.",
    step2: "Step 2:",
    step2Desc: "Add the reduced results together.",
    step3: "Step 3:",
    step3Desc: "Reduce the final sum to a single digit.",
    lifePathLabel: "Your Life Path Number",
    calloutText: "Let’s keep going! Click NEXT to see what your Life Path number says about your personality, strengths, and weaknesses."
  },
  lifeDetailSlide: {
    title: "Your Life Path Number",
    topStrengths: "Top 5 Strengths",
    topChallenges: "Top 5 Challenges",
    bannerTitle: "Unlock Your Complete Numerological Destiny",
    bannerDesc: "Your Core Numbers reveal so much about you, but it's only the beginning! Buy the full premium report to unlock crucial insights into your future, wealth, health, and much more important cosmic secrets.",
    bannerBtn: "Book Your Numerology Report",
    bannerSubLabel: "GET YOUR PREMIUM NUMEROLOGY REPORT",
    bannerBookText: "Your Personalised",
    bannerBookTitle: "NUMEROLOGY\nREPORT",
    calloutText: "Now let’s look at your second main or most important number, which will be your name number."
  },
  nameMathSlide: {
    title: "Your Name/ Destiny Number",
    paragraphs: [
      "Your Name/ Destiny Number, also called your Minor Expression Number, comes from the first and last name you use every day. It might be a shorter version of your birth name or a new name if you got married, or changed it for another reason.",
      "This number shows the energy you put out into the world when you use that name. It’s like your \"energetic signature\" that adds to your personality, strengths, lessons, experiences, and opportunities based on your other numbers."
    ],
    fullNameLabel: "Your Full Name",
    step1: "Step 1",
    step1Desc: "Give each letter a number based on its place in the alphabet.",
    step2: "Step 2",
    step2Desc: "Find total for first, middle(s), and last name separately.",
    step3: "Step 3",
    step3Desc: "If multiple digits, keep adding until a single digit is reached.",
    nameLabel: "Your Name Number",
    calloutText: "Let's proceed to Depth Personalized Numerology Report Overview."
  },
  overviewSlide: {
    title: "Here We Have Prepared Your In-Depth Personalized Numerology Report",
    subtitle: "Your Personal Numerology Report Is Here",
    bookLabel: "Your Personalised",
    bookTitle: "NUMEROLOGY\nREPORT",
    checklistTitle: "What You'll Find Inside",
    preparedItems: [
      {
        title: "Analysis of Your Core Numbers",
        desc: "Explore the deep significance of your Destiny, Soul Urge, and Expression numbers."
      },
      {
        title: "Your Life Path Number",
        desc: "Discover your primary purpose, strengths, and the path you are destined to walk."
      },
      {
        title: "Business Name Number",
        desc: "Find out the most prosperous and lucky numerological vibration for your business or brand."
      },
      {
        title: "Suitable Business Fields",
        desc: "Identify the specific industries and career paths most aligned with your cosmic energy."
      },
      {
        title: "Mobile Number Selection Guide",
        desc: "Learn how to choose a lucky phone number that attracts success, wealth, and positive connections."
      },
      {
        title: "Vehicle Number Selection",
        desc: "Ensure safe, smooth, and fortunate travels by choosing the right vehicle registration number."
      },
      {
        title: "Your Future Predictions",
        desc: "Get personalized forecasts and guidance for the coming months and years ahead."
      },
      {
        title: "Favorable Calendar Dates",
        desc: "Discover your most lucky and auspicious dates for making important life decisions."
      },
      {
        title: "Temples to Visit",
        desc: "Spiritual remedies and specific temples recommended to enhance your cosmic alignment."
      }
    ],
    testimonial: {
      initials: "AS",
      name: "Anjali Sharma",
      role: "Teacher",
      text: "\"The numerology report is very insightful and easy to understand. It explains the meanings of numbers in a straightforward manner. The personalized recommendations are practical and helpful. I highly recommend this numerology report to anyone seeking guidance and clarity in life.\""
    },
    checkoutBtn: "Book Your Numerology Report"
  },
  luckyNumbersSlide: {
    title: "Your Core Vibrations",
    subtitle: "The lucky, friendly, and unlucky numbers in your life",
    lucky: {
      title: "Your Lucky Numbers",
      veryLucky: "Very Lucky",
      supportive: "Supportive",
      moderate: "Moderate",
      caution: "Caution"
    },
    friendly: {
      title: "Friendly Numbers",
      mostFriendly: "Most Friendly",
      friendly: "Friendly",
      neutral: "Neutral",
      notFriendly: "Not Friendly"
    },
    unlucky: {
      title: "Unlucky Numbers to Avoid",
      rahuEnergy: "Rahu Energy",
      rahuDesc: "May create sudden confusion, illusion, and unexpected changes.",
      saturnEnergy: "Saturn Energy",
      saturnDesc: "Associated with karmic lessons, delays, and sudden obstacles.",
      warningLabel: "Critical Warning",
      warningTitle: "Avoid 4 + 8 Combinations",
      warningDesc: "Numbers that reduce to 4 or 8, or combinations containing both, should be strictly avoided for important events.",
      examplesTitle: "Examples to avoid"
    }
  },
  monthSlide: {
    title: "June Month Prediction",
    subtitle: "A comprehensive layout of energies active in June 2026",
    monthLabel: "Your Personal Month Number",
    calloutText: "That was the prediction for this month. Now let's see what’s inside your full report, prices, and how you can get it for yourself.",
    interpretations: {
      1: { title: "New Beginnings & Action", desc: "A Personal Month of 1 is a time of fresh starts and new opportunities. This is the perfect month to plant new seeds, start new projects, and take the initiative. Your independence and leadership skills are highlighted. Trust your instincts and move forward with confidence." },
      2: { title: "Cooperation & Patience", desc: "A Personal Month of 2 focuses on relationships, harmony, and teamwork. It's a time to be patient and let the seeds you planted last month grow. Diplomacy and cooperation will bring you success. Listen to others and nurture your partnerships." },
      3: { title: "Creativity & Self-Expression", desc: "A Personal Month of 3 is vibrant, social, and communicative. Your creative energies are flowing, making it a great time for writing, speaking, or artistic pursuits. Enjoy yourself, connect with friends, and let your authentic voice be heard." },
      4: { title: "Hard Work & Foundation", desc: "A Personal Month of 4 requires discipline, organization, and practical effort. It's time to get down to business and build a solid foundation for your future. Focus on the details, handle administrative tasks, and work diligently toward your goals." },
      5: { title: "Change & Freedom", desc: "A Personal Month of 5 brings shifts, adventure, and new experiences. Expect the unexpected and be ready to adapt. This is an excellent time for travel, networking, and embracing change. Break free from routine and explore new horizons." },
      6: { title: "Home & Responsibility", desc: "A Personal Month of 6 centers around family, home, and duty. You may find yourself caring for others or focusing on domestic matters. It's a period for healing, resolving conflicts, and bringing beauty and harmony into your living space." },
      7: { title: "Introspection & Spiritual Growth", desc: "A Personal Month of 7 is a time for inner work, study, and spiritual reflection. Step back from the hustle and bustle to recharge. Focus on learning, research, and connecting with your higher self. Trust your intuition above all else." },
      8: { title: "Power & Financial Gains", desc: "A Personal Month of 8 is focused on career, finances, and material success. Your manifestation power is high. Step into your authority, make important business decisions, and take charge of your financial future. Hard work pays off now." },
      9: { title: "Termination & New Seed-planting", desc: "A Personal Month of 9 is a highly karmic time of endings, completion, and reflection. Clean out the old to make room for the new. Let go of associations or jobs that no longer serve your core path. Tie up loose ends and prepare for a new cycle." },
      11: { title: "Intuition & Illumination", desc: "A Master Personal Month of 11 brings heightened sensitivity and spiritual insights. Your intuition is incredibly sharp right now. Use this time for inspiration, spiritual teaching, and connecting with higher frequencies." },
      22: { title: "Master Builder", desc: "A Master Personal Month of 22 challenges you to turn your grandest dreams into practical reality. The potential for large-scale success is immense if you combine your vision with disciplined, organized effort." }
    }
  },
  checkoutSlide: {
    title1: "Premium Numerology Report",
    title2Prefix: "Numerology Report For",
    desc: "We have successfully analyzed your birth data and computed your numbers. Everything you need to understand your life's purpose and make lucky choices is waiting for you.",
    whatsIncluded: "What's Included In Your Report",
    specialFeatures: [
      { title: "Deep Numerology Assessment", desc: "Discover how numbers map your life path, revealing hidden strengths." },
      { title: "Karmic Debt Analysis", desc: "Identify recurring life challenges and the lessons you are meant to learn." },
      { title: "Auspicious Names for Business", desc: "Ensure your startup is aligned with energies of wealth and prosperity." },
      { title: "Life Cycle Forecast", desc: "Gain a timeline of major turning points and phases in your life journey." },
      { title: "Daily & Monthly Luck Ratings", desc: "Know the optimal times to make decisions, invest, or start something new." },
      { title: "Relationship Compatibility Matrix", desc: "See which soul numbers harmonize with you for romance or partnerships." }
    ],
    pricing: {
      label: "Total Order Price",
      originalPrice: "₹1199",
      currentPrice: "₹599",
      discountLine1: "SAVE 50%",
      discountLine2: "TODAY",
      btnText: "Proceed to Pay ₹599",
      processing: "Processing..."
    }
  }
};

export const fallbackReport: NumerologyReportData = {
  personalDetails: {
    fullName: "John Doe",
    email: "john@example.com",
    gender: "",
    birthDay: "01",
    birthMonth: "01",
    birthYear: "1990",
    birthHour: "12",
    birthMinute: "00",
    birthSecond: "00",
    birthAmPm: "AM",
    birthCountry: "US",
    birthCity: "New York"
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
