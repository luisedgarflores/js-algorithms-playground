function validAnagram(strOne, strTwo) {
  const keeperStrOne = {};
  const keeperStrTwo = {};

  if (strOne.length !== strTwo.length) return false;

  for (let i = 0, lt = strOne.length - 1; i <= lt; i++) {
    if (!isNaN(keeperStrOne[strOne[i]])) {
      keeperStrOne[strOne[i]] += 1;
    } else {
      keeperStrOne[strOne[i]] = 1;
    }
    if (!isNaN(keeperStrTwo[strTwo[i]])) {
      keeperStrTwo[strTwo[i]] += 1;
    } else {
      keeperStrTwo[strTwo[i]] = 1;
    }
  }

  for (const [key, value] of Object.entries(keeperStrOne)) {
    if (!(key in keeperStrTwo)) return false;
    if (value !== keeperStrTwo[key]) return false;
  }

  return true;
}
