function bump(x) {
    let y = x.replaceAll('_', ''); 
    return y.length > 15 ? 'Car Dead' : 'Woohoo!';
}

console.log(bump('__n_nn_n_n_nn_nnnnnn'));