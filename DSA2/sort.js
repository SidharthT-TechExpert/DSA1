let arr = [5, 2, 9, 1, 5, 6];


// Swap function to swap two elements in an array
function swap(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
}

// Bubble sort 
// function bubbleSort(ar) {
//     let n = ar.length - 1;
//     let swapped = false;

//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n - i; j++) {
//             if (ar[j] > ar[j + 1]) {
//                 [ar[j], ar[j + 1]] = [ar[j + 1], ar[j]];
//                 swapped = true;
//             }
//         }



//         if (!swapped) break; // If no two elements were swapped by inner loop, then break;


//     }


//     return ar;
// }

function bubbleSort(ar) {
    let n = ar.length;

    while (n > 1) {
        let lastSwap = 0;
        for (let i = 1; i < n; i++) {
            if (ar[i - 1] > ar[i]) {
                swap(ar, i, i - 1);
                lastSwap = i;
            }
        }
        n = lastSwap;
    }
    return ar;
}


// Time complexity
// Best case O(n) (with swapped optimization)
// Average Case O(n^2) with lastSwap reduce unwanted Comparison then reduce litle bit time complexity comparing to normal or swapped flag 
// Worst Case O(n^2)

// Interview tip: If asked, "When is Bubble Sort O(n)?" the correct answer is:

// When the array is already sorted and the 
// implementation uses a swapped flag (early termination optimization). 
// Without this optimization, Bubble Sort is O(n²) even for a sorted array.


//Selection   Sort 
function selectionSort(ar) {
    let n = ar.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (ar[minIndex] > ar[j]) {
                minIndex = j;
            }
        }

        if (minIndex != i) {
            swap(ar, i, minIndex);
        }
    }

    return ar;
}
// Interview Answer

// Complexity:

// Best: O(n²)
// Average: O(n²)
// Worst: O(n²)
// Space: O(1)

// Advantages:

// Simple to implement
// Constant extra space
// Fewer swaps than Bubble Sort
// Good for small arrays

// Disadvantages:

// Slow for large datasets
// Best case is still O(n²)
// Not stable by default
// Less efficient than O(n log n) algorithms like Merge Sort and Quick Sort

//Insertion Sort
function InsertionSort(ar) {
    let n = ar.length;

    for (let i = 1; i < n; i++) {
        let key = ar[i];
        let j = i - 1;

        while (j >= 0 && ar[j] > key) {
            ar[j + 1] = ar[j];
            j--;
        }

        ar[j + 1] = key;
    }

    return ar;
}
// best case O(n);
// worst case O(n^2);
//Space comp O(1);
//Stable 

//Merge Sort
function mergeSort(ar) {
    if (ar.length <= 1) return ar;

    let mid = Math.floor(ar.length / 2);

    let left = mergeSort(ar.slice(0, mid));
    let right = mergeSort(ar.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}
// Time Complexity all case O(n log(n))
//Space Complexity O(n)
//Stable 
// Large DataSet it's effishent 

function quickSortUExArray(arr) {
    if (arr.length <= 1) return arr;

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {

        let pivot = partition(arr, low, high);

        quickSort(arr, low, pivot - 1);
        quickSort(arr, pivot + 1, high);
    }

    return arr;
}

function partition(ar, low, high) {
    let pivot = ar[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (pivot > ar[j]) {
            i++;
            swap(ar, i, j);
        }
    }
    i++;
    swap(ar, i, high);
    return i;
}


// Time Complexity:
// Best Case:    O(n log n)
// Average Case: O(n log n)
// Worst Case:   O(n²)

// Space Complexity:
// Best/Average: O(log n)
// Worst Case:   O(n)

console.log("Original array:", arr);
// console.log(mergeSort(arr))
console.log("Quick Sort Result:", quickSort(arr));

// console.log(bubbleSort(arr));
// console.log(SelectionSort(arr));
// console.log(InsertionSort(arr));
// console.log("Sorted array:", arr);