const isSimpleNum = (num) => {
  const iter = (counter) => {
    const remainder = num % counter;
    if (counter > Math.floor(num ** 1 / 2)) return true;
    if (remainder === 0) return false;
    return iter(counter + 1);
  };

  return iter(2);
};

export default isSimpleNum;
