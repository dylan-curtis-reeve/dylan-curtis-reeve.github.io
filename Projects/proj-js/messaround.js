


let rClickListener = document.getElementById('moveCircListener');
rClickListener.addEventListener('click', addBorder);

let hoverListener = document.getElementById('chgGradientListener');
hoverListener.addEventListener('mouseover', addGradient);

let lClickListener = document.getElementById('spinCircListener');
lClickListener.addEventListener('contextmenu', addSpin);


function addBorder(){
    let shape = document.getElementsByClassName('shape');
    shape[0].classList.toggle('moveCirc')

}

function addGradient(){
    let shape = document.getElementsByClassName('shape');
    shape[0].classList.toggle('chgGradient')

}

function addSpin(){
    let shape = document.getElementsByClassName('shape');
    shape[0].classList.toggle('spinCirc');

}



