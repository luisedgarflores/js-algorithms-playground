function sumZero(numbers) {
  let leftPointer = 0;
  let rightPointer = numbers.length - 1;

  while (leftPointer < rightPointer) {
    const sum = numbers[leftPointer] + numbers[rightPointer];

    if (sum === 0) {
      return [numbers[leftPointer], numbers[rightPointer]];
    } else if (sum > 0) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }

  return undefined;
}

const numbersExample = [-4, -3, -2, -1, 0, 5];

console.log(sumZero(numbersExample));
