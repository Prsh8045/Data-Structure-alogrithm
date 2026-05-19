//Remove duplicate array sorted
var removeDuplicates = function(nums) {
    let x=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>nums[x]){
            x=x+1;
            nums[x]=nums[i]
        }
    }
    return x+1;
};

//Remove Element
var removeElement = function(nums, val) {
    let x=0;
    for(i=0;i<nums.length;i++){
        if(nums[i]!=val){
            nums[x]=nums[i];
            x=x+1;
        }
    }
    return x;
    
};

//sum of all element in array
arr=[2,3,4,5,6];
function sum(n){
    if(n==0){
        return arr[n]
    }
    return arr[n]+sum(n-1)
}
let result=sum(arr.length-1);
console.log(result);

//sum of all odd numbers in the array.
let arr=[5,8,2,10,1,3] 

function sum(n){
          let isOdd=arr[n]%2!=0; 
          if(n==0){return isOdd?arr[n]:0}

        
     return (isOdd?arr[n]:0)+sum(n-1)                                               
}
console.log(sum(arr.length-1))
// Find the factorial of a number using recursion
let n=5
function fact(n){
    if(n==1){
        return 1;
    }
    return n*fact(n-1)
}
console.log(fact(n))
//Power of two
let n=5
var isPowerOfTwo = function(n) {
    if(n==1) return true;
    else if ((n%2 !==0)|| n<1) return false;
    return isPowerOfTwo(n/2)
    
};
console.log(isPowerOfTwo(n))