function countUniqueValues(list) {
  let i = 0;
  let uniqueValues = list.length >= 1 ? 1 : 0;
  let j = 1;

  while (j < list.length) {
    if (list[i] !== list[j]) {
      i = j;
      uniqueValues++;
    }
    j++;
  }

  return uniqueValues;
}
