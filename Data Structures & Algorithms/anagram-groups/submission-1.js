class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {}
        let result = new Array();
        let newString = new Array(strs.length);
        for(let i = 0;i<strs.length;++i){
            let word = strs[i]

            let sortedString = word.split('').sort().join('')
            if( map[sortedString] == undefined){
                map[sortedString] = [word]
            }else{
                 map[sortedString].push(word)
            }
           
        }
        Object.values(map).forEach(key=>{
            result.push(key)
        })
        return result
    }
}
