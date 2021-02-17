let currentPlayer = "blue";
var colsArr = document.getElementsByTagName('tr');
var x;
document.getElementById("enter").onclick = function() {placeChip()} 


function placeChip(){
    x = document.getElementById('move').value;
    document.getElementById('move').value = '';
    console.log(x)
    let rowsArr = document.getElementsByClassName('col'+x);
    console.log(rowsArr.length)
    for(let i=5;i>-1;i--){
        if(rowsArr[i].getAttribute("data-value") == 'empty'){
            rowsArr[i].setAttribute("data-value", currentPlayer)
            console.log(i+x)

            if(currentPlayer = "blue"){
                if(VerticalWin(rowsArr, currentPlayer)){
                    return (alert(currentPlayer + ' wins!'))
                }
                else{
                    return currentPlayer = "red"
                }
            }else{
                if(VerticalWin(rowsArr, currentPlayer)){
                    return (alert(currentPlayer + ' wins!'))
     
                }
                else{
                    return currentPlayer = "blue"
                }
            }
            
        }
    }
    
}

function VerticalWin(rowsArr, cellValue){
    let count = 1;
    for(let i = 4; i>=0; i--){
        if(rowsArr[i].getAttribute("data-value") == cellValue){
            count++
        } else{
            break
        }
    }
    if(count > 3) return true
} 

function HorizontalWin(colsArr, cellValue){

}



