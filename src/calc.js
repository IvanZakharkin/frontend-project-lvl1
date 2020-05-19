const calc = (a, b, operation) => {
  switch (operation) {
    default:
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
  }
};

export default calc;
