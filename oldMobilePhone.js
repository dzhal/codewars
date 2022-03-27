function presses(phrase) {
    const values = {
        1: ['1'],
        2: ['A', 'B', 'C', '2'],
        3: ['D', 'E', 'F', '3'],
        4: ['G', 'H', 'I', '4'],
        5: ['J', 'K', 'L', '5'],
        6: ['M', 'N', 'O', '6'],
        7: ['P', 'Q', 'R', 'S', '7'],
        8: ['T', 'U', 'V', '8'],
        9: ['W', 'X', 'Y', 'Z', '9'],
        0: [' ', '0'],
        "*": ['*'],
        "#": ['#'],
    };

    let symbolsArr = phrase.toUpperCase().split('');
    let resultArr = symbolsArr.map(item => {
        for (let digit in values) {
            if (values[digit].includes(item)) return values[digit].indexOf(item);
        }
    }
    )
    return resultArr.reduce((acc, next) => acc + next + 1, 0);
};

// presses("LOL");
console.log(presses("LOL 47"));
console.log(presses("HOW R U"));