class Solution {
    /**
     * @param {string[]} logs
     * @return {number}
     */
    minOperations(logs) {
        let mapping = new Map();
        mapping.set('../',-1);
        mapping.set('./',0);
        let stack = new Array();
        for(let i = 0; i<logs.length;++i){
            if(stack.length == 0){
                
                if(mapping.has(logs[i])){
                    continue;
                }
                else{
                    stack.push(logs[i]);
                }
            }
            else{
                if(mapping.has(logs[i])){
                    if(mapping.get(logs[i])<0){
                        stack.pop()
                    }
                }
                else{
                    stack.push(logs[i])
                }
            }
        
        }

        return stack.length

    }
}
