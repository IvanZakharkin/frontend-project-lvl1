import getProgressionAndHiddenEl from '../getProgressionAndHiddenEl.js';


const getDataForBrainGcd = () => {
  const desk = 'What number is missing in the progression?';
  const data = getProgressionAndHiddenEl();
  const question = data[0];
  const answer = data[1];
  return [desk, [question, answer]];
};

export default getDataForBrainGcd;
