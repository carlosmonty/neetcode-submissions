class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // map {z,} l:0 r:2
        let seen = new Map();
        let l = 0;
        let r = 0;
        let maxLen = 0;
        while(r < s.length){
            if(seen.has(s[r])){
                l = Math.max(seen.get(s[r])+1,l)
            }
            seen.set(s[r],r)
            maxLen = Math.max(maxLen,r-l+1)


            r++;
        }
        return maxLen
    }
}
