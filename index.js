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