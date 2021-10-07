// recursive method to reverse a string

// plan:
// get the last element of the string
// concatenate it, with the next last element of string
// repeat until the end of string (reaching the first character of original string)
// return the result

function reverseString(strToReverse) {
    if (strToReverse.length === 1) return strToReverse;
    return strToReverse[strToReverse.length-1] + reverseString(strToReverse.slice(0,strToReverse.length-1))
}

console.log(reverseString('awesome')); // 'emosewa'
console.log(reverseString('rithmschool')); // 'loohcsmhtir'