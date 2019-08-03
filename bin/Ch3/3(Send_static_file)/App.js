const http = require("http");
const fs = require("fs");

http.createServer(function(request, response){

    console.log(`Запрошенный адрес: ${request.url}`);
    if(request.url.startsWith("/public/")){
        // получаем путь после слеша
        const filePath = request.url.substr(1);
        fs.readFile(__dirname + '/' + filePath , function(error, data){
            console.log(__dirname + '/' + filePath)

            if(error){
                console.log('err');
                response.statusCode = 404;
                response.end("Resourse not found!");
            }
            else{
                console.log('ok');
                response.setHeader("Content-Type", "text/html");
                response.end(data);
            }
        })
    }
    else{
        // во всех остальных случаях отправляем строку hello world!
        response.end("Hello World!");
    }
}).listen(3000);