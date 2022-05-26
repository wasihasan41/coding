let = count = 0
function clicked(){
    count += 1
    document.getElementById("count-el").innerText = count
}

function save(){
    document.getElementById("save-el").textContent += " " + count + " - "
    document.getElementById("count-el").innerHTML = 0
    count = 0
}
save()

function countdown(){
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}
countdown()

function number(){
    console.log(5)
}
number()

let lap1 = 34
let lap2 = 33
let lap3 = 36
function sum(){
    console.log(lap1 + lap2 + lap3)
}
sum()

let lapsCompleted = 0
function incrementLap(){
    lapsCompleted = lapsCompleted + 1
    console.log(lapsCompleted)
}
incrementLap()
incrementLap()
incrementLap()

let username = "max"
let message = "you have a new tree new notification"
console.log(message + ", " + username + " !")

let points = 10
let bonusPoints = "4"
console.log(points + bonusPoints)

let text = "hey its me max"
document.getElementById("welcome-El").innerText = text
document.getElementById("welcome-El").innerText  += " *"

let firstName = "per"
let lastName = "borgen"
let fullName = firstName + " " + lastName
console.log(fullName)

function Name(){
    console.log(firstName + lastName)
}
Name()

let myPoint = 3
function add3Points(){
    myPoint += 3
}
function remove1Points(){
    myPoint -= 1
}
add3Points()
add3Points()
add3Points()
remove1Points()
remove1Points()
console.log(myPoint)

function shoes(){
document.getElementById("error").innerHTML = "something went wrong, please try again"
}

let num1 = 8
let num2 = 2
document.getElementById("num1").innerHTML = num1
document.getElementById("num2").innerHTML = num2
function add(){
    result = num1 + num2
    document.getElementById("sum").innerHTML = "sum: " + result 
}
function subtract(){
    result = num1 - num2
    document.getElementById("sum").innerHTML = "sum: " + result
}
function multiply(){
    result = num1 * num2
    document.getElementById("sum").innerHTML = "sum: " + result
}
function divide(){
    result = num1 / num2
    document.getElementById("sum").innerHTML = "sum: " + result
}

let age = 16
if (age < 21) {
    console.log("you can not enter the club!")
} else if (age >= 21){
    console.log("welcome")
}

let allCards = []
let sumOfCards = 0
let isAlive = false
let hasBlackjack = false
let player = {
    name: "adil",
    chips: 145
} 
document.getElementById("player-el").innerHTML = player.name + ": $" + player.chips 
function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber == 1) {
        return 11
    }else if(randomNumber > 10){
        return 10
    }
    return randomNumber
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    allCards = [firstCard, secondCard]
    sumOfCards = firstCard + secondCard 
    renderGame()
}
function renderGame(){
    let output  
    if (sumOfCards < 21) {
        output = "Do you want to draw a new card ?"
    } else if(sumOfCards == 21){
        output = "wohoo! you've got a blackjack"
        hasBlackjack = true
}else if(sumOfCards > 21){
    output = "you're out of the game"
    isAlive = false
}
document.getElementById("message-el").innerHTML = output
document.getElementById("sum-el").innerHTML = "Sum : " + sumOfCards
document.getElementById("card-el").innerHTML = "Cards : "
for (let i = 0; i < allCards.length; i++) {
    document.getElementById("card-el").innerHTML += allCards[i] + " " 
}
}
function NewCard(){
    if(isAlive == true && hasBlackjack == false){
    let Card = getRandomCard()
    sumOfCards += Card
    allCards.push(Card)
    renderGame()
  }
}
// extra
let featurePosts = ["check out my Netflix clone", "Here's the code for my project", "I've just relaunch my portfolio"]
console.log(featurePosts[0])

let Cards = [7, 4]
Cards.push(6)
console.log(Cards)

for (let i = 10; i < 101; i+=10) {
    console.log(i)
}

let messages = ["hey", "hello", "hi"]
let newMessage = "whatsup"
messages.push(newMessage)
console.log(messages)
for (let i = 0; i < 4; i+=1) {
    console.log(messages[i])
}
let index = [7, 3, 9]
for (let i = 0; i < index.length; i++) {
    console.log(index[i])
}

let p1 = 102;
let p2 = 107;

function highScore(){
    if (p1 > p2) {
        return p1
    }else if(p1 < p2){
        return p2
    }else{
        return p1
    }
}
console.log(highScore())
function totalScore(){
    return p1 + p2
}
console.log(totalScore())

function Dice(){
let randomDiceNumber = Math.floor(Math.random() * 6) + 1
return randomDiceNumber
}
console.log(Dice())

var largeCountries = ["China","India","U.S.","Indonesia","Pakistan"]
for (let i = 0; i < largeCountries.length; i++) {   
    console.log(largeCountries[i])
}

var bigCountries = ["Tuvalu","India","U.S.","Indonesia","Monaco"]
bigCountries.pop()
bigCountries.push("Pakistan")
bigCountries.shift()
bigCountries.unshift("China")
console.log(bigCountries)

let hands = ["rock","paper","scissors"]
function gethand(){
    let randomhand = Math.floor(Math.random()*3)
    return hands[randomhand]
}
console.log(gethand())

function input(){
console.log("button clicked")
}
let myLead= ["www.awesomelead.com", "www.epiclead.com", "www.greatland.com"]
let inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")
inputBtn.addEventListener("click", function(){
myLead.push(inputEl.value)
console.log(myLead)
})
const ulEl = document.getElementById("ul-el")
for (let i = 0; i < myLead.length; i++) {
console.log(myLead[i])
ulEl.innerHTML+= "<li>" + myLead[i] + "</li>"
}

// extra
let inputDiv = document.getElementById("input-div")
inputDiv.innerHTML+="<button onclick='buy()'>" + "buy" + "</button>"
function buy(){
    inputDiv.innerHTML+="<pre>" + "thanks for buying! " + "</pre>"
}

