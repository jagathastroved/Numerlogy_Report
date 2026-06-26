import { NumerologyReportData, NumerologyInsights } from '../types';

export const REPORT_PAGES = [
  { path: '/welcome', title: 'Welcome' },
  { path: '/life-path-math', title: 'Life Path Math' },
  { path: '/life-path-detail', title: 'Life Path Detail' },
  { path: '/core-numbers', title: 'Core Numbers' },
  { path: '/name-destiny-math', title: 'Name Destiny Math' },
  { path: '/numerology-overview', title: 'Numerology Overview' },
  { path: '/lucky-traits', title: 'Lucky Traits' },
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
      "Your numbers carry a unique energetic blueprint that influences your personality, strengths, talents, and life direction. Discover the deeper patterns that make your journey truly one of a kind.",

      "This personalized Numerology Report reveals valuable insights into your potential, opportunities, and personal growth. Use this wisdom to navigate life with greater clarity, confidence, and purpose."
    ],
    whatWeCoverTitle: "Your personalized Numerology Report includes:",
    whatWeCoverItems: [
      "Your core numbers (life path, destiny, name, and more)",
      "Your hidden strengths, core personality, and areas for growth",
      "In-depth Birth Number calculation with personality profiling",
      "Decoding your Name Destiny and its numerological impact",
      "Exclusive Monthly Forecast tailored for your upcoming journey"
    ],
    calloutText: "Click Next to calculate your Life Path number—the most important number in your numerology profile."
  },
  coreNumbersSlide: {
    title: "Your Foundational Core Numbers",
    description: "In numerology, your core numbers are the fundamental building blocks of your soul's identity. They form the master blueprint of your personality, highlighting your true essence. To fully grasp your cosmic potential, we must look at how these distinct vibrations harmonize.",
    labels: {
      birthNumber: "Birth Number",
      nameNumber: "Name Destiny Number",
      destinyNumber: "Destiny-Life Path Number",
    },
    descriptions: {
      birthNumber: "Your Birth Number reveals your fundamental character traits, hidden talents, and the innate potential you were born with. It highlights your natural disposition and the core energy you project into the world.",
      destinyNumber: "The Destiny-Life Path Number is the most critical vibration in your chart. It points you toward your true soul's purpose, the primary karmic lessons you must learn, and the ultimate path you are destined to walk.",
      nameNumber: "Your Name Destiny Number acts as a powerful vibrational magnet. It influences the types of opportunities you attract, your professional success, and how you are perceived by others in society."
    },
    calloutText: "Ready to explore further? Click Next to decode your Name Destiny number."
  },
  lifeMathSlide: {
    title: "Decoding Your Life Path",
    description: "Your Life Path Number is the most profound indicator of your character and the trajectory of your lifetime. We derive this powerful digit by systematically reducing your birth date until it reveals your foundational vibration or a rare Master Number.",
    exactDateLabel: "Your Exact Date of Birth",
    day: "Day",
    month: "Month",
    year: "Year",
    step1: "Phase 1:",
    step1Desc: "Reduce the day, month, and year down to single digits.",
    step2: "Phase 2:",
    step2Desc: "Sum the reduced values together.",
    step3: "Phase 3:",
    step3Desc: "Reduce the final sum to unveil your single-digit path.",
    lifePathLabel: "Your Core Life Path Number",
    calloutText: "Let's dig deeper! Click Next to discover what your Life Path reveals about your greatest advantages and karmic lessons."
  },
  lifeDetailSlide: {
    title: "Your Life Path Number",
    topStrengths: "Your Top Strengths",
    topChallenges: "Your Top Challenges",
    bannerTitle: "Unlock Your Complete Numerological Destiny",
    bannerDesc: "Your Core Numbers reveal so much about you, but it's only the beginning! Buy the full premium report to unlock crucial insights into your future, wealth, health, and much more important cosmic secrets.",
    bannerBtn: "Book Your Numerology Report",
    bannerSubLabel: "GET YOUR PREMIUM NUMEROLOGY REPORT",
    bannerBookText: "Your Personalised",
    bannerBookTitle: "NUMEROLOGY\nREPORT",
    calloutText: "Click Next to uncover your Core Numbers—the master blueprint of your personality."
  },
  nameMathSlide: {
    title: "Your Name Destiny Number",
    paragraphs: [
      "Your Name Destiny Number, frequently known as your Minor Expression Number, is derived from the exact name you use on a daily basis. This could be a nickname, your professional title, or a new surname taken after marriage.",
      "This powerful number dictates the distinct energetic frequency you project into the universe. It acts as your \"vibrational signature,\" influencing your daily interactions, professional opportunities, and how others perceive you."
    ],
    fullNameLabel: "Your Current Full Name",
    step1: "Phase 1",
    step1Desc: "Assign the corresponding numerological value to every letter.",
    step2: "Phase 2",
    step2Desc: "Calculate the sum for your first, middle, and last names individually.",
    step3: "Phase 3",
    step3Desc: "Continue reducing the sums until you arrive at a master or single digit.",
    nameLabel: "Your Name Vibration",
    calloutText: "Let's advance to your comprehensive Personalized Numerology Overview."
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
        desc: "Unlock the hidden meanings behind your Destiny, Soul Urge, and Expression vibrations to understand your true self."
      },
      {
        title: "Your Life Path Number",
        desc: "Unveil your ultimate soul mission, innate talents, and the specific cosmic path you were born to fulfill."
      },
      {
        title: "Business Name Number",
        desc: "Determine the exact numerological frequency that will attract maximum wealth and success to your enterprise."
      },
      {
        title: "Suitable Business Fields",
        desc: "Pinpoint the ideal career trajectories and industries that perfectly match your energetic blueprint."
      },
      {
        title: "Mobile Number Selection Guide",
        desc: "Discover the secret to picking a phone number that acts as a magnet for prosperity, luck, and powerful connections."
      },
      {
        title: "Vehicle Number Selection",
        desc: "Guarantee safety, smooth journeys, and constant good fortune by selecting an auspicious license plate."
      },
      {
        title: "Your Future Predictions",
        desc: "Receive highly accurate, customized forecasts and strategic cosmic advice for the upcoming years."
      },
      {
        title: "Favorable Calendar Dates",
        desc: "Identify your absolute luckiest days of the month to sign contracts, travel, or make life-altering choices."
      },
      {
        title: "Temples to Visit",
        desc: "Access powerful spiritual remedies and specific sacred locations tailored to balance your unique energies."
      }
    ],
    testimonial: {
      initials: "AS",
      name: "Anjali",
      role: "Verified User",
      text: "\"This numerology report completely blew me away. It broke down complex cosmic concepts into simple, actionable advice. The personalized remedies have brought so much clarity and peace to my daily life. I can't recommend this enough!\""
    },
    checkoutBtn: "Book Your Numerology Report"
  },
  luckyTraitsSlide: {
    title: "Your Lucky Traits",
    subtitle: "Unlock the energetic frequencies and colors that align perfectly with your cosmic blueprint.",
    numbersTitle: "Your Auspicious Numbers",
    numbersDesc: "These numbers resonate with your highest vibrational potential. Use them for important dates, financial decisions, and major life events.",
    colorsTitle: "Your Power Colors",
    colorsDesc: "Wearing or surrounding yourself with these colors enhances your aura, attracts positive opportunities, and deflects negative energy."
  },
  monthSlide: {
    title: "Current Month Forecast",
    subtitle: "A detailed breakdown of the energetic forces shaping your current month",
    monthLabel: "Your Personal Monthly Cycle",
    calloutText: "That concludes your monthly preview. Now let's explore everything waiting for you in the full premium dossier.",
    interpretations: {
      1: { title: "Fresh Starts & Bold Action", desc: "A Personal Month of 1 kicks off a dynamic cycle of new beginnings. Now is the exact moment to plant fresh seeds, launch new ventures, and assert your independence. Your leadership qualities are amplified—trust your gut and take decisive action." },
      2: { title: "Harmony & Diplomatic Patience", desc: "A Personal Month of 2 shifts the focus to partnerships and emotional balance. It is a period for nurturing the seeds you recently planted. Empathy, teamwork, and careful diplomacy will yield the best results. Lean into your relationships." },
      3: { title: "Creative Spark & Joyful Expression", desc: "A Personal Month of 3 is electric, social, and highly communicative. Your creative juices are overflowing, making it a stellar time for art, writing, or public speaking. Embrace joy, surround yourself with friends, and let your true self shine." },
      4: { title: "Discipline & Solid Foundations", desc: "A Personal Month of 4 demands hard work, structure, and practical planning. It is time to roll up your sleeves and fortify your future. Concentrate on administrative tasks, manage your details, and build a sturdy framework for success." },
      5: { title: "Dynamic Change & Liberation", desc: "A Personal Month of 5 ushers in adventure, unpredictability, and major shifts. Stay flexible and embrace the unknown. This is the ultimate time for travel, networking, and breaking free from stagnant routines. Expand your horizons." },
      6: { title: "Domestic Harmony & Responsibility", desc: "A Personal Month of 6 revolves around love, family, and home life. You may be called upon to support loved ones or heal strained relationships. It is a beautiful period for beautifying your sanctuary and finding peace at home." },
      7: { title: "Deep Introspection & Spiritual Awakening", desc: "A Personal Month of 7 invites you to step back from the chaos and journey inward. It is a profound period for meditation, research, and soul-searching. Listen closely to your inner voice and prioritize your spiritual and mental well-being." },
      8: { title: "Manifestation & Material Power", desc: "A Personal Month of 8 activates your career and financial sectors. Your ability to manifest wealth is at its peak. Step confidently into your power, make bold executive decisions, and watch your disciplined efforts translate into material rewards." },
      9: { title: "Culmination & Karmic Release", desc: "A Personal Month of 9 marks the end of a cycle. It is a time of deep reflection, closure, and releasing what no longer serves you. Declutter your life—both physically and emotionally—to clear the runway for your next great chapter." },
      11: { title: "Divine Intuition & Illumination", desc: "A Master Personal Month of 11 opens a powerful channel to higher consciousness. Your psychic sensitivity and intuition are amplified. Utilize this rare energy for spiritual teaching, profound inspiration, and elevating your vibration." },
      22: { title: "The Master Architect", desc: "A Master Personal Month of 22 presents a monumental opportunity to turn your most ambitious visions into tangible reality. By combining your high ideals with grounded, practical effort, you can achieve success on a massive scale." }
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
      discountLine1: "INSTANT 50% OFF",
      discountLine2: "APPLIED TODAY",
      btnText: "Unlock Complete Report for ₹599",
      processing: "Processing...",
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
    birthCountry: "US",
    birthCity: "New York"
  },
  coreNumbers: {
    birthNumber: 7,
    destinyNumber: 2,
    nameNumber: 8
  },
  interpretations: {
    lifePath: {
      title: "Loading Life Path...",
      subtitle: "",
      description: "",
      traits: [],
      strengths: [],
      challenges: [],
      careers: [],
      compatibility: ""
    },
    destiny: { title: "Loading Destiny...", desc: "" }
  },
  lucky_traits: {
    lucky_numbers: [5, 14, 23, 3, 12, 21, 30],
    lucky_colors: ["green", "light green", "parrot green", "yellow", "saffron", "gold", "dark blue"]
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

