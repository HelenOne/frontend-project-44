import readlineSync from 'readline-sync';
import { roundsCount } from '../constants.js';

const welcomeMessage = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  return name;
};

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
};

const calculate = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const playRound = () => {
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(1, 50);
  const operator = getRandomOperator();
  const expression = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculate(num1, operator, num2);
  console.log(`Question: ${expression}`);
  const answer = readlineSync.question('Your answer: ').trim();
  return { answer: parseInt(answer, 10), correctAnswer };
};

export default () => {
  const name = welcomeMessage();
  let correctAnswersCount = 0;

  while (correctAnswersCount < roundsCount) {
    const { answer, correctAnswer } = playRound();
    if (answer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
