function display(data, callback){

  // с помощью случайного числа определяем ошибку
  var randInt = Math.random() * (10 - 1) + 1;
  var err = randInt>5? new Error("Ошибка выполнения. randInt больше 5"): null;

  setTimeout(function(){
    callback(err, data);
  }, 0);
}
function delay(ms){
  setTimeout(()=>{
    console.log('Задежка в ' + ms + 'мс.')}, ms)
}

console.log("Начало работы программы");
delay(500);
delay(100);
delay(200);
display("Обработка данных...", function (err, data){

  if(err) throw err;
  console.log(data);
});

console.log("Завершение работы программы");
