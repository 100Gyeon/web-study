function sum(min, max) {
    let output = 0;
    for(let i = min; i <= max; i++) {
        output += i;
    }
    return output;
}

function odd(x) {
    if(x % 2 == 0)
        return 'even';
}

console.log(sum(1,100)); // 5050
console.log(odd(9)); // undefined
console.log(odd(4)); // even