/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const mapping = {')':'(','}':'{',']':']'};
    for (let i=0; i<s.length; i++){
        if (mapping[s[i]]){
            top_stack = stack.length>0? stack.pop() : '#'
            if (mapping[s[i]] != top_element){
                return false
            }

        }
        else{
            stack.push(s[i])
        }

    }
    return stack.legth === 0;
    
};