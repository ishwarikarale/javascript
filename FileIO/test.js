var fs = require('fs');
var path=require('path');

//fs.writeFileSync("ishwari.txt","Hello world this is Ishwari!",err=>{})
var fileName = path.join(__dirname,'data','result.txt');

//var onFileRead = function (err, data) {
  //console.log("Data from File available");
//console.log(data.toString());
//};

fs.readFile(fileName,function (err, data) {
  if (err) {
    console.log("Error:", err);
    return;
  }

  console.log("Data from File available");
  console.log(data.toString());
});
fs.appendFileSync(fileName," Hello fourth");
console.log("this is the last line!");