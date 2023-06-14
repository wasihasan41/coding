const btn = document.getElementById("button")
let image = document.getElementById("image")
btn.addEventListener("click", function(){
    const randomDice = Math.floor(Math.random() * 6) + 1

    image.innerHTML=`<img src='/assets/javascript/dice${randomDice}.png' style='width:200px; height:200px'/>`;
})

const ludo = document.getElementById("ludo")
const col = document.createElement("col");
const row = document.createElement("row")
const number = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
let table = ""
for (let row = 0; row < 4 ; row++) {
    table += `<div class="row">`
    for (let col = 0; col < 4; col++) {
        table += `<div class="col" data-number=${dataNumber=1}>${number[row][col]}</div>`
    }
    table += `</div>`
}
ludo.innerHTML = table;