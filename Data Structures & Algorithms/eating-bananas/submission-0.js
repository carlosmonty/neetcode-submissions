class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let i = 1;
        while(true){
            let total = 0;
            for(let p of piles){
                total+= Math.ceil(p/i);
            }
            if(total <= h){
                return i;
            }
            i++;
        }
    }
       
        
}
