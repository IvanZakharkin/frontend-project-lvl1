import getRandomIntNum from './getRandomIntNum.js';
import isEven from './isEven.js';

const getDataForBrainEven = () => {
  const desk = 'Answer "yes" if the number is even, otherwise answer "no".';
  const randomNum = getRandomIntNum();
  const answer = isEven(randomNum) ? 'yes' : 'no';
  return [desk, [randomNum, answer]];
};

export default getDataForBrainEven;
