function validAnagram(root, potentialAnagram) {
  if (root.length !== potentialAnagram.length) {
    return false;
  }

  const frequencyTracker = {};

  for (const char of root) {
    if (frequencyTracker[char]) {
      frequencyTracker[char] += 1;
    } else {
      frequencyTracker[char] = 1;
    }
  }

  for (const char of potentialAnagram) {
    if (frequencyTracker[char] && frequencyTracker[char] > 0) {
      frequencyTracker[char] -= 1;
    } else {
      return false;
    }
  }

  return true;
}

const rootExample = "aaz";
const potentialAnagramExample = "zza";

const result = validAnagram(rootExample, potentialAnagramExample);

console.log(result);
