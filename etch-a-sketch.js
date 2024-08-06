document.addEventListener("DOMContentLoaded", function(){
    console.log("hi");
})

function createContainer(size){
let container = document.querySelector(".container");
 
container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

let numDivs = size * size;

for (let i =0; i < numDivs; i++){
    let div = document.createElement("div");
    div.style.backgroundColor = "red";
    container.insertAdjacentElement("beforeend", div);

}
}


