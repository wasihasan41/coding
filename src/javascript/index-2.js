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
