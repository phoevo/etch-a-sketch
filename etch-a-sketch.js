let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded", function(){
    createContainer(32);

    document.querySelector("body").addEventListener("click", function(e){
        if(e.target.tagName != "BUTTON"){
            click = !click;
            let draw = document.querySelector("#draw");
            if(click){
                draw.innerHTML = "Drawing on";

            }
            else{
                draw.innerHTML = "Drawing off";
            }

        }
    })

    let btnPopup = document.querySelector("#popup");
    btnPopup.addEventListener("click", function(){
        let size = getSize();
        createContainer(size);
    })

    })

    function createContainer(size){
        let container = document.querySelector(".container");

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;
    for (let i = 0; i < numDivs; i++){
        let div = document.createElement("div"); 
        div.addEventListener("mouseover", colorDiv)
        container.insertAdjacentElement("beforeend", div);
    }

}

function getSize(){
    let input = prompt("Enter size: (How much x how much) ")
    let message = document.querySelector("#message");
    if (input == ""){
        message.innerHTML = "Please enter a number";
    }
    else if(input == 0 || input < 0 || input > 100){
        message.innerHTML = "Provide a number between 1 and 100"
    }
    else{
        message.innerHTML = `Created a sketch board ${input} by ${input}`
        return input;
    }
}

function currentSize(input){
    let currentSize = document.querySelector("#size");
    currentSize.innerHTML = `Current size: ${input}`
}


 
function colorDiv(){
    if(click){
        if(color == "random"){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        }
        else{
            this.style.backgroundColor = 'black'
        }
    }
}

function setColor(colorChoice){
    color = colorChoice
}

function resetContainer(){
    let divs = document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor = "white")
}

   
