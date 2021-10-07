// recursive solution to check if a string is palindrome

/*

The Problem: check whether a given string is palindrome, i.e., reverse of string === original string

The Requirements: string not empty, not null or undefined

Flow:
1. divide the string into half
2. reverse the second half
3. check if the reverse of second half is equal to first half
4. if it is, then the string is palindrome, return result

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