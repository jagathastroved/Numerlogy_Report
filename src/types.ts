/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Gender = 'Male' | 'Female' | 'Prefer not to say';

export interface PersonalDetails {
  fullName: string;
  email: string;
  gender: Gender | '';
  birthDay: string;
  birthMonth: string;
  birthYear: string;
  birthHour: string;
  birthMinute: string;
  birthAmPm: 'AM' | 'PM';
  birthSecond: string;
  birthCountry: string;
  birthCity: string;
}

export interface LocationPreferences {
  country: string;
  includeLifePath: boolean;
  includeLuckyTraits: boolean;
}

export interface NumerologyInsights {
  lifePathNumber: number;
  destinyNumber: number;
  luckyNumberThisYear: number;
  friendlyNumbers: number[];
  enemyNumbers: number[];
  lifePathTitle: string;
  lifePathDescription: string;
  destinyTitle: string;
  destinyDescription: string;
  personalityTraits: string[];
  strengths: string[];
  challenges: string[];
  careerRecommendations: string[];
  relationshipCompatibility: string;
}

export interface NumerologyDefinition {
  title: string;
  subtitle: string;
  description: string;
  traits: string[];
  strengths: string[];
  challenges: string[];
  careers: string[];
  compatibility: string;
}

export interface NumerologyReportData {
  personalDetails: PersonalDetails;
  coreNumbers: {
    birthNumber: number;
    destinyNumber: number;
    nameNumber: number;
  };
  interpretations: {
    lifePath: NumerologyDefinition;
    destiny: { title: string; desc: string };
  };
  lucky_traits: {
    lucky_numbers: number[];
    lucky_colors: string[];
  };
  loShuGrid: {
    grid: Record<string, number>;
    story: string;
    analysis: string;
  };
  monthlyForecast: string;
}

