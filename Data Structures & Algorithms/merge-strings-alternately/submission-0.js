class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
          let first = 0;
    let second = 0;
    let result = '';
    let max = word1.length + word2.length;

    while (first < max && second < max) {
        if (word1[first] != null) result += word1[first];
        if (word2[second] != null) result += word2[second];
        first++;
        second++;
    }
    return result
    }
}
