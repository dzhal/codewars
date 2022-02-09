function getSum(a, b) {
    let sum = 0;

    if (a > b) {
        [a, b] = [b, a];
    }

    let i = a;
    while (i <= b) {
        sum += i;
        i++;
    }
    return sum;
}

getSum(1,0);
getSum(-5,5);

