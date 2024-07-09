import runGame from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  return number % 2 === 0;
};

const playRound = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => runGame(gameDescription, playRound);
