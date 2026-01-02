function red(){
    console.log("RED!");
    console.log("STOP")
};
function yellow(){
    console.log("YELLOW!");
    console.log("WATCH")
};
function green(){
    console.log("GREEN!");
    console.log("MOVE")
};

function trafficSignal(){
red();
yellow();
green();
};
setInterval(trafficSignal,3000);
console.log("This is the last sentence");
clearInterval(trafficSignal,10000);