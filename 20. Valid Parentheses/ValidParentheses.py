class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        stack = []
        valid = {'(':')', '{':'}', '[':']'}
        for i in range(len(s)):
            stack.append(s[i])
            for j in range (i+1, len(s)):
                if valid[s[i]]==s[j]:
                    stack.append(s[j])
                else:
                    return False
            if len(stack)%2 == 0:
                return True
            else:
                return False
                