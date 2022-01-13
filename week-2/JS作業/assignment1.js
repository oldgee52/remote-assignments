function max(numbers) {
    let maxNum = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxNum) {
            maxNum = numbers[i];
        }
    }
    return maxNum;
}
max([1, 2, 4, 5]); // result to 5
max([5, 2, 7, 1, 6]); // result to 7*/