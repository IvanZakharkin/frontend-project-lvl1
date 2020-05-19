import readlineSync from 'readline-sync';

const engine = (game) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  let n = 1;
  do {
    const dataForGame = game();
    const deskGame = dataForGame[0];
    const question = dataForGame[1][0];
    const answer = dataForGame[1][1];
    if (n === 1) console.log(deskGame);
    console.log(`Question: ${question} `);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer === userAnswer) {
      console.log('Correct!');
      n += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  } while (n <= 3);
  console.log(`Congratulations, ${userName}!`);
};
export default engine;
