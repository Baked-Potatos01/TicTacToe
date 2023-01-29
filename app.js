const board = document.getElementById("board");
let win = false;
let turn = "player1";
let xo;
let boxChecker =[0, 0, 0, 0, 0, 0, 0, 0, 0];
const winText = document.getElementById("winner");
let playerwinner;

for(let i = 0; i<9; i++){
    let div = document.createElement('div');
    div.id= i;
    div.className = 'square';
    board.appendChild(div);
    document.getElementById(div.id).addEventListener('click', ()=>onclick(div.id,i));
    console.log(i);
    console.log(div.id);
}
board.addEventListener('click', switchturn)

function switchturn() {   
    if(turn=="player1"){
        turn="player2"
    }
    else if(turn=="player2"){
        turn="player1"
    }
    console.log(turn);
}
function winOrDraw(){
    winChecker(0,1,2);
    winChecker(3,4,5);
    winChecker(6,7,8);
    winChecker(0,3,6);
    winChecker(1,4,7);
    winChecker(2,5,8);
    winChecker(0,4,8);
    winChecker(2,4,6);
    draw();
    

}
function winChecker(no1,no2,no3){
    if ( boxChecker[no1]!=0 && boxChecker[no1]==boxChecker[no2]&&boxChecker[no2]==boxChecker[no3]){
        win=true; 
        
        winText.innerHTML = playerwinner+ " Is The Winner!";
        
    }

}
function draw(){
    if (boxChecker.includes(0)==false && win==false){

        winText.innerText="It's a Draw"
    }
}


function onclick(id ,i){
    if (win==true){
        return;
    }
    let obj = document.getElementById(id);
    if(obj.textContent=="x"||obj.textContent=="o"){
        return
    }
    if(turn=="player1"){
        obj.textContent ="x";
        boxChecker[i] = 1;
        playerwinner = "X";
    }
    else if(turn=="player2"){
        obj.textContent ="o";
        boxChecker[i] = 2;
        playerwinner = "O";
        
    }
    
    
    winOrDraw();
}

