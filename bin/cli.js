import readlineSync from 'readline-sync';

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const welcomeUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
};

const getRandomIntNum = () => Math.floor(Math.random() * 100);

const isEven = (num) => (num % 2 === 0);

const game = () => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let n = 1;
  do {
    const randomNum = getRandomIntNum();
    const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
    console.log(`Question: ${randomNum} `);
    const answerUser = readlineSync.question('Your answer: ');
    if (correctAnswer === answerUser) {
      console.log('Correct!');
      n += 1;
    } else {
      console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  } while (n <= 3);
  console.log(`Congratulations, ${userName}!`);
};

export { welcomeUser, game };
