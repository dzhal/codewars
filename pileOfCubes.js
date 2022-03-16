function findNb(m) {
    // your code
    let iter = 0;
    while (m > 1) {
        iter++;
        m -= Math.pow(iter, 3);
        if (m === 0) return iter;
    }
    return (-1);
}

console.log(findNb(4183059834009));