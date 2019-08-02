const http = require("http");

let message = "He1ll2o 2!";
http.createServer(function(request,response){

  console.log(message);
  response.end(message);

}).listen(3300, "127.0.0.1",()=>{
  console.log("Сервер начал прослушивание запросов");
});
console.log(message);
