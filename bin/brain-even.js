#!/usr/bin/env node
import readlineSync from 'readline-sync';

const roundsCount = 3;

const welcomeMessage = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  return name;
};

const isEven = (number) => {
  return number % 2 === 0;
};

const playRound = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ').trim().toLowerCase();
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return { answer, correctAnswer };
};

const main = () => {
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
}

main()
