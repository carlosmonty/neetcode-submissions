class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let operands = new Map();
        operands.set('+','+');
        operands.set('-','-');
        operands.set('*','*'); 
        operands.set('/','/');

        let result;
        let stack = new Array();

        for(let i = 0; i<tokens.length;++i){
            let val = tokens[i]
            let temp;
            if(operands.has(val)){
                if(stack.length<2){
                    return;
                }
                let x = stack.pop();
                let y = stack.pop();

                if(val === '+'){
                    temp = x+y
                }
                 if(val === '-'){
                    temp = y-x
                  
                }
                 if(val ==='*'){
                    temp = x*y
                  
                }
                 if(val === '/'){
                    temp = y/x
                   
                }
                   console.log(`${x} ${val} ${y} = ${temp}`)
                    
                stack.push(parseInt(temp))
                
            }
            else{
                stack.push(parseInt(val))
            }

        }
        return stack.pop();
    }
}
