//Single line Comment 
/*Multi
line
Comment*/

//Variables
var num=0;
var $address1 = "Naxal";
var boolean = true;
var undef;
var nullValue = null;
var a = [0,1,2,3,4];
console.log("Varables");
console.log(num);
console.log($address1);
console.log(boolean);
console.log(undef);
console.log(a);


//Conditional Statements
console.log("Conditional Statements: if.. else statment and switch... case... statements");
if(num=0){
    console.log(num);
}
else{
    console.log($address1);
}

/*
switch (num){
    case 0: 
    console.log(num);
    break;
    case 1: 
    console.log(num);
    break;
    default:
        console.log("num not 0 or 1");
}
*/

//Loops
console.log("Loop Conditions: i) for.. else... loop");
for(var i=0;i<5;i++)
    console.log("Current value of in for loop i= "+i);

var fruits=['apple','banana','orange'];

console.log("ii) for of and for in loops");
for(var items of fruits){
    console.log(items);
}

for(var items in fruits){
    console.log(items);
}

console.log("iii) forEach loop");
a.forEach(item => console.log(item));

var i=0;
while (i<5){
    console.log("While loop: "+i);
    i++;
}

do{
    console.log("Do while loop: "+i);
    i--;
}while(i>0)

console.log(i++);
console.log(++i);

//Shift Operators
function dec2bin(dec) {
    return (dec >>> 0).toString(2);
  }

var num1 = 6, num2 = 2;
console.log("Shift Operations");
console.log(num1);
console.log(dec2bin(num1));
console.log(num1<<num2);
console.log(dec2bin(num1<<num2));
console.log(num1>>num2);
console.log(dec2bin(num1>>num2));
console.log("num1**num2(6^2):"+num1**num2);

//Relatoinal Operators
console.log("Relational Operations");
console.log('2=="2": '+(2=="2"));
console.log('2==="2": '+(2==="2"));

//Logical Operators &&,||,!

//Ternary operator
(num2===2)? console.log("Num2 is 2"): console.log("Num2 is not 2");

//Hoisting
console.log("HOisting");
let weather = "Sunny";
function changeWeather(){
    weather = "Rainy";
    console.log("Changed Weather to: "+weather);
}

changeWeather();
console.log("Original Weather: "+weather);
/*
*Was showing error and stopped the execution so had to comment
const season = "Summer";
function changeSeason(){
    season = "Winter";
    console.log("Changed Season to: "+season);
}

changeSeason();
console.log("Original Weather: "+season);
*/

console.log("Global Scope");
for(var g_scope = 1;g_scope <4;g_scope++){
    console.log(g_scope);
}
console.log(g_scope); //Global Scope, No error

/*
*Was showing error and stopped the execution so had to comment
console.log("Block Scope");
for(let b_scope = 1;b_scope <4;b_scope++){
    console.log(b_scope);
}
console.log(b_scope);//Error (Block Scope)
*/

//Primitive Data Types
console.log("Primitove Data Types");
let animal = {
    ears : 2,
    species : "cat",
    legs : 4,
    limbs(){
        console.log(this.species+" has"+this.legs+" limbs");
    }
}
animal.limbs();
console.log("Cat has "+animal.ears+" ears.");
console.log(animal["legs"]);

var obj = {
    Age : 23,
    Nam : "Samir",
    dis:function(){
        console.log("Name: "+this.Nam);
    }
}
console.log(obj.Nam);
obj.dis();
console.log(obj["Age"]);

let plant = new Object();
plant.Type = "Tree";
plant["Fruit"] = "Mango";
plant.grow = function(){
    console.log("The "+this.Type+" gives "+this.Fruit);
}
plant.grow();

let flower = new Object();
let jasmine = flower;
let lavender = flower;
jasmine == lavender ? console.log("Yes"): console.log("No");

let Sunflower = new Object();
Sunflower == lavender ? console.log("Yes"): console.log("No");
jasmine === lavender ? console.log("Yes"): console.log("No");
Sunflower === lavender ? console.log("Yes"): console.log("No");

Object.is(jasmine,lavender) ? console.log("Yes"): console.log("No");
Object.is(Sunflower,lavender) ? console.log("Yes"): console.log("No");

JSON.stringify(jasmine) === JSON.stringify(Sunflower) ? console.log("Yes"): console.log("No");

//Arrays
var arr = ['Hello', 1, true, 9.165, '*', 459, "Bye"];
console.log("Push and Pop Array");
console.log("arr Array ="+arr);
arr.push(5);
console.log(arr);
arr.pop();
console.log(arr);

let array = new Array(20,'cat',1.235);
console.log("Unshift and Shift Array");
console.log("array Array ="+array);
array.unshift("Samir");
console.log(array);
array.shift(20);
console.log(array);

console.log("Arr length:"+arr.length);

console.log("Splice and Slice Array");
arr.splice(0,2,"Jan");
console.log("arr Array ="+arr);
console.log(arr);
let narr = arr.slice(4);
console.log(narr);
let narr1 = arr.slice(2,4);
console.log(narr1);

//Functions
function happy(){
    console.log("Happy function");
}
happy();

var hope = function(){
    console.log("Compiles at runtime. ");
}
hope();