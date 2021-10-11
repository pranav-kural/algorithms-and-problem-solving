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

## Insertion Sort
- Somewhat similar to bubble and selection sorting algorithms
- In this case, throughout the sorting process (iteration) we consider one side of 
the array to be sorted (starting with just the first element on the sorted side), then we compare the next
element on the unsorted side, to see where it would fit properly on the sorted side, and insert it in the right spot
- There are no swaps (as such) happening in this algorithm
- In case of fairly sorted data (but not exactly sorted) insertion algorithm works really well. As it avoids doing anything at all in the iteration where element in already in it's correct spot (besides checking conditional statement)
- It's a good online algorithm, i.e., good sorting algorithm to be used in situation where the input data is continuously coming (live data from some other feed) and needs to stay sorted
- (in most cases of unsorted data) Much faster than bubble sort, and faster than selection sort by a small margin

## Merge Sort
- One of the more complex (but faster) sorting algorithms
- Exploits the fact that arrays of length 0 or 1 are always sorted
- Modus Operandi: 
    - Keep dividing/spliting array(s) into half, until you reach arrays of length 1 or 0. So for [8,1,60,4] -> [8,1],[60,4] -> [8], [1], [60], [4]
    - Then put the arrays back in sorted order: [8], [1], [60], [4] -> [1,8],[4,60] -> [1,4,8,60]


