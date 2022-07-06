let elem = document.getElementsByClassName("item")
function button1(){
    elem[0].classList.toggle("active")
    elem[1].classList.remove("active")
    elem[2].classList.remove("active")
    elem[3].classList.remove("active")
}
function button2(){
    elem[1].classList.toggle("active")
    elem[0].classList.remove("active")
    elem[2].classList.remove("active")
    elem[3].classList.remove("active")
}
function button3(){
    elem[2].classList.toggle("active")
    elem[0].classList.remove("active")
    elem[1].classList.remove("active")
    elem[3].classList.remove("active")
}
function button4(){
    elem[3].classList.toggle("active")
    elem[0].classList.remove("active")
    elem[1].classList.remove("active")
    elem[2].classList.remove("active")
}