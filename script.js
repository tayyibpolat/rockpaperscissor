function getComputerChoice(){
    rand = Math.floor(Math.random() * 4);
    if (rand > 2){
        rand = alert("Rock");
    }
    else if (rand > 1){
        rand = alert("Paper");
    }
    else if (rand > 0){
        rand = alert("Scissor");
    }
    return rand;
}
