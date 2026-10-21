class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let result = true;
        if(s.length == 0 && t.length == 0){
            return true;
        }
        if(s.length !== t.length){
            return false;
        }
        else{
            // console.log('hello')

            let sArray = new Array()
           let tArray = new Array()
        for(let i=0;i<s.length;i++){
            let sCharVal = s.charCodeAt(i);
            let tCharVal = t.charCodeAt(i);
  
            if(sArray[sCharVal] == undefined ){
                sArray[sCharVal] = 1;
              
            }
            if(tArray[tCharVal] == undefined ){
            
                tArray[tCharVal] = 1;
            } if(tArray[tCharVal] !== undefined ){
            
                tArray[tCharVal] += 1;
            }
            if(sArray[sCharVal] !== undefined ){
                sArray[sCharVal] += 1;
              
            }
            
            
        }
      

        for(let i =0; i<sArray.length;i++){
            // console.log(sArray[i])
            // console.log(tArray[i])
            if(sArray[i] !== tArray[i]){
                return false;
            }
        }
     return result;
       
    }
    }
}
