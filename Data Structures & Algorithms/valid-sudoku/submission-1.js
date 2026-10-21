class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rowMap = Array.from({length:9},()=> new Set());
        let colMap = Array.from({length:9},()=> new Set());
        let boxMap = Array.from({length:9},()=> new Set());


        for(let x = 0;x<board[0].length;++x){
            for(let y = 0;y<board[0].length;++y){
                if(board[x][y] == "."){
                    continue
                }
                let value = board[x][y]
                let boxIndex = Math.floor(x/3)*3+ Math.floor(y/3)

                if(rowMap[x].has(value) ||colMap[y].has(value) || boxMap[boxIndex].has(value)){
                    return false;
                }

                rowMap[x].add(value)
                colMap[y].add(value)
                boxMap[boxIndex].add(value)
            }

        }
         return true
    }
  
}
