const CHAR = "a";

function countOccurrences(string) {
  return [...string].filter((c) => c.toLowerCase() === CHAR).length;
}

let stringInput = "Hello, World!";
const result = countOccurrences(stringInput);

result
  ? console.log(`A letra "${CHAR}" aparece ${result} vezes na string`)
  : console.log(`A letra "${CHAR}" não aparece na string`);
