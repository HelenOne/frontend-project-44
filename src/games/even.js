import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  return number % 2 === 0;
};

const playRound = () => {
  const number = getRandomNumber(1, 100);
  const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => runGame(gameDescription, playRound);
