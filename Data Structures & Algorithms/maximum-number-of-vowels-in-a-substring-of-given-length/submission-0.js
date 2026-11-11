class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxVowels(s, k) {
        const n = s.length;
        if (n < k) return 0;

        let count = 0;
        let subString = "";
        // create initial substring of len k
        for (let i = 0; i < k; i++) {
            subString += s[i];
            //determine number of vowels @ beginning
            if (this.isVowel(s[i])) count++;
        }

        let result = count;

        for (let i = k; i < n; i++) {
            // add new char to substring and check if vowel to add to count
            subString += s[i];
            if (this.isVowel(s[i])) count++;

            //remove first char and check if vowel to remove 1 if true
            subString -= s[i - k];
            if (this.isVowel(s[i-k])) count--;

            result = Math.max(count, result);
        }

        return result;
    }

   /**
     * @param {string} s
     * @function Determines if char is a vowel
     * @return {boolean}
     */
    isVowel(c) {
        let valid = false;
        switch (c) {
            case "a":
                valid = true;
                break;
            case "e":
                valid = true;
                break;
            case "i":
                valid = true;
                break;
            case "o":
                valid = true;
                break;
            case "u":
                valid = true;
                break;
        }
        return valid;
    }
}
