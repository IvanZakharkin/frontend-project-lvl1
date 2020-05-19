import getRandomIntNum from './getRandomIntNum.js';
import calc from './calc.js';

const getDataForBrainCalc = () => {
  const desk = 'What is the result of the expression?';
  const firstNum = getRandomIntNum();
  const secondNum = getRandomIntNum();
  const operations = ['+', '-', '*'];
  const randomOperation = operations[getRandomIntNum(0, 2)];
  const question = `${firstNum} ${randomOperation} ${secondNum}`;
  const answer = calc(firstNum, secondNum, randomOperation).toString();
  return [desk, [question, answer]];
};

export default getDataForBrainCalc;