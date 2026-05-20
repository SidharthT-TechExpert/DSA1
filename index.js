function sumOfNEven(n) {
        if (n === 0) return 0

        return (!(n % 2) ? n : 0) + sumOfNEven(n - 1)
}


function sumOfEven(array, index = 0) {
        if (array.length <= index) return 0

        return (!(array[index] % 2) ? array[index] : 0) + sumOfEven(array, index + 1);
}

const ar = [1, 2, 3, 4];
// console.log(`Sum of Even:${sumOfEven(ar)}`)//246
// console.log(sumOfNEven(4));//246

//Reverse 

function reverseStr(str) {

        if (!str.length) return '';

        return reverseStr(str.slice(1)) + str[0]
}

function reverseWords(str) {
        if (!str.length) return '';
        return str.split(' ').map(word => reverseStr(word)).join(' ');
}

//console.log(reverseWords('Hello World'));//olleH dlroW



const arr = [1, 2, 3, 4, 5, 6];

function binarySearch(ar, search) {
        let start = 0;
        let end = ar.length - 1;

        while (start <= end) {

                let mid = Math.floor((start + end) / 2);

                if (ar[mid] === search) {
                        return mid;
                }

                if (ar[mid] < search) {
                        start = mid + 1;
                } else {
                        end = mid - 1;
                }
        }

        return -1;
}

function binarySeachRecursive(ar, search, start = 0, end = ar.length - 1) {
        if (start > end) return -1;

        let mid = Math.floor((start + end) / 2);

        if (ar[mid] === search) {
                return mid;
        }

        if (ar[mid] < search) {
                return binarySeachRecursive(ar, search, mid + 1, end);
        }

        return binarySeachRecursive(ar, search, start, mid - 1);
}

// the work increases very slowly even if input becomes huge.
console.log("Index of value:", binarySearch(arr, 3));
console.log("Index of value:", binarySeachRecursive(arr, 4));



const prime = (n, start = Math.floor(Math.sqrt(n))) => {
    if (n < 2) return false;

    if (start === 1) return true;

    if (!(n % start)) return false;

    return prime(n, start - 1)

}

console.log("Is prime:", prime(11));




//Linked List

class Node {
    constructor (value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor (){
        this.head = null;
        this.size = 0;
    }
    
    prepend(value){
        const node = new Node(value);
        
        if(!this.isEmpty()) {
            node.next = this.head
        }
        
        this.head = node;
        this.size++;
    }
    
    append(value){
       const node = new Node(value);
       
       if(this.isEmpty()){
           this.head = node;
       }else{
           let curr = this.head;
           
           while(curr.next){
               curr = curr.next
           }
           
           curr.next=node;
       }
       this.size++;
    }
    
    print () {
        if(this.isEmpty()){
            console.log("The List is Empty");
        }else {
            let curr = this.head;
            let listValues = '';
            
            while(curr){
                listValues += `${curr.value} `;
                curr = curr.next;
            }
            
            console.log(listValues)
            
        }
    }
    
    removeFirst(){
        if(this.isEmpty()){
           return console.log("This list is empty, not posible to remove!");
        }
        
        this.head = this.head.next;
        this.size--;
    }
    
     removeLast(){
       if(this.isEmpty()){
           return console.log("This list is empty, not posible to remove!");
        }

        let curr = this.head;
        let prev = null;

        while(curr && curr.next.next){
            curr=curr.next;
        }
        
        curr.next=null;
        this.size--;
    }
    
    isEmpty() {
        return this.size === 0;
    }
    
    getSize() {
        return this.size;
    }
}

const list = new LinkedList();

list.prepend(1)
list.prepend(2)
list.prepend(3)
list.prepend(4)
list.print()
list.removeFirst()
list.append(23)
list.print()
list.removeFirst()
list.print()

