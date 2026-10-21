class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // if s.len != t.len return false
        //store in a map {}, loop thru both s and t O(n)

        // sMap = {r:2,a:2,c:2,e:1}
        // tMap = {c:2,a:2,r:2,e:1}
        //  s = "racecar", t = "carrace"

        // conver to ascii code then append to new string O(n)
        // sort by letter asc return if string ====

        if(s.length !== t.length){
            return false;
        }

        let newS ='a';
        let ctrl = newS.charCodeAt(0)
        let sArr = [];
        let tArr = [];
        for(let i = 0;i<s.length;i++){
            sArr.push(s.charCodeAt(i)-ctrl)
            tArr.push(t.charCodeAt(i)-ctrl)
        }
        sArr.sort((a,b)=>a-b)
        tArr.sort((a,b)=>a-b)

         for(let i = 0;i<sArr.length;i++){
            if(sArr[i]!==tArr[i]){
                return false;
            }
        }

        return true;
        
    }
}
