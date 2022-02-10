const reverseWords = str => {
    let result = '';
    str.split(' ').forEach(i => {
        i.split('').reverse().join('');
        result += i.split('').reverse().join('') + ' ';
    });
    return result.trim();
}

