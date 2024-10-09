function same(numbers, squaredNumbers) {
  if (numbers.length !== squaredNumbers.length) {
    return false;
  }

  const tracker = {};

  for (const number of numbers) {
    const squaredNumber = Math.pow(number, 2);
    if (tracker[squaredNumber]) {
      tracker[squaredNumber] += 1;
    } else {
      tracker[squaredNumber] = 1;
    }
  }

  for (const squaredNumber of squaredNumbers) {
    if (tracker[squaredNumber] && tracker[squaredNumber] > 0) {
      tracker[squaredNumber] -= 1;
    } else {
      return false;
    }
  }

  return true;
}

const testNumbers = [1, 2, 3];
const testSquaredNumbers = [1, 4, 9];

const result = same(testNumbers, testSquaredNumbers);

console.log(result);
