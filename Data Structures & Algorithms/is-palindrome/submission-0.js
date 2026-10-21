class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
           s =  s.replace(/[^a-zA-Z0-9]/g,"")
    s = s.trim().toLowerCase()
        let len = s.length;

        let start = 0;
        let end = len-1;
     

        console.log(s)
        while(start < end){
            if(s.charCodeAt(start) !== s.charCodeAt(end)){
                console.log(start+" "+s.charCodeAt(start) +" = "+end+" "+ s.charCodeAt(end))
                return false;
            }
            start++;
            end--;
        }
        return true;
        
    }
}
