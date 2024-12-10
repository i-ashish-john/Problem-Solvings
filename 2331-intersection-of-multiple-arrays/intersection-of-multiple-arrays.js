/**
 * @param {number[][]} nums
 * @return {number[]}
 */
const intersection = (nums) => {
  let ht = {};
  let interSectionArr = [];
  const length = nums.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      ht[nums[i][j]] = ht[nums[i][j]] ? ht[nums[i][j]] + 1 : 1;
    }
  }

  for (let key in ht) {
    if (ht[key] == length) {
      interSectionArr.push(+key);
    }
  }

  return interSectionArr;
};