import { IQuestion } from '../types';

export const questionsList: IQuestion[] = [
  {
    id: 0,
    question:
      'In which part of your body would you find the cruciate ligament?',
    answers: [
      { id: 0, letter: 'A', text: 'Leg' },
      { id: 1, letter: 'B', text: 'Knee' },
      { id: 2, letter: 'C', text: 'Face' },
      { id: 3, letter: 'D', text: 'Finger' },
    ],
    correctAnswerId: 1,
    cost: 500,
  },
  {
    id: 1,
    question:
      'What is the name of the main antagonist in the Shakespeare play Othello?',
    answers: [
      { id: 0, letter: 'A', text: 'Iago' },
      { id: 1, letter: 'B', text: 'Shrek' },
      { id: 2, letter: 'C', text: 'Fiona' },
      { id: 3, letter: 'D', text: 'Romeo' },
    ],
    correctAnswerId: 0,
    cost: 1000,
  },
  {
    id: 2,
    question:
      'What element is denoted by the chemical symbol Sn in the periodic table?',
    answers: [
      { id: 0, letter: 'A', text: 'Vanadium' },
      { id: 1, letter: 'B', text: 'Oxygen' },
      { id: 2, letter: 'C', text: 'Aurum' },
      { id: 3, letter: 'D', text: 'Tin' },
    ],
    correctAnswerId: 3,
    cost: 2000,
  },
  {
    id: 3,
    question: "How many of Henry VIII's wives were called Catherine?",
    answers: [
      { id: 0, letter: 'A', text: '1' },
      { id: 1, letter: 'B', text: '2' },
      { id: 2, letter: 'C', text: '3' },
      { id: 3, letter: 'D', text: '4' },
    ],
    correctAnswerId: 2,
    cost: 4000,
  },
  {
    id: 4,
    question: 'What was the most popular girls name in the UK in 2021?',
    answers: [
      { id: 0, letter: 'A', text: 'Olivia' },
      { id: 1, letter: 'B', text: 'Margaret' },
      { id: 2, letter: 'C', text: 'Theresa' },
      { id: 3, letter: 'D', text: 'Penny' },
    ],
    correctAnswerId: 0,
    cost: 8000,
  },
  {
    id: 5,
    question:
      'What is the name of the 1976 film about the Watergate scandal, starring Robert Redford and Dustin Hoffman?',
    answers: [
      { id: 0, letter: 'A', text: 'Never say never' },
      { id: 1, letter: 'B', text: 'A Star Is Born' },
      { id: 2, letter: 'C', text: "All the President's Men" },
      { id: 3, letter: 'D', text: '1900' },
    ],
    correctAnswerId: 2,
    cost: 16000,
  },
  {
    id: 6,
    question:
      'Which popular video game franchise has released games with the subtitles World At War and Black Ops?',
    answers: [
      { id: 0, letter: 'A', text: 'Call of Duty' },
      { id: 1, letter: 'B', text: 'Battlefield' },
      { id: 2, letter: 'C', text: 'PUBG' },
      { id: 3, letter: 'D', text: 'Fortnite' },
    ],
    correctAnswerId: 0,
    cost: 64000,
  },
  {
    id: 7,
    question: 'In what US State is the city Nashville?',
    answers: [
      { id: 0, letter: 'A', text: 'Massachusetts' },
      { id: 1, letter: 'B', text: 'Texas' },
      { id: 2, letter: 'C', text: 'Talas' },
      { id: 3, letter: 'D', text: 'Tennessee' },
    ],
    correctAnswerId: 3,
    cost: 125000,
  },
  {
    id: 8,
    question: 'Which rock band was founded by Trent Reznor in 1988?',
    answers: [
      { id: 0, letter: 'A', text: 'Nine Inch Nails' },
      { id: 1, letter: 'B', text: 'AC/DC' },
      { id: 2, letter: 'C', text: 'Metallica' },
      { id: 3, letter: 'D', text: 'Rage agonist' },
    ],
    correctAnswerId: 0,
    cost: 250000,
  },
  {
    id: 9,
    question: 'What is the currency of Denmark?',
    answers: [
      { id: 0, letter: 'A', text: 'Kratos' },
      { id: 1, letter: 'B', text: 'Krone' },
      { id: 2, letter: 'C', text: 'Zeus' },
      { id: 3, letter: 'D', text: 'Artemida' },
    ],
    correctAnswerId: 1,
    cost: 500000,
  },
  {
    id: 10,
    question: 'In which European country would you find the Rijksmuseum?',
    answers: [
      { id: 0, letter: 'A', text: 'France' },
      { id: 1, letter: 'B', text: 'Germany' },
      { id: 2, letter: 'C', text: 'Netherlands' },
      { id: 3, letter: 'D', text: 'Ireland' },
    ],
    correctAnswerId: 2,
    cost: 1000000,
  },
];