export const LIFE_PATH_INTERPRETATIONS: Record<number, NumerologyDefinition> = {
  1: {
    title: "The Leader & Innovator",
    subtitle: "Independence, ambition, and creative force",
    description: "As a Life Path 1, you are a natural-born leader, pioneer, and innovator. You possess an intense drive to achieve, create, and succeed. You are fiercely independent and prefer to carve your own unique path in life rather than follow the crowd.",
    traits: ["Pioneering", "Courageous", "Independent", "Ambitious", "Self-Reliant"],
    strengths: ["Strong willpower", "Original thinking", "Unmatched determination", "Inherent charisma"],
    challenges: ["Impatience", "Egoism or stubbornness", "Fear of failure", "Difficulty taking advice"],
    careers: ["Entrepreneur", "Executive", "Creative Director", "Founder", "Freelancer", "Military Leader"],
    compatibility: "Highly harmonious with numbers 1, 3, 5, and 9. Combines dynamic drives together."
  },
  2: {
    title: "The Mediator & Peacemaker",
    subtitle: "Cooperation, diplomacy, and deep sensitivity",
    description: "As a Life Path 2, you are a master of harmony, diplomacy, and cooperation. You thrive in partnerships and possess incredible intuitive abilities. You are highly sensitive to the feelings of others and seek peace in all environments.",
    traits: ["Diplomatic", "Empathetic", "Cooperative", "Patient", "Intuitive"],
    strengths: ["Highly collaborative", "Great active listener", "Natural peacemaker", "Detail-oriented and thorough"],
    challenges: ["Overly sensitive to criticism", "Avoidance of healthy conflict", "Indecisiveness", "Tendency to over-compromise"],
    careers: ["Diplomat", "Counselor/Psychologist", "Mediator", "Social Worker", "Artist/Designer", "Curator"],
    compatibility: "Shares smooth energetic flow with numbers 2, 4, 6, and 8."
  },
  3: {
    title: "The Creative & Communicator",
    subtitle: "Self-expression, joy, and social inspiration",
    description: "As a Life Path 3, you are infused with creative, expressive, and social energy. You possess natural artistic talents, a playful spirit, and a gift of communication or writing. You inspire others with your positive outlook and enthusiasm.",
    traits: ["Creative", "Expressive", "Witty", "Sociable", "Optimistic"],
    strengths: ["Excellent speaker or writer", "Radiates contagious joy", "Artistic versatility", "Rich imagination"],
    challenges: ["Lack of focus or scatter", "Superficiality", "Mood swings", "Anxiety about criticism"],
    careers: ["Writer/Author", "Actor/Performer", "Marketing Coordinator", "Public Speaker", "Artist", "Teacher"],
    compatibility: "Enjoys incredible matches with numbers 1, 3, 5, and 7."
  },
  4: {
    title: "The Builder & Practical Strategist",
    subtitle: "Structure, systemic process, and reliability",
    description: "As a Life Path 4, your essence is built on order, discipline, stability, and hard work. You are the pillar of trust. You enjoy transforming ideas into concrete, physical realities with step-by-step systemic organization.",
    traits: ["Practical", "Organized", "Loyal", "Methodical", "Disciplined"],
    strengths: ["Unyielding reliability", "Strategic foundation builder", "Eye for detail", "Exceptional focus"],
    challenges: ["Rigidity or resistance to change", "Over-analytical worry", "Strict perfectionism", "Prone to overworking"],
    careers: ["Architect", "Software/Systems Engineer", "Project Director", "Accountant/Financial Planner", "Administrator"],
    compatibility: "Highly grounded and aligned with numbers 2, 4, 6, and 8."
  },
  5: {
    title: "The Adventurer & Change Agent",
    subtitle: "Freedom, versatility, and sensory experience",
    description: "As a Life Path 5, you represent dynamic freedom, curiosity, adaptability, and adventure. You thrive on constant change, experience-gathering, travel, and direct physical connection to the world around you.",
    traits: ["Resourceful", "Adaptable", "Charismatic", "Free-spirited", "Curious"],
    strengths: ["Superb multi-tasker", "Highly adaptable to shifts", "Magnetic social connector", "Enthusiastic explorer"],
    challenges: ["Impulsive risk-taking", "Difficulty committing", "Restlessness", "Spreading energy too thin"],
    careers: ["Travel Blogger/Guide", "Sales Representative", "Public Relations Expert", "Journalist", "Event Consultant"],
    compatibility: "Matches excellently with dynamic partners of numbers 1, 3, 5, and 7."
  },
  6: {
    title: "The Nurturer & Counselor",
    subtitle: "Responsibility, protective care, and artistic harmony",
    description: "As a Life Path 6, you are characterized by deep compassion, responsibility, community focus, and a strong sense of home. You naturally take care of humanity and seek visual and environmental beauty.",
    traits: ["Nurturing", "Responsible", "Compassionate", "Protective", "Harmonious"],
    strengths: ["Caring family guardian", "Artistic eye for aesthetics", "Altruistic protector", "Exceptional loyalty"],
    challenges: ["Unsolicited interference", "Self-sacrificing exhaustion", "Idealist disappointment", "Worrying excessively"],
    careers: ["Educator/Teacher", "Doctor/Nurse", "Interior Designer", "Human Resources Director", "Family Therapist"],
    compatibility: "Nurturing synergy with numbers 2, 4, 6, 8, and 9."
  },
  7: {
    title: "The Seeker & Analyzer",
    subtitle: "Spirituality, deep analysis, and intellectual pursuit",
    description: "As a Life Path 7, you are a seeker of truth, wisdom, and inner knowledge. You prefer to look beyond the surface of life, analyzing systems, human behavior, or spiritual philosophy with a quiet, observant mind.",
    traits: ["Analytical", "Intuitive", "Spiritual", "Thoughtful", "Philosophical"],
    strengths: ["Deep intellectual focus", "Remarkable inner wisdom", "Skeptical, rigorous standards", "Strong research skill"],
    challenges: ["Social withdrawal or coldness", "Overthinking leading to anxiety", "Difficulty trusting others", "Secretive default behavior"],
    careers: ["Researcher", "Data Scientist", "Philosopher/Theologian", "Psychologist", "Spiritual Counselor", "Author"],
    compatibility: "Adept connections with reflective thinkers of numbers 3, 5, 7, and 9."
  },
  8: {
    title: "The Visionary & Executive",
    subtitle: "Material mastery, power, and high-impact success",
    description: "As a Life Path 8, you are geared toward leadership, business, abundance, and material manifestation. You possess excellent executive power, strategic sight, and the capacity to coordinate large plans with realism.",
    traits: ["Empowered", "Authoritative", "Ambitious", "Realistic", "Resourceful"],
    strengths: ["Strong crisis management", "High-level goal execution", "Financial acumen", "Inspiring executive status"],
    challenges: ["Materialistic obsession", "Over-controlling attitude", "Struggles with vulnerability", "Impatience with weakness"],
    careers: ["Corporate Executive", "Financial Advisor", "Real Estate Specialist", "Business Founder", "Politician", "Lawyer"],
    compatibility: "Very stable and complementary with numbers 2, 4, 6, and 8."
  },
  9: {
    title: "The Humanitarian & Philosopher",
    subtitle: "Universal love, artistic vision, and completion",
    description: "As a Life Path 9, your journey revolves around global consciousness, selflessness, artistic vision, and resolving cycles. You are a natural humanitarian, feeling a deep connection to the betterment of all.",
    traits: ["Humanitarian", "Creative", "Idealistic", "Geneous", "Universalists"],
    strengths: ["Incredible global empathy", "Artistic and expressive depth", "Broad-minded vision", "Generous without bounds"],
    challenges: ["Carrying burdens of the world", "Holding on to past regrets", "Struggling with practical details", "Prone to martyrdom"],
    careers: ["Non-Profit Executive", "Artist/Musician", "Environmentalist", "Teacher", "Writer", "Physician", "Diplomat"],
    compatibility: "Vibrant matching with universal energies of numbers 1, 6, 7, and 9."
  },
  11: {
    title: "The Intuitive Seer (Master Number)",
    subtitle: "Spiritual illumination, psychic awareness, and inspiration",
    description: "As a Master Number 11, you carry double the power of 1 combined with the harmony of 2. You act as a dynamic channel for spiritual wisdom, intuition, and inspiration, acting as a beacon of light for others.",
    traits: ["Highly Intuitive", "Inspirational", "Spiritual", "Charismatic", "Visionary"],
    strengths: ["Vivid visionary insight", "Empathetic healer", "Exceptional charisma", "Natural uplifting counselor"],
    challenges: ["Intense nervous energy", "Prone to extreme anxiety", "Extreme self-doubt", "Hypersensitivity to environments"],
    careers: ["Spiritual Teacher", "Artist/Innovator", "Psychotherapist", "Philosopher", "Intuitive Specialist", "Reiki Practitioner"],
    compatibility: "Resonates deeply with spiritual seekers of numbers 2, 7, 11, and 22."
  },
  22: {
    title: "The Master Builder (Master Number)",
    subtitle: "Turning massive spiritual ideals into physical realities",
    description: "As a Master Number 22, you take the visionary insight of 11 and anchor it with the practical discipline of 4. You have the rare potential to construct vast projects, social systems, or physical layouts that benefit all humanity.",
    traits: ["Practical Visionary", "Leader", "Pragmatic", "Organized", "Unyielding"],
    strengths: ["Incredible strategic logic", "Huge capacity to organize scale", "Combines intuition and mechanics", "Magnetic leadership"],
    challenges: ["Overwhelming pressure to succeed", "Dreading waste of potential", "Struggles with patience", "Over-rigid boundaries"],
    careers: ["International Architect", "City Planner", "Executive Strategist", "Global Business Leader", "System Creator"],
    compatibility: "Thrives with practical, sturdy individuals of numbers 4, 8, 22, and 11."
  },
  33: {
    title: "The Master Teacher (Master Number)",
    subtitle: "Universal love, service, and spiritual guardianship",
    description: "As a Master Number 33, you represent the peak of compassionate service and spiritual nurture, combining the expressive joy of 3 with the protective care of 6. You are called to nurture the emotional expansion of humanity.",
    traits: ["Compassionate", "Teaching", "Nurturing", "Sacrificial", "Inventive"],
    strengths: ["Unconditional universal love", "Exceptional healing presence", "Inspirational communicator", "Deep artistic wisdom"],
    challenges: ["Carrying emotional codependency", "Self-neglect under duty", "Extreme emotional perfectionism", "Prone to deep guilt"],
    careers: ["Global Spiritual Leader", "Philanthropist", "Arts Therapist", "Pediatric Doctor", "Inspirational Author", "Teacher"],
    compatibility: "Enjoys profound heart connections with numbers 6, 9, 11, 22, and 33."
  }
};

