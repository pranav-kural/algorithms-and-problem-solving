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

"use strict";

// import LPS array computation module
const { computeLPSarray } = require('./lps-array')

// test
console.log(computeLPSarray(["a","a","b","a","a","a"])); // [0, 1, 0, 1, 2, 2]