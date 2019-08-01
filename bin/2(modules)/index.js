const http = require("http");
let user = require("./module");
http.createServer(function(request,response){

    response.end("Hello NodeJS!");

}).listen(3000, "127.0.0.1",function(){
    console.log("Сервер начал прослушивание запросов на порту 3000");
});
console.log(user)