export const DESTINY_INTERPRETATIONS: Record<number, { title: string; desc: string }> = {
  1: {
    title: "The Independent Trailblazer",
    desc: "Your ultimate destiny is to cultivate self-reliance, demonstrate courage, and stand tall as an individualistic pioneer. You are meant to head new concepts and spark progressive beginnings."
  },
  2: {
    title: "The Diplomatic Harmonizer",
    desc: "Your ultimate destiny is to construct peaceful environments, coordinate successful collaborations, and leverage deep empathy of partnerships. You are the glue that holds teams together."
  },
  3: {
    title: "The Joyous Self-Expresser",
    desc: "Your ultimate destiny is to utilize the power of speech, art, and laughter to uplift humanity. You are destined to communicate beautiful concepts that spark universal creativity and positivity."
  },
  4: {
    title: "The Trusted Foundation Builder",
    desc: "Your ultimate destiny is to build systems, establish routines, and anchor floating concepts with concrete physical structures. You represent reliability, order, and rigorous standard."
  },
  5: {
    title: "The Universal Explorer",
    desc: "Your ultimate destiny is to navigate swift changes with grace, absorb multicultural viewpoints through travels, and become a medium of freedom. You teach others to appreciate adaptability."
  },
  6: {
    title: "The Caring Community Guardian",
    desc: "Your ultimate destiny is to design sanctuary spaces, heal families, protect values, and maintain cosmic balance. You make environments feel safe, secure, and artistically beautiful."
  },
  7: {
    title: "The Scholar of Mystic Truths",
    desc: "Your ultimate destiny is to investigate hidden mysteries, run rigorous data calculations, and teach deep philosophies. You refine raw information into crystalline wisdom."
  },
  8: {
    title: "The Master of Balance and Power",
    desc: "Your ultimate destiny is to command financial and organizational operations, demonstrate executive power, and use resources to support noble humanitarian causes or enterprises."
  },
  9: {
    title: "The Universal Altruist",
    desc: "Your ultimate destiny is to cultivate universal empathy, execute humanitarian missions, and complete emotional cycles with grace. You pave the way for a wiser, more loving society."
  },
  11: {
    title: "The Channel of Inspiration",
    desc: "Your ultimate destiny is to act as a cosmic tuning fork, receiving intuitive inspirations and transmitting them visually or vocally to fuel transformation and spiritual growth in others."
  },
  22: {
    title: "The Architect of the Future",
    desc: "Your ultimate destiny is to engineer massive structural systems that stand for generations. You convert intuitive visions into systematic, real-world institutions for the public good."
  },
  33: {
    title: "The Guardian of Hearts",
    desc: "Your ultimate destiny is to direct global compassion, heal complex wounds, and tutor humanity in unconditional love, kindness, and spiritual harmony."
  }
};

export const COUNTRIES: string[] = [
  "India",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Singapore",
  "Germany",
  "France",
  "United Arab Emirates",
  "Indonesia",
  "Nepal",
  "Sri Lanka",
  "Japan",
  "New Zealand",
  "South Africa",
  "Malaysia",
  "Netherlands",
  "Switzerland",
  "Brazil",
  "Mexico",
  "Italy",
  "Spain",
  "Ireland",
  "Norway",
  "Sweden"
];
