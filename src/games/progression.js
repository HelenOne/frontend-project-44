import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  return Array.from({ length }, (_, i) => start + i * step);
};

const generateRound = () => {
  const progressionLength = getRandomNumber(5, 10);
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 5);
  const progression = generateProgression(start, step, progressionLength);
  
  const hiddenIndex = getRandomNumber(0, progressionLength - 1);
  const correctAnswer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';
  
  const question = progression.join(' ');
  return { question, correctAnswer };
};

export default () => runGame(gameDescription, generateRound);
