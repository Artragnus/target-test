function isValidFibonacci(input) {
  let a = 0;
  let b = 1;
  let c = 0;
  while (c < input) {
    c = a + b;
    a = b;
    b = c;
    c = a + b;
  }
  return c === input;
}

const input = 21;
const result = isValidFibonacci(input);

result
  ? console.log(`${input} faz parte da sequência de Fibonacci`)
  : console.log(`${input} não faz parte da sequência de Fibonacci`);
