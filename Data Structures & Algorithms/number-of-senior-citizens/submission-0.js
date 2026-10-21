class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let count = 0;

        details.forEach((person)=>{
            let age = person.charAt(11)+person.charAt(12)
            if(parseInt(age)>60){
                count++;
            }
        })
        return count;
    }
}
