let color = "black";
let click = false;
// console.log("before loding all files");

// We r using addeventlistener
// Why? DOMContentLoaded will wait your html,css,js file to load
document.addEventListener("DOMContentLoaded", function () {
    createBoard(16);

// i want to feacture like if i click the stop drowing and again click start drowing

    document.querySelector("body").addEventListener("click", function (e) {
        if(e.target.tagName != "BUTTON"){
            click = !click;
            let drow = document.querySelector("#drow");
            if(click){
                drow.innerHTML = " Drow";
            }else{
                drow.innerHTML = "Drowing is stop now";
            }
        }
    })


    let btn_popup = document.querySelector("#popup")

    btn_popup.addEventListener("click", function () {
        let size = getSize();
        createBoard(size);

    })

    console.log("after loding all files");
})

function createBoard(size) {
    let board = document.querySelector(".board")
    // applying gird styling here:
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;

    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");

        // div.addEventListener("mouseover",colorDiv());

        div.addEventListener("mouseover", function () {
            if(click){

                div.style.backgroundColor = color;
            }
        })

        // learn this
        board.insertAdjacentElement("beforeend", div);

    }
}

function getSize() {
    let input = prompt("Enter the size of board");
    let msg = document.querySelector("#message")
    if (input == "") {
        msg.innerHTML = "Please provide a number";
    } else if (input < 0 || input > 100) {
        msg.innerHTML = "Provide a number between 1 and 100";
    } else {
        msg.innerHTML = "Now you can play";
        return input;
    }
}



function setColor(colorChoice) {
    color = colorChoice;
}

function clearBoard() {
    let divs = document.querySelectorAll(".board div");
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = "white";
    }
}