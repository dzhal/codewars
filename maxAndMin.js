function highAndLow(numbers){
  console.log(numbers.split(' ').map(item => parseInt(item, 10)));
  // ...
  return `${Math.max(...numbers.split(' ').map(item => parseInt(item, 10)))} ${Math.min(...numbers.split(' ').map(item => parseInt(item, 10)))}`
}

console.log(highAndLow("1 2 3 4 5"));
