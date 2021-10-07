// recursive solution to return the product of all numbers in an array

function productOfArray(arr) {
    // base case
    if (arr.length == 1) return arr[0];
    // recursive call
    return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1,2,3,10])); // 60