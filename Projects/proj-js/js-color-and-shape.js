/* Choose New Colour Start */

document.getElementById('colourButton').addEventListener('click', newColour);
const colourArray = [];
let shape = document.getElementsByClassName("shape")[0];
function newColour(){
    
    const str = document.getElementById("colourText").value;

    colourArray.push(str);
    shape.style.backgroundColor = str;
    /*
    var prevColourList = document.getElementById("previousColours");
    var option = document.createElement("option");
    option.text = str;
    prevColourList.add(option);
    */

    
    var node = document.createElement("OPTION");                 // Create a <option> node
    var textnode = document.createTextNode(str);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <option>
    document.getElementsByClassName("previousColours")[0].appendChild(node);     // Append <li> to <ul> with id="myList"
    node.value = str;
    console.log(document.getElementsByClassName("previousColours")[0]);
    console.log(colourText);
    console.log(colourArray); 
}

/* Choose New Colour End */

/* Choose Old Colour Start */

document.getElementById("oldColours").addEventListener('click', oldColour);

function oldColour(){
    const str = document.getElementsByClassName("previousColours")[0];
    console.log(str);
    let strVal = str.value;
    console.log(strVal);
    shape.style.backgroundColor = strVal
}





/* Choose Old Colour End */




/* Change the Shape Start */

document.getElementById('shapeButton').addEventListener('click', makeNewShape);

function makeNewShape(){
    let shape = document.getElementsByClassName("shape")[0];
    let rdCirc = document.getElementById("rdCircle");
    let rdSq = document.getElementById("rdSquare");
    let rdRot = document.getElementById("rdRotate");

    if (rdCirc.checked == true){
        shape.classList.remove("rotate");
        shape.classList.remove("square");
        shape.classList.add("circle");

    } else if (rdSq.checked){
        shape.classList.add("square");
        shape.classList.remove("rotate");
        shape.classList.remove("circle");
    } else if (rdRot.checked){
        shape.classList.add("rotate");
        shape.classList.remove("square");
        shape.classList.remove("circle");
    }
}

/* Change the Shape End */

/* Move the Shape Start */

document.getElementById('moveButton').addEventListener('click', changeShape);

function changeShape(){
    let shape = document.getElementsByClassName("shape")[0];
    let rdNorm = document.getElementById("rdNorm");
    let rdGrow = document.getElementById("rdGrow");
    let rdShrink = document.getElementById("rdShrink");

    if (rdNorm.checked == true){
        shape.classList.add("normal");
        shape.classList.remove("big");
        shape.classList.remove("small");
        

    } else if (rdGrow.checked){
        shape.classList.add("big");
        shape.classList.remove("small");
        shape.classList.remove("normal");
    } else if (rdShrink.checked){
        shape.classList.add("small");
        shape.classList.remove("big");
        shape.classList.remove("normal");
    }
}


function getDataList(){
    let listy = document.getElementsByClassName("previousColours")[0];
    return listy;
}

setInterval(getDataList, 2000);

/* Move the Shape End */