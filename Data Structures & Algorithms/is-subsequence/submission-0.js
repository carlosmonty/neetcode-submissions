class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let first = 0;
        let second = 0;
        let found = s.length;
    /*
        first = 0 
        t [n|e|e|t|c|o|d|e]
                         ^
                         f

        s [n|o|d|e]
                 ^
                 s

        t [a|h|b|g|d|c]
                     ^
           f

        s [a|x|c]
             ^
             s
    */

        while(first < t.length){
            if(t[first] == s[second]){// found a char that is in there
            // check if the next char in s
                found --;
                second++;
            }
            first ++;
        }
        if(found == 0)
            return true;
        else return false;

        
    }
}
