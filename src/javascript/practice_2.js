function hello(){
    document.getElementById("heading").innerHTML="hello world";
    this.style.display='none';
}
function hello_2(){
    document.getElementById("number").innerHTML="hello adil"
}


console.log(hello_2)
let $ = heading;
console.log($)

var x = 10;  
x += 5; //x = x + 5
console.log(x);

var w = "wasi"
var h = "hasan"
var wh = w + " " + h;
console.log(wh);

if(wh == "wasi hasan"){
    console.log("yes")
}else{
    console.log("no")
}

var x = 5;
x++;
console.log(x);

var x = 5;
var y = 3;
console.log(x ** y); //same result as in math.pow(x,y)

var x = 16 + 4 + "hello";    //javascript evaluates results 
console.log(x);              //from left to right.  
var x = "hello" + 16 + 4;    //Different sequence can produce
console.log(x);              //different results//

var x = 123e-2; //dot before last 2 digit
var y = 123e5;   //5 zero after number ends
console.log(x, y)  // extra large or small numbers written
//with scientific (exponential) notation

var person = {
    firstName:"adil", age:18    //objects: written as name:values
}                          // seperated by commas within curly brackets{}
console.log(person.firstName + " is " + person.age + " years old");

var w = "hello";
var x = 54;
var y = undefined;
var z = new String("hello")
console.log(typeof w, typeof x, typeof y, typeof z)  //tells the type of a variable or expression
console.log(w==z, w===z)

function calculate(p1, p2){
    return p1 * p2
}
console.log(calculate(8, 3));

var person = {
    firstName:"wasi",lastName:"hasan", age:18, fullName:function(){
        return this.firstName + " " + this.lastName;
    }    
} 
console.log(person.fullName());

let text = "hey\tadil";
console.log(text, text.length)