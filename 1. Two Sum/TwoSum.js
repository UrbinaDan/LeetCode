// Brute Force
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i=0; i<nums.length; i++){
        let num1=nums[i];
        for(let j=i+1; j<nums.length; j++){
            let num2=nums[j];
            if (num1+num2==target){
                return ([i,j]);
            }
        }
    }
};


 //O(n) Solution
 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const seen = new Map();
    for (let i=0; i<nums.length; i++ ){
        complement = target - nums[i];
        if (seen.has(complement)){
            return [seen.get(complement), i];
        }
        seen.set(nums[i])=i;
    }

};