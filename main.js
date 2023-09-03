// console.log("before loding all files");

// We r using addeventlistener
// Why? DOMContentLoaded will wait your html,css,js file to load
document.addEventListener("DOMContentLoaded" , function(){
    createBoard(32);
    console.log("after loding all files");
})

function createBoard(size){
    let board= document.querySelector(".board")
    // applying gird styling here:
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;

    let numDivs = size*size; 

    for(let i=0;i<numDivs;i++){
        let div = document.createElement("div");
        div.style.backgroundColor = "purple"
        // learn this
        board.insertAdjacentElement("beforeend",div)
        
    }
}