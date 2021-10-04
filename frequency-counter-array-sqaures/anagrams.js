/*
Challenge: Given two strings, write a function to determine if the second string is an anagram of the first

Example of an anagram: cinema -> iceman

Frequency of letters needs to be same in both strings
*/

// for ease of logging to console
log = console.log

areStringsAnagrams = (str1, str2) => {

    // initialize frequency counters
    let frequencyCounterStr1 = {}
    let frequencyCounterStr2 = {}

    // get frequencies of letters for both strings
    for (let letter of str1) {
        frequencyCounterStr1[letter] = (frequencyCounterStr1[letter] || 0) + 1
    }
    for (let letter of str2) {
        frequencyCounterStr2[letter] = (frequencyCounterStr2[letter] || 0) + 1
    }

    // check if frequencies of letters match
    for (let letter in frequencyCounterStr1) {
        if ((letter in frequencyCounterStr2) && (frequencyCounterStr1[letter] === frequencyCounterStr2[letter])) {
            continue
        } else {
            // stop further execution and return false
            return false
        }
    }

    // if frequency check matches
    return true
}

log("Are the following strings Anagrams?")
log("hello | hippopotamus:", areStringsAnagrams("hello", "hippopotamus"))
log("aaz | zza:", areStringsAnagrams("aaz", "zza"))
log("anagram | nagaram :", areStringsAnagrams("anagram", "nagaram"))
log("awesome | some :", areStringsAnagrams("awesome", "some"))
log("texttwisttime | timetwisttext :", areStringsAnagrams("texttwisttime", "timetwisttext"))
log("cinema | iceman :", areStringsAnagrams("cinema", "iceman"))


