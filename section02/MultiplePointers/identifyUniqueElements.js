function identifyUniqueElements(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  let counter = 1;
  let leftPointer = 0;
  let rightPointer = 1;

  while (rightPointer < numbers.length) {
    const leftNumber = numbers[leftPointer];
    const rightNumber = numbers[rightPointer];

    if (leftNumber !== rightNumber) {
      leftPointer = rightPointer;
      counter++;
    }

    rightPointer++;
  }

  return counter;
}

const numbersExample = [-2, -2, -2, -1, -1, 0, 1, 2];

console.log(identifyUniqueElements(numbersExample));
