function duplicateCount(text) {
    return text.match(/(\w).*\1/ig);
}

console.log(duplicateCount('Indivisibilities'));
