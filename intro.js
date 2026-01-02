console.log("Hello!");
var student={
    name:"shrimay",
    std:1,
    rollno:13,
    friends:"jay"
};
function show(){
    console.log(student);
    console.log("This is the show fn");
}
function works(a,b){
    var a=10;
    var b=33;
    var c=a+b;
    console.log(c);
    console.log("it works!");
}
function main(){
    console.log("Hello i welcome you to the main function");
    show();
    console.log("Hello before executing works fn");
    works();
    console.log("Hello from main function");
}
main();
console.log("This is the last statement written iin the code");
//as js is a server side scripting language we cannot block any fn and we basically answer the events 
//based on the events we send responses this phenomenon or concept is called as event handler or evennt handling
//downwards i have mentioned call back function ->
function goodBye(){
    console.log("Goodbye!");
}
function greet(name,callback){
    console.log("Hello ,"+name);
    callback();


}
greet("Ishwari",goodBye);