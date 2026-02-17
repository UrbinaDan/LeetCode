//First Approach
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const cleanS = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let l=0, r= cleanS.length-1;
    while (l<r){
        if(cleanS[l]==cleanS[r]){
            l+=1;
            r-=1;
        }
        else{
            return false;
        }
    }
    return true;
};