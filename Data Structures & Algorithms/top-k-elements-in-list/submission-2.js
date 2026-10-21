class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let result = new Array();
        let seen = new Array()
        let map = new Map();
        let temp = new Array();
        for(let i = 0;i<nums.length;++i){
            const val = nums[i];
            if(seen[val] == undefined){
                seen[val] = 1
                map.set(val,1)
            }
            else{
                seen[val]+=1;
                map.set(val,map.get(val)+1)
            }
           
        }
       
      temp = Array.from(map.entries())
      temp.sort((a,b)=>b[1]-a[1])
        for(let m = 0;m<k;++m){
            result.push(temp[m][0])
        }
       
      return result
       
    }
}
