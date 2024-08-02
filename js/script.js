function drawerToggle(){
    document.getElementById("drawer").classList.toggle("drawer-active");
}


let index = 0;


function incrementIndex(){
    let max = document.querySelectorAll(".slide").length;
    index++
    if(index >= max){
        index = 0;
    }
    return index ;
}
function decrementIndex(){
    let max = document.querySelectorAll(".slide").length;
    index--
    if(index < 0){
        index = max-1;
    } 
    return index ;
}


function slideLeft(){
    let left = decrementIndex() * -100; 
    document.getElementById("slides").style.left = `${left}vw`;
}

function slideRight(){
    let left = incrementIndex() * -100; 
    document.getElementById("slides").style.left = `${left}vw`;
}



setInterval(()=>slideRight(),4000)




