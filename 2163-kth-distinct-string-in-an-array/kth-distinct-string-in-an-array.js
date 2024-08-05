/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
  const map = {};
  for (const string of arr) {
    map[string] = (map[string] || 0) + 1;
  }

  let curr = 0;
  for (const key in map) {
    if (map[key] === 1) curr++;
    if (curr === k) return key;
  }

  return '';
};