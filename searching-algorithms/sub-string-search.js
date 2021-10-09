"use strict";

// a naive implementation of a sub-string search
/*
Problem: find the count of a sub-string in a given string
Requirements: strings not null or undefined
Inputs: originalString, subString
Outputs: count of substring in the original string
Plan:
    - start with count = 0
    - loop through each charater in originalString
    - starting from current character position, check if substring exists
    - if it does, increment the count
    - if it doesn't, continue the iteration and check
    - iteration to finish once the length of originalString left to check is equal to length of substring
    - return result
*/

// for ease of logging
const log = console.log;

// for testing
const originalString = "The way I see it, if you want the rainbow, you gotta put up with the rain. - Dolly Parton"
const subString = "ain"

function substringSearch(originalString, subString) {
    // initialize count
    let count = 0;
    // loop through originalString
    for (let i = 0; i < originalString.length; i++) {

        // substring to check
        let substringToCheck = originalString.slice(i,i+subString.length)

        // increment count if there's a match
        if (substringToCheck === subString) count++;
    }
    // return count
    return count;
}

// log results
log("Original string: ", originalString)
log(`The substring "${subString}" occurs in the original string ${substringSearch(originalString, subString)} times.`);