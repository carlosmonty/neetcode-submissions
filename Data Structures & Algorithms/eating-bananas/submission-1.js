class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        //look for min in array and determine the hours
        let l = 1;
        let r = Math.max(...piles);
        let min = r;
        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            let totalTime = 0;
            for (const p of piles) {
                totalTime += Math.ceil(p / m);
            }
            if (totalTime <= h) {
                min = m;
                r = m - 1;
            }
            else {
                l = m + 1
            }

        }
        return min;

    }
}
