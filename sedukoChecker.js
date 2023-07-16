 /**
  * @Time 75 ms
  * @Memory 45.3 MB
  */
 var isValidSudoku = function(board) {
    let block = {
        b1:{},b2:{},b3:{}
    };
    let row = {};
    let col = {
        c1:{},
        c2:{},
        c3:{},
        c4:{},
        c5:{},
        c6:{},
        c7:{},
        c8:{},
        c9:{},
    };
    
    //verify block rule
    for(let i = 0 ; i<9 ; i++){
        row={};
        if(i && i%3===0){
        block = {
           b1:{},b2:{},b3:{}
        };
        }
        for(let j = 0 ; j<9 ; j++){
            const v = board[i][j];
            if(v!=='.'){
            // row checker
            if(!row[v]){
                row[v]=true;
            }else{
                return false;
            }
            
            // block checker
            const s = j<3 ? 1 : j<6 ?2:3
            const bName = 'b'+s;
            if(!block[bName][v]){
                block[bName][v]=true;
            }else{
                return false;
            }
            // column checker
                const cName = 'c'+(j+1);
            if(!col[cName][v]){
                col[cName][v]=true;
            }else{
                return false;
            }
            }
            
        }
    }
    return true;
};
