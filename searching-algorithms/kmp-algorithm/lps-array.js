/**
 * Computes the LPS table
 * Returns: An array representing the LPS table for a given pattern
 * LPS = Longest Prefix that is also suffix
 * Example:
 *  Patter: ["a","a","b","a","a"]
 *  LPS array: [0,1,0,1,2,2]
 * Each of the numbers in LPS represents the LPS in the pattern until that point
 * First "1" in LPS, represents that ["a","a"] -> has a longest prefix=suffix of length one ("a")
 */

// computes and responds with LPS array for a given pattern
exports.computeLPSarray = (pattern) => {
    // initialize LPS array
    const lps = [];
    // initialize pointers
    let len = 0; //len of LPS
    let i = 1;   // current pointer in pattern

    // set 0th element of LPS = 0, since there will be no proper prefix/suffix
    lps[0] = 0

    //loop through the pattern
    while (i < pattern.length) {
        // if characters at len and i position in pattern match (implying prefix and suffix same)
        if (pattern[len] === pattern[i]) {
            lps[i] = len + 1;
            // increment pointers to next positions
            len++;
            i++;
        } else {
            // reset value of len on a mismatch to previous match
            if (len != 0) {
                len = lps[len-1]
                // no need to change position of pointer i, as position to match len with remains same
            } else {
                // set lps = 0 (i.e.) no prefix suffix match
                lps[i] = 0
                // increment pointer
                i++;
                // no need to increment len, as start position remains the same
            } // end: inner if-else
        } // end: outer if-else
    } // end: while loop

    // return lps
    return lps;
} // end: computerLPSarray