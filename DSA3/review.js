let ar = [1,2,3,4,5,6];
// let ar = [1,"hello",3,"5"];

// let sum = ar.reduce((sum,curr)=> {
//     if(typeof curr === 'number'){
//         sum += curr;
//     }
//     return sum;
// },0)

function moveZero(ar){
    let result = [];
    
    for(let i = 0 ; i < ar.length-1;i++){
        if(ar[i]===0){
            result.push(...ar.splice(i,1));
            i--;
        }
    }

    for(let i = 0 ; i <= ar.length-1 ; i++){
        result.push(ar[i]);
    }
    
    
    
    return result;
}

// console.log(moveZero(ar))
// console.log(sum)

function binaryS(ar,search){
    let left = 0 , right = ar.length  - 1; 
    
    while(left >= right){
            let mid = Math.floor((left+right)/2);

        if(ar[mid]=== search){
            return mid;
        }
        
        if(ar[mid]>search){
            right = mid -1 ;
        }else{
            left = mid +1;
        }
        
    }
    
    return -1;
}

console.log(binaryS(ar))



function mergeSort(ar,start=0, end=ar.length-1){
    
    if(ar.length-1 === 1) return ar;
    
    let mid = Math.floor((start+end)/2);
    
    let left = mergeSort(ar.slice(0,mid),start, mid-1);
    let right = mergeSort(ar.slice(mid),mid+1,end);
    
    return merge(left,right);
    
}

function merge(left,right){
    let result = [];
    let i = 0 , j= 0;
    
   for(let k=0 ; k <left.length ; k++){
       if(left[i]>rigth[j]){
           result.push(rigth[j]);
           j++;
       }else{
           result.push(left[i]);
           i++;
       }
   }
   return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([5,4,3,6,2,1]))

let ar 