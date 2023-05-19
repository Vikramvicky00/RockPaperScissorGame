const playerinput=document.getElementById("player")
const computerinput=document.getElementById("computer")
const result=document.getElementById("result")

const gamebtns=document.querySelectorAll(".gameBtn")


gamebtns.forEach(button =>{
     button.addEventListener('click',()=>{
          let player=button.value;
          let computer=com();
          let r=chechWin(player,computer)
          playerinput.textContent=`Player Choice : ${player}`
          computerinput.textContent=`Computer Choice : ${computer}`
          result.textContent=`${r}`
     })

})
function com(){
    let ch=Math.floor(Math.random()*3+1)
    let op=""
    switch(ch){
        case 1:
             op="rock"
            break;
        case 2:
            op="paper"
            break;
        case 3:
            op="scissors"
            break; 
        default:
            break;       
    }
    return op
}
function chechWin(player,computer){
    if(player==computer){
        return "Draw";
    }
    else if(computer=="rock"){
        return (player=="paper") ? "You wins" : "Computer wins"
    }
    else if(computer=="paper"){
        return (player=="scissors") ? "You wins" : "Computer wins"
    }
    else if(computer=="scissors"){
        return (player=="rock") ? "You wins" : "Computer wins"
    }
}