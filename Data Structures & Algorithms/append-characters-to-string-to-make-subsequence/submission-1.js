class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        let result = t.length; // the worst case is the length of t
        // example would be s = "z", t = "abcde" Output: 5
        let first = 0;
        let second = 0;

        while (first < t.length && second < s.length) {
            // traverse all of t

            if (t[first] === s[second]) {
                // if t[first] is in s the one less char is needed
                result--;
                first++;
                second++;
            } else {
                second++;
            }
        }

        return result;
    }
}
