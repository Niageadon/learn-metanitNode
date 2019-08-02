const fs = require("fs");

// асинхронное чтение
fs.readFile("bin/8(File_system)/text.txt", "utf8",
  function(error,data){
    console.log("Асинхронное чтение файла");
    if(error) throw error; // если возникла ошибка
    console.log(data);  // выводим считанные данные
  });
// синхронное чтение
console.log("Синхронное чтение файла")
let fileContent = fs.readFileSync("C:/Users/bibab/text.txt", "utf8");
console.log(fileContent);
//---------------------------------------------------------------
/*Запись*/
// асинхронное
fs.writeFile("bin/8(File_system)/text.txt", "hola", function(error){
  if (error) throw error; // если возникла ошибка);
});
// синхронное
fs.writeFileSync("bin/8(File_system)/text.txt", 'hey');
