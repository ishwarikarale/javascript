//this is all server side code...
//we have made our own server in here to host whatever this is 
//client will always ask and the server will always respond
var http=require("http");

var person={
    'firstname': "Ishwari",
    'lastname':'Karale',
    'email':'ishwarikarale@gmail.com'

};
var people=[
    {'firstname': "Ishwari",'lastname':'Karale','email':'ishwarikarale@gmail.com'},
    {'secondname': "Ishwari",'lastname':'Karale','email':'ishwarikarale@gmail.com'},
    {'thirdname': "Ishwari",'lastname':'Karale','email':'ishwarikarale@gmail.com'}
];
//down below is a call back funtion
var onRequestHandler=function(request,response){
console.log("Request has arrived!");
//only one response.Head() function is used.
//response.writeHead(200,{'Content-Type':'text/html'})
//response.write("<h2>Hello to client</h2>");
//response.end();
response.writeHead(200,{'Content-Type':'text/json'})
response.write(JSON.stringify(people));
//JSON.stringyfy we are converting array into string
response.end();
};
var server=http.createServer(onRequestHandler);
server.listen(9000);
console.log("Server is listening on Port no 9000");