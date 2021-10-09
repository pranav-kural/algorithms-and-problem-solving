# Sorting Algorithms

## Bubble Sort
- If sorting in ascending order: sorts the larger values first towards the end of the array in iterations, until whole array is sorted.
- If sorting in descending order, the direction switches. Larger arrays are sorted first towards the left of array.
- Called bubble sort because larger values are bubbled up.
- In most cases, Big O is O(n^2), but in some cases it can be less or even O(n), especially in case of fairly sorted data

## Selection Sort
- Similar to bubble sort, but focuses on sorting the smaller values first towards one end of the array (left end of array for ascending order, and right end for descending order).
- Called selection sort because, in each iteration, it selects the minimum value to swap the current position element with
Example: if sorting [5,1,2,0,4]; and sorting in ascending; selection sort will first swap '5' with value '0', and so on
- Through each iteration, it has to keep track of the minimum value among all unsorted values
- When there is no minimum value to swap, array is fully sorted
- Worst case time complexity - O(n^2)
- selection sort might be better than bubble sort ONLY in certain situations, like in case you want to minimize the number of swaps