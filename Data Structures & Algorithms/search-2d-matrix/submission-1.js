class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        /*
            binary search
            we have target and sorted arrays
            binary search 1st ary
        */
        
        let l;
        let r;
        for(let n = 0;n<matrix.length;n++){
            const curr_array = matrix[n];            
            l = 0;
            r = matrix[n].length-1;
            if(curr_array[r]<target) continue;
            while(l<=r){
                 let m = l + Math.floor((r-l)/2);

                if(target < curr_array[m]){
                    r = m-1;
                }
                else if(target > curr_array[m]){
                    l = m+1;
                }
                else{
                    return true;
                }
            }
        }
        return false;
    }
}
