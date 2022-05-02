function clicked(){
    document.getElementById("heading").innerHTML="hold ANY key";
}
function down(){
    document.getElementById("number").innerHTML="release"
}
function up(){
    document.getElementById("number").innerHTML="great...!!"
}

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
console.log(w==z, w===z)  //comparision of two js objects may return false

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

let text = "hey\tAdil is here";
console.log(text, text.length)     //tells the length of string
console.log(text.slice(4, 8))      //slices out the writen string number(starts position from 0)
console.log(text.slice(-12,-8))    //also accept negative values
console.log(text.slice(4))         //if write only one number it will slice rest of the string

console.log(text.substring(4, 8))  //same as slice but dont accept negative values

console.log(text.replace("Adil", "wasi"))  //replace one word with other
console.log(text.replace(/ADIL/i, "wasi")) //as js is case sensitive use /i in this case and words should be in / instead of ""or''
let text_2 = "what is the meaning of what";
console.log(text_2.replace("what", "hey"))  //if two words are same it replace only first word
console.log(text_2.replace(/what/g, "hey"))  //as one words replace if u want all use /g in this case use / instead of ""or''

console.log(text.toUpperCase())    //for making it upper case
console.log(text.toLowerCase())    //for making it case case

var a = "wasi";
var b = "hasan";
console.log(a.concat(" ", b))  //uses to join two strings
console.log(a + " " + b)   //you can use also concat instead of + operator both works same

var a = "    wasi    " 
console.log(a);
console.log(a.trim())   //removing the whitespaces from start adn end of an string

var a = "2";
console.log(a.padStart(3, "R"))   //pads a string with other string first is number and second the string you want to add
var a = 2;
b = a.toString()
console.log(b.padStart(3, "R"))    //to pad a number convert string too number first
// padEnd works the opposite of it
var a = "2"
console.log(a.padEnd(4, "0"))
var a = 2;
b = a.toString()
console.log(b.padEnd(4, "0"))

var a = "wasi hasan";
console.log(a.charAt(5))   //returns the character of the specified index(position)
console.log(a.charCodeAt(5))  //returns the unicode (UTF - 16) of the specified index(position)
console.log(a[0])    //same as charAt but here, if specifies index is out of range its shows undefined but in charAt it shows empty

var a = "hello, adil";
b = a.split(",")    //splitted by commas(","), also can be with spaces(" ") and pipe("|")
console.log(b[0])  //convert string to an array  

var a = "hey what is the meaning of what";
console.log(a.indexOf("what")) //tells position of a specified string
console.log(a.lastIndexOf("what"))  //tells last occurance position of a specified string
//both wil return -1 if the text is not found
console.log(a.search("what"))  //same as indexOf but has some diff

console.log(a.match(/what/g))  //search string for a  match against a regular expressions and return the match as an array object
//if global search is not used it will return only first match of the string only

console.log(a.includes("what"))   //returns true if  string contains a specified value
console.log(a.includes("what", 4))  //also can use number to check whether this word is at thhat position or not

console.log(a.startsWith("hey"))   //return true if a string is started with the sprecified value either false
console.log(a.startsWith("what", 4))  // use number to check whether if a given string is at specified position or either false
//opposite of startWith
console.log(a.endsWith("what"))   
console.log(a.endsWith("is", 11))  //check if the 11 first character of a string ends with "is"

var a = 
`hello 
how 
are
you`;    //template literals uses back ticks(``) instead of quotes("") to define a stirng
console.log(a) 
//you can use both single and double quotes in template literals
//you can use multiline strings 
var a = "wasi";
var b = "hasan"
console.log(`hello ${a} ${b}`)   //allow variables in strings ,this method is called interpolaton
var a = 12;
var b = 5;
console.log(`${a * b}`)   //aslo allow expressions in strings 

var x = "20";
var y = "10";
console.log( x - y );
console.log( x / y );
console.log( x * y );
console.log( x + y );   //javascript will try to convert all strings to numbers in all numeratic operators except the + operator because js will use this operator as concatenate the strings

var x = 100 / "apple"; 
console.log(x)   //trying a arithemetic with a non-numeric string will result in  NaN(not a number)
console.log(isNaN(x));  //use global js function isNaN() to check whether a valuer is a not a number
var x = 2;
var y = 0;
console.log(x / y)  ////infinity is the value js will return  if u calculate a number outside the largest poosible number
//division by 0 also generates infinity
console.log(typeof NaN, typeof Infinity)
//nan and infinity is a number type of nan or infinity return in number

var x = 0x27;
console.log(x)  //js interprets numeric constants as hexadecimal if they are preceeded by 0x
var x = 053;
console.log(x)   // some js versions interprets number as octal if they are preceeded by 0
// hexatrigesimal = base 36, duotrigesimal = 32, hexadecimal = 16, duodecimal = 12, decimal = 10, octal = 8, binary 2

console.log(Number("10"))  // number method used to  convert variables to numebers

const game = ["pubg", "coc", "freefire"];
console.log(game[1])
game[2] = "clasmini";  //for replacing an array element
console.log(game)
console.log(game.length)  //length tells the length of an array,its always one more then the highest array index
console.log(game.sort())   //sort will arrange the array in alphabetically order
console.log(game.push("clashquest"));
console.log(game)   //push will add new element to array
console.log(game[7]="piano tiles");
console.log(game[6])   //adding element with high indexes can lead to undefined holes in an array !
//difference between arrays and object is that it use numbered indexes and name indexes respectively 
