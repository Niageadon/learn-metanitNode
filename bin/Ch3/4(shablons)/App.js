const http = require("http");
const fs = require("fs");

http.createServer(function(request, response){
    const filePath = request.url;
    fs.readFile(__dirname + "/"+ filePath, "utf8", function(error, data){
        console.log(__dirname + "/"+ filePath);
        let message = "Изучаем Node.js";
        let header = "Главная страница";
        data = data.replace("{header}", header).replace("{message}", message);
        response.end(data);
    })
}).listen(3000);