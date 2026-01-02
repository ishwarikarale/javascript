//event driven is a base of server side programming
//javascript is procedural and all the stuff is done using functions
//return fn in js it helpss in publishing inner fns outside.
// this downward line is used to add any file into thisi file.
var handler=require("./handler");//this is a custom module 
var events=require("events");  //built in module 

var emitter=new events.EventEmitter();

var Account=function(amount){
    var balance=amount;
    var getBalance=function(){
        return balance;
      //  monitor();
    };

    var monitor=function(){
    if(balance<=500){
       emitter.emit("underBalance");
        //instead of manually adding any particular line we will let the event trigger the underBalance
        //handler.blockAccount();
        //console.log("Not sufficient balance");
    }
    else if(balance>=250000){
        emitter.emit("overBalance");

        //so here also we will let the event trigger the overbalance
        //handler.payIncomeTax();
        //console.log("Income tax will apply");

    }
    else{
                console.log("No income tax you are free!");
    }
   };

   var deposit=function(amount){
    balance=balance+amount;
    //handler.payIncomeTax();
    monitor();
   };

   var charged=function(amount){
    balance=balance-amount;
    //handler.blockAccount();

    monitor();
   };

   
    return{
       showBalance:getBalance,
       credit:deposit,
       debit:charged
    }
}
//Step 1
emitter.on("underBalance",handler.blockAccount);
emitter.on("underBalance",handler.sendEmail);
emitter.on("overBalance",handler.payIncomeTax);

//Step 2:Create object
var sbiacc=new Account(1000);//this is the instance 
var axisacc=new Account(3000);

//Step 3:Start invoking their operations
var data=sbiacc.showBalance();
console.log("Balance="+data);

var amount=249030;
sbiacc.credit(amount);
var amount=250000;
sbiacc.debit(amount);
data =sbiacc.showBalance();
console.log("Balanced money is="+data);
//sbiacc.monitor();



//events are always associated with objects or instances



