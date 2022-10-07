export const fiboNums = (howMany: number) => {
  const sequence = [];
  for (let i = 0, a = 0, b = 1; i < howMany; i++) {
    if (i % 2 === 0) {
      sequence.push(a);
      a += b;
    } else {
      sequence.push(b);
      b += a;
    }
  }
  return sequence;
};
