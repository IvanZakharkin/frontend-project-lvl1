import getRandomIntNum from './getRandomIntNum.js';

const getProgressionAndHiddenEl = () => {
  const firstNum = getRandomIntNum();
  const progressionDifference = getRandomIntNum();
  const indexHiddenEl = getRandomIntNum(0, 9);
  const arrProgression = [firstNum];
  let n = 1;
  do {
    arrProgression[n] = arrProgression[n - 1] + progressionDifference;
    n += 1;
  } while (n < 10);
  const hiddenEl = arrProgression[indexHiddenEl].toString();
  arrProgression[indexHiddenEl] = '..';
  const strProgression = arrProgression.join(' ');
  return [strProgression, hiddenEl];
};

export default getProgressionAndHiddenEl;
