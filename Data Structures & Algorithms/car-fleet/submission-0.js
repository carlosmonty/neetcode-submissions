class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let newArray = [];
        let stack = [];
        for(let i = 0;i<position.length;i++){
            newArray.push([position[i],speed[i],((target-position[i])/speed[i])])
        }
        newArray.sort((a,b)=>b[0]-a[0])

        for(let i = 0;i<newArray.length;i++){
           stack.push(newArray[i][2]) 
           if(stack.length>=2 && stack[stack.length-1]<=stack[stack.length-2]){
            stack.pop()
           }
        }
        return stack.length

    }
}
