import getRandomIntNum from '../getRandomIntNum.js';
import gcd from '../gcd.js';

const getDataForBrainGcd = () => {
  const desk = 'Find the greatest common divisor of given numbers.';
  const firstNum = getRandomIntNum(0);
  const secondNum = getRandomIntNum(0);
  const question = `${firstNum} ${secondNum}`;
  const answer = gcd(firstNum, secondNum).toString();
  return [desk, [question, answer]];
};

export default getDataForBrainGcd;
