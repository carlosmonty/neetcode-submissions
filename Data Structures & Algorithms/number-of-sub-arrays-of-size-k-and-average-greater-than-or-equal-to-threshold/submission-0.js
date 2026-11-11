class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        const n = arr.length;
        if (n < k) return 0;

        let validAvg = 0;
        // create init window of size k
        let sum = 0;
        for (let i = 0; i < k; i++) {
            sum += arr[i];
        }
        //process avg
        if (Math.floor(sum / k) >= threshold) {
            validAvg++;
        }

        for (let i = k; i < n; i++) {
            //add new element 
            sum += arr[i];

            //remove leftmost element
            sum -= arr[i - k];
            //compute new avg
            if (Math.floor(sum / k) >= threshold) {
                validAvg++;
            }
        }

        return validAvg;
    }
}
