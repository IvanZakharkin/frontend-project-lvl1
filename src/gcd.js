const gcd = (a, b) => {
  if (a === 0) return b;
  if (b === 0) return a;
  let c = a;
  let d = b;
  if (a > b) {
    c %= d;
  } else {
    d %= a;
  }
  return gcd(c, d);
};

export default gcd;
