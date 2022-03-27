function stray(numbers) {
    if (numbers[0] !== numbers[1] && numbers[0] !== numbers[2]) return numbers[0];
    for (let i = 0; i < numbers.length - 1; i++) {
        // console.log(numbers[i]);
        if (numbers[i] - numbers[i+1] !== 0 ) return numbers[i+1];
        }
}

console.log(stray([2, 1, 1]));
// stray([1, 1, 2])