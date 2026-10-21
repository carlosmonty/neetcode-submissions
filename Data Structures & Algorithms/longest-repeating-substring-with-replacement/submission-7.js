class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0;
        let count = new Map();
        let i = 0;
        let maxf = 0
        for(let j = 0; j<s.length;j++){
            count.set(s[j],(count.get(s[j])|| 0)+1)
            console.log(`i:${i} j:${j}`)
            console.log(count)
            let windowLen = (j-i)+1;
            maxf = Math.max(maxf,count.get(s[j]))
            if(windowLen-maxf<=k){
                res = Math.max(res,windowLen)       
            }
            else{
                count.set(s[i],count.get(s[i])-1);
                i++;
            } 
       }
        return res
    }
}
