/**
 * KMP search algorithm
 * KMP = Knuth Morris Pratt
 * Good resource to learn: https://www.youtube.com/watch?v=4jY57Ehc14Y&ab_channel=LogicFirst
 * 
 * Problem: count the occurence of a substring in a given string
 * Requirements: string and substring not null or undefined
 * Inputs: masterString, patternString
 * Outputs: count of occurence of patternString in masterString
 * 
 * Plan:
 *  - Implement LPS table
 *  - Implement KMP Search algorithm
 */

// "use strict";

// import LPS array computation module
const { computeLPSarray } = require('./lps-array');

// implementing KMP search algorithm
const KMPSearchArray = (text, pattern) => {
    // initialize variables
    const textLength = text.length;
    const patternLength = pattern.length;
    let counter = 0; // count of occurence of pattern in text
    const patternPositions = []; // array to hold index of position in text where pattern exists

    // initialize pointers
    let i = 0; // pointer for text
    let j = 0; // pointer for pattern

    // get LPS array for the pattern
    const lps = computeLPSarray(pattern);

    // loop through text, but stop once the characters left are less than length of pattern
    while (i < (textLength-patternLength)+1) {
        // if there is a match between elements on current pointer positions
        if (text[i] === pattern[j]) {
            // increment pointers to next position
            i++;
            j++;
        } else {
            // if there is mismatch
            // reset j (pointer of pattern)
            if (j != 0) {
                j = lps[j-1];
            } else {
                i++;
                // no need to increment pointer for pattern
                // just increment pointer in text and start matching pattern all over again
            }
        }

        // if there is a full pattern match within the text
        if (j === patternLength) {
            // increment counter
            counter++;
            // add index of position where pattern starts in the text to patternPositions
            patternPositions.push(i-j);
            // reset pointer of pattern to last match to continue search
            j = lps[j-1];
        }
    } // end: while-loop

    // return result - count of occurences of pattern, and their position in text
    return [counter, patternPositions]
} // end: KMPsearch

// test
const text = "abaaca";
const pattern = "aa";

// get KMP search results
[counter, patternPositions] = [...KMPSearchArray(text.split(''),pattern.split(''))]

console.log(`The pattern "${pattern}"" occurs in the text "${text}": ${counter} times, at position(s) ${patternPositions.map(x => x+1).join(",")}`); // [0, 1, 0, 1, 2, 2]