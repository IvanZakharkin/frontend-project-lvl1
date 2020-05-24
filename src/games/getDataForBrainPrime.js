import getRandomIntNum from '../getRandomIntNum.js';
import isSimpleNum from '../isSimpleNum.js';

const getDataForBrainPrime = () => {
  const desk = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const num = getRandomIntNum(0);
  const question = num.toString();
  const answer = isSimpleNum(num) ? 'yes' : 'no';
  return [desk, [question, answer]];
};

export default getDataForBrainPrime;
