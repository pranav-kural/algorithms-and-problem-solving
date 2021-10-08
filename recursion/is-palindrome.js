// recursive solution to check if a string is palindrome

/*

The Problem: check whether a given string is palindrome, i.e., reverse of string === original string

The Requirements: string not empty, not null or undefined

Flow:
1. check the first and last character of the string for equality
2. if similar, check for the first and last character of substring of the original string
substring = first and last characters removed from the original string
3. if all checks successful, return true

*/

function isPalindrome(str) {
    // base cases
    if (str.length == 1) {
        return true;
    } else if (str.length == 2) {
        return str[0] === str[1]
    } else {
        // recursive call
        return (str[0] === str[str.length-1]) && isPalindrome(str.slice(1,str.length-1))
    }
}

console.log("Checking for palindromes");
console.log('-'*7);
console.log("awesome: ", isPalindrome('awesome')); // false
console.log("foobar: ", isPalindrome('foobar')); // false
console.log("tacocat: ", isPalindrome('tacocat')); // true
console.log("amanaplanacanalpanama: ", isPalindrome('amanaplanacanalpanama')); // true