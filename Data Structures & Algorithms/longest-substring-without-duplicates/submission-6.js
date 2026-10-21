class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // s = "zxyzxyz"
        // 1. create map and iterate over s 
            // if map has s already then we move left to right
            // (right - left) +1
            // left = 5 right = 5  map ={z:3,x:4,y:5} maxLen = 3
        let seen = new Map();
        let left = 0;
        let maxLen = 0;
        for(let right = 0;right<s.length;++right){
             console.log(seen)
            if(seen.has(s[right])){
                left = Math.max(seen.get(s[right])+1,left)
            }
               seen.set(s[right],right)
               let len = right-left+1
                maxLen = Math.max(maxLen,len)
        }
        return maxLen;
    }
}
