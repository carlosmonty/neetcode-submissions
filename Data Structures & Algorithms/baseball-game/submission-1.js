class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */


    calPoints(operations) {
        let mapOps = new Map();
        let record = new Array();
        mapOps.set('D',(record[record.length-1]*2));
        mapOps.set('C',record.pop());
        mapOps.set('+',(record[record.length-1]+record[record.length-2]));
    let sum = 0;
        for(let i=0;i<operations.length;++i){
            let value = operations[i];
            if(mapOps.has(value)){
                if(value === 'D'){
                    let val = parseInt(record[record.length-1]*2)
                    record.push(val);
                    
                }
                else if(value === '+'){
                    let val = parseInt(record[record.length-1]+ record[record.length-2])
                    record.push(val);
                    
                }
                else if(value === 'C'){
                    
                    record.pop()

                }

            }else{
                record.push(parseInt(value))
                
            }
        }

       record.forEach(x=>{
            sum+=x
       })
       return sum
    }
}
