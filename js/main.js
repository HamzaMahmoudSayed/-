/// <reference types="../@types/jquery" />

let counter = document.querySelectorAll(".mySec .myCard .body .counter")

let reset = document.querySelectorAll(".reset")

let resetBtn = document.querySelector(".resetBtn")

let myElement;

function add() {
    for (let i = 0; i < counter.length; i++) {
        counter[i].addEventListener("click", function (e) {
            myElement = e.currentTarget
            myElement.innerText++
            resetNum(myElement)
            resetAllNums()
        })
    }
}



function resetNum() {
    for (let i = 0; i < reset.length; i++) {
        reset[i].addEventListener("click", function () {
            let changeElement = $(this).siblings()
            changeElement.html(0)
        })
    }
}


add()

function resetAllNums() {
    resetBtn.addEventListener("click", function () {
        $(".mySec .myCard .body .counter").html(0)
    })
}