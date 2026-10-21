class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */


   isValid(s) {
        let map = new Map();
        map.set("}","{");
        map.set(")","(");
        map.set("]","[");
        
        let stack = new Array();
        let head = 0;
      
        for(let i = 0; i< s.length;++i){
            let index = s.charAt(i);
            if(index === '{' || index === '[' || index === '('){
                stack.push(index);
                head = i ;
            }
            else{
                if(stack.pop()=== map.get(index) ){
                    continue
                }
                return false
                
            }
           
        } 
          return stack.length === 0; 
    }
}
