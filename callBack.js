function goodBye(){
    console.log("Goodbye!");
}
function greet(name,callback){
    console.log("Hello ,"+name);
    callback();
}


greet("Ishwari",goodBye);