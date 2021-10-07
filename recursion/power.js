// power function using recursion

function power(base, exponent){
    // base case
    if (exponent === 1) return base;
    // recursive call
    return base * power(base, exponent-1);
}

console.log(power(5,2));  //16