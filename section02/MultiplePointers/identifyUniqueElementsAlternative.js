function identifyUniqueElementsAlternative(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  let left = 0;

  for (let right = 0; right < numbers.length; right++) {
    if (numbers[left] !== numbers[right]) {
      left += 1;
      numbers[left] = numbers[right];
    }
  }

  return left + 1;
}
const numbersExample = [-2, -2, -2, -1, -1, 0, 1, 2];

console.log(identifyUniqueElementsAlternative(numbersExample));
