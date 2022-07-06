const btn = document.getElementById("button")
let image = document.getElementById("image")
btn.addEventListener("click", function(){
    const randomDice = Math.floor(Math.random() * 6) + 1

    image.innerHTML=`<img src='/assets/javascript/dice${randomDice}.png' style='width:200px; height:200px'/>`;
})

const ludo = document.getElementById("ludo")
const col = document.createElement("col");
const row = document.createElement("row")
const n = 4
let table = ""
for (let col = 1; col <= n ; col++) {
    table += `<div class="col">`
    for (let row = 1; row <= n; row++) {
        table += `<div class="row">${col}</div>`
    }
    table += `</div>`
}

ludo.innerHTML = table;