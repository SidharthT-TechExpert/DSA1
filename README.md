# 📚 Data Structures & Algorithms — Complete Study Guide

> A deep-dive Q&A reference for mastering DSA fundamentals — from memory management to advanced algorithm patterns. Built for learners who want to understand the *why*, not just the *what*.

![DSA](https://img.shields.io/badge/Topic-Data%20Structures%20%26%20Algorithms-blue)
![Level](https://img.shields.io/badge/Level-Beginner%20to%20Intermediate-green)
![Language](https://img.shields.io/badge/Code-JavaScript-yellow)

---

## 🗺️ How to Use This Guide

- Read each **Q&A** to understand the concept deeply
- Study the **code examples** — don't just read them, type them out
- Complete every **sample workout** before moving on
- Use the **comparison tables** to lock in the differences
- Come back to the **applications** section to connect theory to real-world use

---

## 📋 Table of Contents

| # | Topic |
|---|---|
| 1 | [What is an Algorithm?](#what-is-an-algorithm) |
| 2 | [What is a Data Structure?](#what-is-a-data-structure) |
| 3 | [Memory Allocation & Memory Leak](#memory-allocation--memory-leak) |
| 4 | [How to Prevent Memory Leaks](#how-to-prevent-memory-leaks) |
| 5 | [Complexity Analysis](#complexity-analysis) |
| 6 | [Asymptotic Analysis & Big-O Notation](#asymptotic-analysis--big-o-notation) |
| 7 | [Time Complexity — Best, Average & Worst Cases](#time-complexity--best-average--worst-cases) |
| 8 | [Divide and Conquer Algorithm](#divide-and-conquer-algorithm) |
| 9 | [Linear Search vs Binary Search](#linear-search-vs-binary-search) |
| 10 | [Linear vs Non-Linear Data Structures](#linear-vs-non-linear-data-structures) |
| 11 | [Applications of Binary Search](#applications-of-binary-search) |
| 12 | [Array Types](#array-types) |
| 13 | [What is Recursion?](#what-is-recursion) |
| 14 | [Applications of Recursion](#applications-of-recursion) |
| 15 | [Stack](#stack) |
| 16 | [Linked List](#linked-list) |
| 17 | [Doubly Linked List](#doubly-linked-list) |
| 18 | [Circular Linked List](#circular-linked-list) |
| 19 | [Linked List vs Array](#linked-list-vs-array) |
| 20 | [Linked List Operations — Sample Workouts](#linked-list-operations--sample-workouts) |
| 21 | [String Concepts & Sample Workouts](#string-concepts--sample-workouts) |
| 22 | [Linear Search — Sample Workouts](#linear-search--sample-workouts) |
| 23 | [Binary Search — Sample Workouts](#binary-search--sample-workouts) |
| 24 | [Iterative vs Recursive Binary Search](#iterative-vs-recursive-binary-search) |
| 25 | [Recursion — Sample Workouts](#recursion--sample-workouts) |
| 26 | [Stack — Sample Workouts](#stack--sample-workouts) |
| 27 | [Space Complexity](#space-complexity) |
| 28 | [Tail Recursion](#tail-recursion) |
| 29 | [Two Pointer Technique](#two-pointer-technique) |
| 30 | [Sorting Algorithms Overview](#sorting-algorithms-overview) |
| 31 | [Queue](#queue) |
| 32 | [Common DSA Problem Patterns](#common-dsa-problem-patterns) |
| 33 | [DSA Cheat Sheet](#dsa-cheat-sheet) |
| 34 | [Applications of All Structures](#applications-of-all-structures) |

---

## 🧠 What is an Algorithm?

**Q: What is an algorithm?**

An algorithm is a finite, well-defined sequence of instructions or steps used to solve a specific problem or perform a computation. It takes an input, processes it through a series of steps, and produces an output.

**Key properties of a good algorithm:**
- **Finiteness** — must terminate after a finite number of steps
- **Definiteness** — each step must be precisely defined
- **Input** — zero or more inputs
- **Output** — one or more outputs
- **Effectiveness** — each step must be basic enough to be carried out

**Example:** Finding the largest number in a list is an algorithm — iterate through each element, track the maximum, return it at the end.

---

## 🗂️ What is a Data Structure?

**Q: What is a data structure?**

A data structure is a way of organizing, storing, and managing data in memory so it can be accessed and modified efficiently. The choice of data structure directly impacts the performance of an algorithm.

**Common categories:**
- **Linear:** Arrays, Linked Lists, Stacks, Queues
- **Non-Linear:** Trees, Graphs
- **Hash-based:** Hash Tables / Hash Maps

**Why it matters:** Using the right data structure can reduce time complexity from O(n) to O(log n) or even O(1) for certain operations.

---

## 💾 Memory Allocation & Memory Leak

**Q: What is memory allocation?**

Memory allocation is the process of reserving a portion of computer memory for a program to use during execution.

- **Static Allocation** — memory is allocated at compile time (e.g., global variables, stack memory). Size must be known in advance.
- **Dynamic Allocation** — memory is allocated at runtime (e.g., `malloc` in C, `new` in Java/C++). Flexible but requires manual or garbage-collected cleanup.

**Stack vs Heap:**
| | Stack | Heap |
|---|---|---|
| Allocation | Automatic | Manual / GC |
| Size | Fixed / limited | Large, flexible |
| Speed | Fast | Slower |
| Lifetime | Tied to function scope | Until freed |

**Q: What is a memory leak?**

A memory leak occurs when a program allocates memory dynamically but never releases it after it is no longer needed. Over time, the program consumes more and more memory, eventually causing slowdowns or crashes.

**Example (C):**
```c
void leak() {
    int *ptr = malloc(100 * sizeof(int)); // allocated
    // forgot to call free(ptr) — memory is leaked
}
```

**Example (JavaScript):**
```js
let cache = {};
function store(key, value) {
    cache[key] = value; // grows indefinitely if keys are never removed
}
```

---

## 🛡️ How to Prevent Memory Leaks

**Q: How do you prevent memory leaks?**

1. **Free memory explicitly** — In languages like C/C++, always call `free()` or `delete` after use.
2. **Use smart pointers** — In C++, use `std::unique_ptr` or `std::shared_ptr` to manage ownership automatically.
3. **Rely on garbage collection** — Languages like Java, Python, and JavaScript have GC, but you still need to avoid holding unnecessary references.
4. **Nullify references** — Set object references to `null` when done so the GC can reclaim them.
5. **Avoid global variables** — They persist for the lifetime of the program.
6. **Use memory profiling tools** — Tools like Valgrind (C/C++), Chrome DevTools (JS), or VisualVM (Java) help detect leaks.
7. **Close resources** — Always close file handles, database connections, and streams.

---

## 📊 Complexity Analysis

**Q: What is complexity analysis?**

Complexity analysis is the process of evaluating how the resource usage (time or space) of an algorithm grows as the input size increases. It helps compare algorithms and predict performance at scale.

**Two types:**
- **Time Complexity** — how long an algorithm takes to run
- **Space Complexity** — how much memory an algorithm uses

Complexity is expressed as a function of input size `n`, using Big-O notation.

---

## 📈 Asymptotic Analysis & Big-O Notation

**Q: What is asymptotic analysis?**

Asymptotic analysis describes the behavior of an algorithm as the input size approaches infinity. It ignores constants and lower-order terms to focus on the dominant growth factor.

**Q: What is Big-O notation?**

Big-O notation expresses the upper bound (worst-case) of an algorithm's growth rate.

| Notation | Name | Example |
|---|---|---|
| O(1) | Constant | Array index access |
| O(log n) | Logarithmic | Binary search |
| O(n) | Linear | Linear search |
| O(n log n) | Linearithmic | Merge sort |
| O(n²) | Quadratic | Bubble sort |
| O(2ⁿ) | Exponential | Recursive Fibonacci |
| O(n!) | Factorial | Permutations |

**Other notations:**
- **Ω (Omega)** — best-case lower bound
- **Θ (Theta)** — tight bound (both upper and lower)

---

## ⏱️ Time Complexity — Best, Average & Worst Cases

**Q: What are best, average, and worst case complexities?**

For any algorithm, performance can vary depending on the input:

- **Best Case (Ω)** — the most favorable input (e.g., searching for the first element)
- **Average Case (Θ)** — expected performance over all possible inputs
- **Worst Case (O)** — the most unfavorable input (e.g., searching for an element not in the list)

**Example — Linear Search on array of n elements:**
| Case | Scenario | Complexity |
|---|---|---|
| Best | Target is at index 0 | O(1) |
| Average | Target is somewhere in the middle | O(n/2) → O(n) |
| Worst | Target is at the last index or not found | O(n) |

**Q: Why focus more on worst-case complexity?**

Worst-case complexity gives a guaranteed upper bound on performance. In production systems, you need to ensure the algorithm will not exceed acceptable time limits even under the most unfavorable conditions. Average case requires probabilistic assumptions that may not hold in practice.

---

## ⚔️ Divide and Conquer Algorithm

**Q: What is divide and conquer?**

Divide and conquer is an algorithm design paradigm that works by recursively breaking a problem into smaller subproblems, solving each independently, and combining their results.

**Three steps:**
1. **Divide** — split the problem into smaller subproblems
2. **Conquer** — solve each subproblem recursively
3. **Combine** — merge the solutions into a final answer

**Classic examples:**
- **Merge Sort** — divide array in half, sort each half, merge
- **Quick Sort** — partition around a pivot, sort each partition
- **Binary Search** — eliminate half the search space each step
- **Strassen's Matrix Multiplication**

**Time complexity benefit:** Many D&C algorithms achieve O(n log n) instead of O(n²).

---

## 🔍 Linear Search vs Binary Search

**Q: What is linear search?**

Linear search checks each element one by one from the beginning until the target is found or the list ends.

- Works on **unsorted** and sorted data
- Time complexity: **O(n)**

```js
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}
```

**Q: What is binary search?**

Binary search repeatedly divides a **sorted** array in half, comparing the middle element to the target and eliminating the irrelevant half.

- Requires **sorted** data
- Time complexity: **O(log n)**

```js
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
```

**Comparison:**
| | Linear Search | Binary Search |
|---|---|---|
| Data requirement | Any | Must be sorted |
| Time complexity | O(n) | O(log n) |
| Space complexity | O(1) | O(1) iterative |
| Best for | Small / unsorted data | Large sorted data |

---

## 🌐 Linear vs Non-Linear Data Structures

**Q: What is the difference between linear and non-linear data structures?**

| | Linear | Non-Linear |
|---|---|---|
| Definition | Elements arranged sequentially | Elements arranged hierarchically or in a network |
| Traversal | Single level, one pass | Multiple levels, multiple paths |
| Memory | Usually contiguous or linked | Scattered |
| Examples | Array, Linked List, Stack, Queue | Tree, Graph |
| Complexity | Generally simpler | More complex but more powerful |

---

## 🎯 Applications of Binary Search

**Q: What are the real-world applications of binary search?**

1. **Dictionary / phone book lookup** — find a word or name in sorted order
2. **Database indexing** — B-trees use binary search principles
3. **Finding a version that introduced a bug** — `git bisect` uses binary search
4. **Square root / power calculations** — binary search on answer space
5. **Search in rotated sorted arrays** — modified binary search
6. **Finding boundaries** — first/last occurrence of an element
7. **IP routing tables** — longest prefix matching
8. **Autocomplete systems** — searching sorted prefix lists

---

## 🧩 Array Types

**Q: What is a Jagged Array?**

A jagged array (also called a ragged array) is an array of arrays where each inner array can have a different length.

```js
const jagged = [[1, 2], [3, 4, 5], [6]];
```

**Q: What is a Sparse Array?**

A sparse array is an array where most elements are zero or empty. Storing all values wastes memory, so sparse arrays use special representations (like a dictionary of index→value pairs) to store only non-zero elements.

```js
// Instead of [0, 0, 0, 5, 0, 0, 3], store:
const sparse = { 3: 5, 6: 3, length: 7 };
```

**Q: What is a Homogeneous Array?**

A homogeneous array stores elements of the **same data type** (e.g., all integers, all strings). Most arrays in statically typed languages (C, Java) are homogeneous.

```c
int arr[5] = {1, 2, 3, 4, 5}; // all integers
```

**Q: What is a Heterogeneous Array?**

A heterogeneous array stores elements of **different data types**. Common in dynamically typed languages like Python and JavaScript.

```js
const hetero = [1, "hello", true, null, { key: "value" }];
```

---

## 🔄 What is Recursion?

**Q: What is recursion?**

Recursion is a programming technique where a function calls itself to solve a smaller version of the same problem. Every recursive solution has:

1. **Base case** — the condition that stops the recursion
2. **Recursive case** — the function calling itself with a smaller input

```js
function factorial(n) {
    if (n === 0) return 1;          // base case
    return n * factorial(n - 1);   // recursive case
}
```

**How it works in memory:** Each recursive call is pushed onto the call stack. When the base case is reached, the stack unwinds and results are combined.

**Recursion vs Iteration:**
| | Recursion | Iteration |
|---|---|---|
| Readability | Often cleaner for tree/graph problems | Better for simple loops |
| Memory | Uses call stack (risk of stack overflow) | Constant stack space |
| Performance | Can be slower due to function call overhead | Generally faster |

---

## 🌀 Applications of Recursion

**Q: What are the applications of recursion?**

1. **Tree traversal** — inorder, preorder, postorder
2. **Graph traversal** — DFS (Depth First Search)
3. **Sorting algorithms** — Merge Sort, Quick Sort
4. **Divide and conquer** — Binary Search, Strassen's algorithm
5. **Dynamic programming** — Fibonacci, knapsack (with memoization)
6. **Backtracking** — N-Queens, Sudoku solver, maze solving
7. **Tower of Hanoi**
8. **Parsing expressions** — compilers use recursive descent parsers
9. **Fractal generation**
10. **File system traversal** — recursively listing directories

---

## 📦 Stack

**Q: What is a Stack?**

A stack is a linear data structure that follows the **LIFO** (Last In, First Out) principle — the last element inserted is the first one to be removed. Think of a stack of plates: you add and remove from the top only.

```
     TOP
  |  30  |  ← push / pop here
  |  20  |
  |  10  |
  --------
```

**Core operations:**
| Operation | Description | Time Complexity |
|---|---|---|
| `push(x)` | Add element to the top | O(1) |
| `pop()` | Remove and return top element | O(1) |
| `peek() / top()` | View top element without removing | O(1) |
| `isEmpty()` | Check if stack is empty | O(1) |
| `size()` | Return number of elements | O(1) |

**Q: How is a stack implemented?**

A stack can be implemented using an array or a linked list.

```js
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) return "Underflow — stack is empty";
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) return "Stack is empty";
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items.join(' | '));
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print();   // 10 | 20 | 30
stack.pop();     // 30
stack.peek();    // 20
```

**Q: What is stack overflow and stack underflow?**

- **Stack Overflow** — occurs when you try to `push` onto a full stack (in fixed-size implementations) or when infinite recursion exhausts the call stack memory.
- **Stack Underflow** — occurs when you try to `pop` from an empty stack.

**Q: What is the call stack?**

The call stack is a special stack maintained by the runtime to track active function calls. When a function is called, a **stack frame** (containing local variables, parameters, and return address) is pushed. When the function returns, its frame is popped. This is why recursion without a base case causes a stack overflow.

**Q: What are the applications of a Stack?**

1. **Function call management** — the call stack in every programming language runtime
2. **Expression evaluation** — evaluating postfix (RPN) expressions
3. **Expression conversion** — infix → postfix / prefix conversion
4. **Balanced parentheses checking** — `{[()]}` validation
5. **Undo / Redo operations** — text editors, Photoshop
6. **Browser back button** — history of visited pages
7. **Backtracking algorithms** — maze solving, DFS
8. **Syntax parsing** — compilers use stacks to parse code
9. **Reversing a string or sequence**
10. **Memory management** — stack segment in process memory

**Q: Stack vs Queue — what is the difference?**

| | Stack | Queue |
|---|---|---|
| Principle | LIFO (Last In First Out) | FIFO (First In First Out) |
| Insert | Push at top | Enqueue at rear |
| Remove | Pop from top | Dequeue from front |
| Use case | Undo, recursion, DFS | Scheduling, BFS, print spooler |

**Q: How do you check balanced parentheses using a stack?**

Push every opening bracket onto the stack. For every closing bracket, check if the top of the stack is the matching opener — if not, the string is unbalanced.

```js
function isBalanced(str) {
    const stack = [];
    const map = { ')': '(', ']': '[', '}': '{' };
    for (const ch of str) {
        if ('([{'.includes(ch)) stack.push(ch);
        else if (')]}'.includes(ch)) {
            if (stack.pop() !== map[ch]) return false;
        }
    }
    return stack.length === 0;
}

console.log(isBalanced("{[()]}")); // true
console.log(isBalanced("{[(])}"));  // false
```

**Q: How do you reverse a string using a stack?**

```js
function reverseString(str) {
    const stack = [];
    for (const ch of str) stack.push(ch);
    let reversed = '';
    while (stack.length) reversed += stack.pop();
    return reversed;
}

console.log(reverseString("hello")); // "olleh"
```

**Q: What is a monotonic stack?**

A monotonic stack is a stack that maintains its elements in either strictly increasing or strictly decreasing order. It is used to efficiently solve problems like:
- Next Greater Element
- Next Smaller Element
- Largest Rectangle in Histogram
- Trapping Rain Water

```js
// Next Greater Element using monotonic stack
function nextGreaterElement(arr) {
    const result = new Array(arr.length).fill(-1);
    const stack = []; // stores indices

    for (let i = 0; i < arr.length; i++) {
        while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
            const idx = stack.pop();
            result[idx] = arr[i];
        }
        stack.push(i);
    }
    return result;
}

console.log(nextGreaterElement([4, 5, 2, 10, 8])); // [5, 10, 10, -1, -1]
```

---

## 🔗 Linked List

**Q: What is a linked list and what are its applications?**

A linked list is a linear data structure where elements (called **nodes**) are stored in non-contiguous memory locations. Each node contains:
- **Data** — the value stored
- **Next pointer** — a reference to the next node

```
[10 | →] → [20 | →] → [30 | null]
```

**Types:**
- Singly Linked List
- Doubly Linked List
- Circular Linked List

**Applications:**
- Implementation of stacks and queues
- Undo/redo functionality in editors
- Browser history (back/forward navigation)
- Music playlists
- Memory management (free list in OS)
- Polynomial arithmetic
- Hash table chaining (collision resolution)

**Advantages of Linked List:**
- Dynamic size — grows and shrinks at runtime
- Efficient insertion/deletion at beginning: O(1)
- No memory wastage from pre-allocation
- Flexible memory usage (non-contiguous)

**Disadvantages of Linked List:**
- No random access — must traverse from head: O(n)
- Extra memory for pointers
- Poor cache performance (non-contiguous memory)
- Reverse traversal is difficult in singly linked lists
- More complex to implement than arrays

---

## ↔️ Doubly Linked List

**Q: What is a doubly linked list?**

A doubly linked list is a linked list where each node has **two pointers** — one pointing to the next node and one pointing to the previous node.

```
null ← [10 | ↔] ↔ [20 | ↔] ↔ [30 | null]
```

**Advantages over singly linked list:**
- Can traverse in both directions
- Deletion of a node is easier (no need to track previous node)
- Better for implementing deques and LRU cache

**Disadvantage:** Uses more memory (extra pointer per node).

---

## 🔁 Circular Linked List

**Q: What is a circular linked list?**

A circular linked list is a linked list where the last node's `next` pointer points back to the **head** node instead of `null`, forming a circle.

```
[10] → [20] → [30] → (back to [10])
```

Can be singly or doubly circular.

**Applications:**
- Round-robin scheduling (CPU scheduling)
- Circular buffers / ring buffers
- Multiplayer board games (turn rotation)
- Media players with repeat mode

---

## ⚖️ Linked List vs Array

| Feature | Array | Linked List |
|---|---|---|
| Memory | Contiguous | Non-contiguous |
| Size | Fixed (static) or resizable | Dynamic |
| Access | O(1) random access | O(n) sequential |
| Insertion at start | O(n) — shift elements | O(1) |
| Insertion at end | O(1) amortized | O(n) without tail pointer |
| Deletion | O(n) — shift elements | O(1) with pointer to node |
| Cache performance | Excellent | Poor |
| Memory overhead | None | Extra pointer per node |

---

## 💪 Linked List Operations — Sample Workouts

### 1. Construction of Singly & Doubly Linked List

```js
// Singly Linked List
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    // Add node at the end
    append(data) {
        const node = new Node(data);
        if (!this.head) { this.head = node; return; }
        let curr = this.head;
        while (curr.next) curr = curr.next;
        curr.next = node;
    }

    // Add node at the beginning
    prepend(data) {
        const node = new Node(data);
        node.next = this.head;
        this.head = node;
    }

    // Delete node by value
    delete(value) {
        if (!this.head) return;
        if (this.head.data === value) { this.head = this.head.next; return; }
        let curr = this.head;
        while (curr.next && curr.next.data !== value) curr = curr.next;
        if (curr.next) curr.next = curr.next.next;
    }

    // Insert after node with value x
    insertAfter(x, data) {
        let curr = this.head;
        while (curr && curr.data !== x) curr = curr.next;
        if (!curr) return;
        const node = new Node(data);
        node.next = curr.next;
        curr.next = node;
    }

    // Insert before node with value x
    insertBefore(x, data) {
        if (!this.head) return;
        if (this.head.data === x) { this.prepend(data); return; }
        let curr = this.head;
        while (curr.next && curr.next.data !== x) curr = curr.next;
        if (!curr.next) return;
        const node = new Node(data);
        node.next = curr.next;
        curr.next = node;
    }

    // Print all elements in order
    print() {
        let curr = this.head, result = [];
        while (curr) { result.push(curr.data); curr = curr.next; }
        console.log(result.join(' -> '));
    }

    // Print all elements in reverse order
    printReverse(node = this.head) {
        if (!node) return;
        this.printReverse(node.next);
        process.stdout.write(node.data + ' ');
    }

    // Remove duplicates from sorted singly linked list
    removeDuplicates() {
        let curr = this.head;
        while (curr && curr.next) {
            if (curr.data === curr.next.data) curr.next = curr.next.next;
            else curr = curr.next;
        }
    }
}
```

### 2. Convert Array to Linked List

```js
function arrayToLinkedList(arr) {
    const list = new SinglyLinkedList();
    arr.forEach(val => list.append(val));
    return list;
}

// Usage
const list = arrayToLinkedList([1, 2, 3, 4, 5]);
list.print(); // 1 -> 2 -> 3 -> 4 -> 5
```

### 3. Doubly Linked List Construction

```js
class DNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(data) {
        const node = new DNode(data);
        if (!this.head) { this.head = this.tail = node; return; }
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }

    prepend(data) {
        const node = new DNode(data);
        if (!this.head) { this.head = this.tail = node; return; }
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    printForward() {
        let curr = this.head, result = [];
        while (curr) { result.push(curr.data); curr = curr.next; }
        console.log(result.join(' <-> '));
    }

    printBackward() {
        let curr = this.tail, result = [];
        while (curr) { result.push(curr.data); curr = curr.prev; }
        console.log(result.join(' <-> '));
    }
}
```

---

## 🔤 String Concepts & Sample Workouts

**Q: What are key string concepts in DSA?**

- Strings are arrays of characters
- Immutable in many languages (Java, Python, JavaScript)
- Common operations: search, replace, reverse, substring, palindrome check
- Important algorithms: KMP, Rabin-Karp, Z-algorithm for pattern matching

### Sample Workout 1 — Shift each character by n positions

```js
// Replace each alphabet with the character n positions ahead
function shiftString(str, n) {
    return str.split('').map(ch => {
        if (ch >= 'a' && ch <= 'z') {
            return String.fromCharCode(((ch.charCodeAt(0) - 97 + n) % 26) + 97);
        }
        if (ch >= 'A' && ch <= 'Z') {
            return String.fromCharCode(((ch.charCodeAt(0) - 65 + n) % 26) + 65);
        }
        return ch;
    }).join('');
}

console.log(shiftString("abc", 2));  // "cde"
console.log(shiftString("xyz", 3));  // "abc"
```

### Sample Workout 2 — Check if a string is a palindrome

```js
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
```

### Sample Workout 3 — Count frequency of each character

```js
function charFrequency(str) {
    const freq = {};
    for (const ch of str) {
        freq[ch] = (freq[ch] || 0) + 1;
    }
    return freq;
}

console.log(charFrequency("hello")); // { h:1, e:1, l:2, o:1 }
```

---

## 🔎 Linear Search — Sample Workouts

### Sample Workout 1 — Basic linear search

```js
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

console.log(linearSearch([4, 2, 7, 1, 9], 7)); // 2
console.log(linearSearch([4, 2, 7, 1, 9], 5)); // -1
```

### Sample Workout 2 — Find all occurrences

```js
function findAllOccurrences(arr, target) {
    const indices = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) indices.push(i);
    }
    return indices;
}

console.log(findAllOccurrences([1, 3, 2, 3, 4, 3], 3)); // [1, 3, 5]
```

### Sample Workout 3 — Search in 2D array

```js
function linearSearch2D(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === target) return [i, j];
        }
    }
    return [-1, -1];
}

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(linearSearch2D(matrix, 5)); // [1, 1]
```

---

## 🔀 Iterative vs Recursive Binary Search

**Q: Which is better — iterative or recursive binary search, and why?**

Both produce the correct result with the same O(log n) time complexity. The difference is in **memory usage and performance**.

### Iterative

```js
function binarySearchIterative(arr, target) {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
```

### Recursive

```js
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) return -1;  // base case

    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) return binarySearchRecursive(arr, target, mid + 1, right);
    else return binarySearchRecursive(arr, target, left, mid - 1);
}
```

### Head-to-head comparison

| Factor | Iterative | Recursive |
|---|---|---|
| **Time complexity** | O(log n) | O(log n) |
| **Space complexity** | **O(1)** ✅ | O(log n) — call stack |
| **Stack overflow risk** | None | Possible on huge inputs |
| **Performance** | Faster — no function call overhead | Slightly slower |
| **Readability** | Clear and straightforward | Elegant but adds mental overhead |
| **Industry standard** | Yes ✅ | Less common for arrays |

### Why iterative wins for binary search on arrays

The logic is identical — both eliminate half the search space each step. The only real difference is **where the state lives**: iterative keeps `left` and `right` as plain variables, recursive pushes a new stack frame for each call.

For an array of 1 billion elements, recursive binary search makes at most **~30 calls** (log₂ 1,000,000,000 ≈ 30), so stack overflow is not a real danger. But iterative is still preferred because:

1. **O(1) space** — no call stack usage at all, strictly better than O(log n)
2. **No function call overhead** — each recursive call has setup and teardown cost
3. **Industry standard** — most production code and standard libraries use the iterative version
4. **Predictable performance** — no risk of hitting runtime recursion limits

### When recursive binary search makes sense

- Working on a **BST (Binary Search Tree)** — the tree structure is naturally recursive, so recursion fits perfectly
- Language has **tail call optimization** (Haskell, some Scheme implementations) — the recursive call gets optimized into a loop anyway
- **Teaching / explaining** divide and conquer — the recursive version makes the "split in half" idea more visually obvious

**Bottom line:** For a flat sorted array, always use iterative. For tree-based binary search (BST traversal, segment trees), recursion is the natural and right choice.

---

## 🎯 Binary Search — Sample Workouts

### Sample Workout 1 — Iterative binary search

```js
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

console.log(binarySearch([1, 3, 5, 7, 9, 11], 7)); // 3
console.log(binarySearch([1, 3, 5, 7, 9, 11], 4)); // -1
```

### Sample Workout 2 — Find first occurrence of a target

```js
function firstOccurrence(arr, target) {
    let left = 0, right = arr.length - 1, result = -1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) { result = mid; right = mid - 1; }
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return result;
}

console.log(firstOccurrence([1, 2, 2, 2, 3, 4], 2)); // 1
```

### Sample Workout 3 — Find square root using binary search

```js
function sqrtBinarySearch(n) {
    if (n < 2) return n;
    let left = 1, right = Math.floor(n / 2), result = 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (mid * mid === n) return mid;
        else if (mid * mid < n) { result = mid; left = mid + 1; }
        else right = mid - 1;
    }
    return result;
}

console.log(sqrtBinarySearch(25)); // 5
console.log(sqrtBinarySearch(10)); // 3 (floor)
```

---

## 🌀 Recursion — Sample Workouts

### Sample Workout 1 — Fibonacci sequence

```js
function fibonacci(n) {
    if (n <= 1) return n;           // base case
    return fibonacci(n - 1) + fibonacci(n - 2); // recursive case
}

console.log(fibonacci(7)); // 13
```

### Sample Workout 2 — Tower of Hanoi

```js
function hanoi(n, from, to, aux) {
    if (n === 1) {
        console.log(`Move disk 1 from ${from} to ${to}`);
        return;
    }
    hanoi(n - 1, from, aux, to);
    console.log(`Move disk ${n} from ${from} to ${to}`);
    hanoi(n - 1, aux, to, from);
}

hanoi(3, 'A', 'C', 'B');
```

### Sample Workout 3 — Flatten a nested array recursively

```js
function flattenArray(arr) {
    let result = [];
    for (const item of arr) {
        if (Array.isArray(item)) result = result.concat(flattenArray(item));
        else result.push(item);
    }
    return result;
}

console.log(flattenArray([1, [2, [3, [4]], 5]])); // [1, 2, 3, 4, 5]
```

---

---

## 📦 Stack — Sample Workouts

### Sample Workout 1 — Evaluate a postfix expression

```js
// Postfix: "2 3 + 4 *" means (2+3)*4 = 20
function evaluatePostfix(expr) {
    const stack = [];
    const tokens = expr.split(' ');
    for (const token of tokens) {
        if (!isNaN(token)) {
            stack.push(Number(token));
        } else {
            const b = stack.pop();
            const a = stack.pop();
            if (token === '+') stack.push(a + b);
            else if (token === '-') stack.push(a - b);
            else if (token === '*') stack.push(a * b);
            else if (token === '/') stack.push(Math.floor(a / b));
        }
    }
    return stack.pop();
}

console.log(evaluatePostfix("2 3 + 4 *")); // 20
console.log(evaluatePostfix("5 1 2 + 4 * + 3 -")); // 14
```

### Sample Workout 2 — Sort a stack using recursion

```js
function insertSorted(stack, element) {
    if (stack.length === 0 || stack[stack.length - 1] <= element) {
        stack.push(element);
        return;
    }
    const top = stack.pop();
    insertSorted(stack, element);
    stack.push(top);
}

function sortStack(stack) {
    if (stack.length === 0) return;
    const top = stack.pop();
    sortStack(stack);
    insertSorted(stack, top);
}

const s = [3, 1, 4, 1, 5, 9, 2];
sortStack(s);
console.log(s); // [1, 1, 2, 3, 4, 5, 9]
```

### Sample Workout 3 — Implement a stack that returns the minimum in O(1)

```js
class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = []; // tracks minimums
    }

    push(val) {
        this.stack.push(val);
        const min = this.minStack.length === 0
            ? val
            : Math.min(val, this.minStack[this.minStack.length - 1]);
        this.minStack.push(min);
    }

    pop() {
        this.minStack.pop();
        return this.stack.pop();
    }

    getMin() {
        return this.minStack[this.minStack.length - 1];
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }
}

const ms = new MinStack();
ms.push(5); ms.push(3); ms.push(7); ms.push(2);
console.log(ms.getMin()); // 2
ms.pop();
console.log(ms.getMin()); // 3
```

---

## 🧮 Space Complexity

**Q: What is space complexity?**

Space complexity measures the total memory an algorithm uses relative to its input size `n`. It includes:

- **Input space** — memory used to store the input
- **Auxiliary space** — extra memory used by the algorithm (variables, call stack, data structures)

Usually when we say "space complexity" we mean **auxiliary space**.

**Common examples:**
| Algorithm | Space Complexity | Reason |
|---|---|---|
| Linear search | O(1) | Only a few variables |
| Binary search (iterative) | O(1) | No extra structures |
| Binary search (recursive) | O(log n) | Recursive call stack |
| Merge sort | O(n) | Temporary arrays for merging |
| Fibonacci (naive recursion) | O(n) | Call stack depth |
| Fibonacci (memoized) | O(n) | Cache array |

**Q: What is the space-time tradeoff?**

Often you can reduce time complexity by using more memory, or reduce memory usage at the cost of more computation. Example: caching (memoization) trades space for time — storing computed results avoids recomputation.

---

## 🐍 Tail Recursion

**Q: What is tail recursion?**

A recursive function is **tail recursive** when the recursive call is the very last operation in the function — there is nothing left to do after it returns. This allows compilers/interpreters to optimize it into a loop (tail call optimization, TCO), avoiding stack overflow.

**Non-tail recursive (builds up stack):**
```js
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1); // multiplication happens AFTER the call returns
}
```

**Tail recursive (no pending work after call):**
```js
function factorialTail(n, accumulator = 1) {
    if (n === 0) return accumulator;
    return factorialTail(n - 1, n * accumulator); // call is the last thing
}

console.log(factorialTail(5)); // 120
```

**Why it matters:** Without TCO, deep recursion causes stack overflow. Tail recursion lets the runtime reuse the same stack frame, making it as efficient as a loop.

---

## 👆👆 Two Pointer Technique

**Q: What is the two pointer technique?**

The two pointer technique uses two index variables that move through a data structure (usually an array or linked list) to solve problems more efficiently than nested loops. It reduces time complexity from O(n²) to O(n) in many cases.

**Two common patterns:**

**1. Opposite ends (converging pointers)** — start one pointer at the beginning and one at the end, move them toward each other.

```js
// Check if array has a pair that sums to target (sorted array)
function hasPairWithSum(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) return true;
        else if (sum < target) left++;
        else right--;
    }
    return false;
}

console.log(hasPairWithSum([1, 2, 4, 6, 8], 10)); // true (2+8)
```

**2. Same direction (fast & slow pointers)** — both pointers start at the beginning but move at different speeds. Used to detect cycles in linked lists.

```js
// Detect cycle in a linked list (Floyd's algorithm)
function hasCycle(head) {
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
}
```

**Common problems solved with two pointers:**
- Remove duplicates from sorted array
- Reverse an array in-place
- Find triplets that sum to zero
- Container with most water
- Detect cycle in linked list

---

---

## 🔃 Sorting Algorithms Overview

**Q: What are the most important sorting algorithms and how do they compare?**

Sorting is one of the most fundamental operations in CS. Every algorithm has a different strategy — understanding the tradeoffs helps you pick the right one.

### Visual Mental Model

```
Bubble Sort   → compare neighbors, bubble the biggest to the end each pass
Selection Sort → find the minimum, place it at the front each pass
Insertion Sort → pick each element, insert it into its correct position (like sorting cards)
Merge Sort     → split in half recursively, then merge sorted halves
Quick Sort     → pick a pivot, partition smaller/larger, recurse on each side
```

### Comparison Table

| Algorithm | Best | Average | Worst | Space | Stable? | Notes |
|---|---|---|---|---|---|---|
| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) | ✅ Yes | Simple, rarely used in practice |
| Selection Sort | O(n²) | O(n²) | O(n²) | O(1) | ❌ No | Always O(n²), no early exit |
| Insertion Sort | O(n) | O(n²) | O(n²) | O(1) | ✅ Yes | Best for small or nearly sorted data |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) | ✅ Yes | Consistent, great for linked lists |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) | ❌ No | Fastest in practice, bad pivot = O(n²) |

**Q: What does "stable" mean in sorting?**

A stable sort preserves the relative order of equal elements. Example: if two students have the same grade, a stable sort keeps them in their original order.

**Q: When should you use each sorting algorithm?**

- **Insertion Sort** — small arrays (< 20 elements), nearly sorted data, online sorting (data arrives one by one)
- **Merge Sort** — when stability matters, sorting linked lists, external sorting (data too large for RAM)
- **Quick Sort** — general purpose, large arrays in memory, when average performance matters more than worst case
- **Bubble/Selection Sort** — learning purposes only; avoid in production

### Merge Sort — Code

```js
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) result.push(left[i++]);
        else result.push(right[j++]);
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([5, 3, 8, 1, 9, 2])); // [1, 2, 3, 5, 8, 9]
```

### Quick Sort — Code

```js
function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const pivotIdx = partition(arr, low, high);
        quickSort(arr, low, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, high);
    }
    return arr;
}

function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

console.log(quickSort([5, 3, 8, 1, 9, 2])); // [1, 2, 3, 5, 8, 9]
```

---

## 🚶 Queue

**Q: What is a Queue?**

A queue is a linear data structure that follows the **FIFO** (First In, First Out) principle — the first element inserted is the first one removed. Think of a line at a ticket counter.

```
FRONT                        REAR
  ↓                           ↓
[ 10 ] ← [ 20 ] ← [ 30 ] ← [ 40 ]
  ↑ dequeue                   ↑ enqueue
```

**Core operations:**
| Operation | Description | Time Complexity |
|---|---|---|
| `enqueue(x)` | Add element to the rear | O(1) |
| `dequeue()` | Remove element from the front | O(1) |
| `peek() / front()` | View front element without removing | O(1) |
| `isEmpty()` | Check if queue is empty | O(1) |
| `size()` | Return number of elements | O(1) |

**Q: How is a Queue implemented?**

```js
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) return "Underflow — queue is empty";
        return this.items.shift();
    }

    peek() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items.join(' <- '));
    }
}

const q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.print();    // 10 <- 20 <- 30
q.dequeue();  // 10
q.peek();     // 20
```

**Q: What are the types of queues?**

| Type | Description | Use Case |
|---|---|---|
| **Simple Queue** | Basic FIFO | Task scheduling |
| **Circular Queue** | Rear connects back to front | CPU scheduling, ring buffers |
| **Priority Queue** | Elements dequeued by priority, not order | Dijkstra's algorithm, hospital triage |
| **Deque (Double-ended)** | Insert/remove from both ends | Sliding window problems, undo/redo |

**Q: What are the applications of a Queue?**

1. **CPU scheduling** — round-robin process scheduling
2. **Print spooler** — documents printed in order received
3. **BFS (Breadth First Search)** — graph/tree level-order traversal
4. **Keyboard buffer** — keystrokes processed in order
5. **Web server request handling** — requests served in order
6. **Message queues** — Kafka, RabbitMQ, SQS
7. **Cashier line simulation**
8. **Asynchronous data transfer** — IO buffers

### Queue Sample Workout — BFS Level Order Traversal

```js
// Level-order traversal of a binary tree using a queue
function levelOrder(root) {
    if (!root) return [];
    const result = [], queue = [root];

    while (queue.length) {
        const levelSize = queue.length;
        const level = [];
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        result.push(level);
    }
    return result;
}
```

---

## 🧠 Common DSA Problem Patterns

**Q: What are the most common patterns used to solve DSA problems?**

Recognizing a pattern is more valuable than memorizing solutions. Most interview problems map to one of these patterns:

---

### 1. 🪟 Sliding Window
Used when you need to find a subarray or substring that satisfies a condition.

- **Fixed window:** window size is given
- **Variable window:** window grows/shrinks based on a condition

```
When to use: "find max/min subarray of size k", "longest substring without repeating characters"
```

```js
// Maximum sum subarray of size k
function maxSumSubarray(arr, k) {
    let maxSum = 0, windowSum = 0;
    for (let i = 0; i < k; i++) windowSum += arr[i];
    maxSum = windowSum;
    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}

console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // 9 (5+1+3)
```

---

### 2. 👆👆 Two Pointers
Already covered — use when working with sorted arrays or finding pairs.

```
When to use: "pair with target sum", "remove duplicates", "reverse array in-place"
```

---

### 3. ⚡ Fast & Slow Pointers
Two pointers moving at different speeds. Used for cycle detection and finding midpoints.

```
When to use: "detect cycle in linked list", "find middle of linked list", "palindrome linked list"
```

```js
// Find middle of linked list
function findMiddle(head) {
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow; // slow is at the middle
}
```

---

### 4. 🔀 Merge Intervals
Used when dealing with overlapping intervals.

```
When to use: "merge overlapping intervals", "insert interval", "meeting rooms"
```

```js
function mergeIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        const last = result[result.length - 1];
        if (intervals[i][0] <= last[1]) last[1] = Math.max(last[1], intervals[i][1]);
        else result.push(intervals[i]);
    }
    return result;
}

console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]));
// [[1,6],[8,10],[15,18]]
```

---

### 5. 🔁 Cyclic Sort
Used when the array contains numbers in a given range (1 to n).

```
When to use: "find missing number", "find duplicate", "find all missing numbers"
```

```js
// Find missing number in array [1..n]
function findMissingNumber(arr) {
    let i = 0;
    while (i < arr.length) {
        const correct = arr[i] - 1;
        if (arr[i] !== arr[correct]) [arr[i], arr[correct]] = [arr[correct], arr[i]];
        else i++;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i + 1) return i + 1;
    }
    return arr.length + 1;
}

console.log(findMissingNumber([3, 1, 5, 4, 2, 7, 6])); // 8 (missing from 1-8)
```

---

### 6. 🌲 Tree BFS / DFS
- **BFS** — level by level using a queue → shortest path, level order
- **DFS** — go deep using recursion/stack → path finding, subtree problems

```
BFS: use a queue, process level by level
DFS: use recursion (or explicit stack), go deep first
```

---

### Pattern Recognition Quick Guide

| Problem says... | Pattern to use |
|---|---|
| Subarray / substring of size k | Sliding Window |
| Sorted array, find pair/triplet | Two Pointers |
| Linked list cycle / middle | Fast & Slow Pointers |
| Overlapping intervals | Merge Intervals |
| Array with numbers 1 to n | Cyclic Sort |
| Level order / shortest path | BFS (Queue) |
| Path in tree / all paths | DFS (Recursion) |
| All combinations / permutations | Backtracking |
| Optimal substructure, overlapping subproblems | Dynamic Programming |

---

## 📝 DSA Cheat Sheet

### Big-O Quick Reference

```
O(1)        → Hash map lookup, array index access
O(log n)    → Binary search, balanced BST operations
O(n)        → Linear search, single loop
O(n log n)  → Merge sort, quick sort (avg)
O(n²)       → Bubble/selection/insertion sort, nested loops
O(2ⁿ)       → Recursive Fibonacci, subset generation
O(n!)       → Permutations, brute-force TSP
```

### Data Structure Operations Quick Reference

| Structure | Access | Search | Insert | Delete |
|---|---|---|---|---|
| Array | O(1) | O(n) | O(n) | O(n) |
| Linked List | O(n) | O(n) | O(1) | O(1)* |
| Stack | O(n) | O(n) | O(1) | O(1) |
| Queue | O(n) | O(n) | O(1) | O(1) |
| Binary Search Tree | O(log n) | O(log n) | O(log n) | O(log n) |
| Hash Table | N/A | O(1) avg | O(1) avg | O(1) avg |

*O(1) deletion only when you already have a pointer to the node

### Recursion Template

```js
function solve(input) {
    // 1. Base case — when to stop
    if (baseCondition) return baseValue;

    // 2. Reduce the problem
    const smallerInput = reduce(input);

    // 3. Recursive call
    const subResult = solve(smallerInput);

    // 4. Build answer from sub-result
    return buildAnswer(subResult, input);
}
```

### Linked List Traversal Template

```js
let curr = head;
while (curr !== null) {
    // process curr.data
    curr = curr.next;
}
```

### Binary Search Template

```js
let left = 0, right = arr.length - 1;
while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (condition(mid)) return mid;          // found
    else if (shouldGoRight(mid)) left = mid + 1;
    else right = mid - 1;
}
return -1; // not found
```

### Common Mistakes to Avoid

| Mistake | Fix |
|---|---|
| Off-by-one in binary search | Use `left <= right`, not `left < right` |
| Forgetting base case in recursion | Always define what stops the recursion first |
| Modifying array while iterating | Iterate backwards or use a copy |
| Stack overflow in deep recursion | Convert to iterative or use tail recursion |
| Using `==` instead of `===` in JS | Always use strict equality |
| Not handling empty input | Check for null/empty at the start of every function |

---

## 🌍 Applications of All Structures

| Data Structure | Real-World Applications |
|---|---|
| **Array** | Image pixels, matrices, lookup tables, spreadsheets |
| **Linked List** | Browser history, undo/redo, music playlists, OS memory management |
| **Stack** | Function call stack, expression evaluation, backtracking, undo/redo, balanced brackets |
| **Queue** | Print spooler, CPU scheduling, BFS traversal, message queues (Kafka, RabbitMQ) |
| **Tree** | File systems, HTML DOM, database B-trees, decision trees |
| **Graph** | Social networks, GPS navigation, web crawlers, network routing |
| **String** | Text editors, search engines, DNA sequencing, compilers |
| **Recursion** | Compilers, OS file traversal, AI game trees, fractal rendering |
| **Binary Search** | Database queries, version control (git bisect), autocomplete |
| **Sorting** | E-commerce product ranking, database ORDER BY, leaderboards |
| **Two Pointers** | Sorted array problems, cycle detection, sliding window |
| **Sliding Window** | Network packet analysis, max subarray, longest substring |

---

## 🗓️ Suggested Study Plan

| Week | Topics |
|---|---|
| Week 1 | Algorithm basics, Memory, Complexity, Big-O, Arrays |
| Week 2 | Recursion, Linked Lists (Singly, Doubly, Circular) |
| Week 3 | Stack, Queue, String problems |
| Week 4 | Searching (Linear + Binary), Sorting algorithms |
| Week 5 | Two Pointers, Sliding Window, Problem Patterns |
| Week 6 | Practice — solve 2 problems per day on each topic |

---

> 💡 **Study tip:** For each topic, implement the concept from scratch before looking at solutions. Understanding the *why* behind each structure is more valuable than memorizing syntax.
>
> 🔥 **Practice tip:** After reading a concept, close this guide and try to write the code from memory. That's when real learning happens.
>
> 🎯 **Interview tip:** When given a problem, say the pattern out loud first — *"this looks like a sliding window problem"* — before writing any code. It shows structured thinking.
