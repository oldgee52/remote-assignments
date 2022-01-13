function twoSum(nums, target) {
    for (i = 0; i < nums.length; i += 1) {
        let remain;
        let answer = '';
        remain = target - nums[i];
        if (nums.indexOf(remain) > -1 && nums.indexOf(remain) != i) {
            answer = `[${i}, ${nums.indexOf(remain)}]`;
            return answer;
        }
    }
}
/*
For example:
twoSum([2, 7, 11, 15], 9);
Should returns:
[0, 1]
Because:
nums[0]+nums[1] is 9
*/