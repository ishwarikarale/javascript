
exports.payIncomeTax=function(){
    console.log("Now,you have to pay 20 % tax");
}

exports.blockAccount=function(){
    console.log("Sorry your account is blocked");
}
exports.sendEmail=function(){
    console.log("Email has been sent to resolve this issue!");
    
}
//exports keyword helps in using the fn in another file
//this functions will only occur when the event occurs
//SOC:seperation of concern -if application logic is complext you have to decouple into small part and recouple later 
//loosly couple highly cohesive
//this is caller as divide and conquer