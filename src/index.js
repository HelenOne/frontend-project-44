import { roundsCount } from "./constants.js";
import readlineSync from 'readline-sync';

export default (gameDescription, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameDescription);

  let correctAnswersCount = 0;
  while (correctAnswersCount < roundsCount) {
    const { question, correctAnswer } = generateRound();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ').trim();

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
