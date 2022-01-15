//用兩個for，依序與後面的數字相加
function twoSumWay1(nums, target) {
    for (i = 0; i < nums.length; i += 1) {
        for (j = 1; j < nums.length; j += 1) {
            if (nums[i] + nums[j] === target) {
                return `[${i}, ${j}]`;
            }
        }
    }
}


//利用array.indexOf，去找目標減去後剩下數值符合的條件
// nums.indexOf(remain) > -1表示該職有在陣列中；nums.indexOf(remain) != i 

function twoSumWay2(nums, target) {
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
twoSumWay1([2, 7, 11, 15], 9);
twoSumWay2([2, 7, 11, 15], 9);