/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function(nums, maxOperations) {
    let left = 1;
    let right = 10 ** 9;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        const count = nums.reduce((result, num) => {
            return result + Math.floor((num - 1) / mid);
        }, 0);

        count > maxOperations ? left = mid + 1 : right = mid;
    }
    return left;
};