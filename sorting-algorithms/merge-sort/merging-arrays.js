/**
 * Implementation of a helper function for merging two sorted number arrays
 * 
 * Example:
 *  Input: [1,3,4,80],[3,15,99,102]
 *  Expected output: [1,3,3,4,15,80,99,102]
 */

const mergeSortedArrays = (arr1, arr2) => {

    // if any of the arrays are null or input provided not array
    if (!(Array.isArray(arr1)) || !(Array.isArray(arr2))) return [];

    // initialize variables
    let i = 0;  // pointer for arr1
    let j = 0;  // pointer for arr2
    const mergedArray = []; // for holding sorted values
    // loop through elements of arr1 & arr2
    while (i < arr1.length && j < arr2.length) {
        // if element of arr1 is less than element of arr2
        if (arr1[i] <= arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;    // move to next element of arr1 in next iteration
         } else {
             mergedArray.push(arr2[j])
             j++;   // move to next element of arr2 in next iteration
         }
    }
    // to handle cases of empty arrays, or where above while exists before merging all items
    (i < arr1.length) ? mergedArray.push(...arr1.slice(i)) : mergedArray.push(...arr2.slice(j));
    
    // return the merged array
    return mergedArray;
};

// test
console.log("Merged array: ", mergeSortedArrays([1,3,4,80],[3,15,99,102]));

module.exports = { mergeSortedArrays };