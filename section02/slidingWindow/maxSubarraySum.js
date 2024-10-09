function maxSubarraySum(numbers, n) {
  let maxSum = 0;

  for (let i = 0; i < n; i++) {
    maxSum += numbers[i];
  }

  let tempSum = maxSum;

  for (let i = n; i < numbers.length; i++) {
    tempSum = tempSum - numbers[i - n] + numbers[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

const numbersExample = [2, 6, 9, 2, 1, 8, 5, 6, 3];
const nExample = 3;

console.log(maxSubarraySum(numbersExample, nExample));
