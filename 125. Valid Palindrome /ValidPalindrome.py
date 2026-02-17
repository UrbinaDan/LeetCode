#First Approach
class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        newString = "".join(char.lower()for char in s if char.isalnum())
        l,r = 0, len(newString)-1
        while l<r:
            if newString[l]==newString[r]:
                l=l+1
                r=r-1
            else:
                return False
        return True

            
#More effective approach

class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        # newString = "".join(char.lower()for char in s if char.isalnum())
        l,r = 0, len(s)-1
        while l<r:
            if not s[l].isalnum():
                l=l+1
                continue
            if not s[r].isalnum():
                r=r-1
                continue

            if s[l].lower()==s[r].lower():
                l=l+1
                r=r-1
            else:
                return False
        return True

            