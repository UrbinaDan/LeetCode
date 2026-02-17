#Brute Force
class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """

        for i in range (len(nums)):
            num1= nums[i]
            for j in range (i+1, len(nums)):
                num2 = nums[j]
                if num1 + num2 == target:
                    return [i, j]
 

 #O(n) Solution
class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        seen = {}
        for i,num in enumerate(nums):
            complement = target - num
            if complement in seen:
                return [seen[complement], i]
            seen[num]=i
