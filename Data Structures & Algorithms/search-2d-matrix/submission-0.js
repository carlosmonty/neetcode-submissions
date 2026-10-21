class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let newArray = new Array();
          for(let i = 0;i<matrix.length;i++){
            for(let j = 0;j<matrix[i].length;j++){
                newArray.push(matrix[i][j])
            }
          }  

        let left = 0;
        let right = newArray.length-1;
        while(left<=right){
            let m = left+Math.floor((right-left)/2);
            if(target < newArray[m]){
                right = m-1;
            }
            else if(target>newArray[m]){
                left = m+1;
            }
            else{
                return true;
            }
        }
        return false
    }
}
