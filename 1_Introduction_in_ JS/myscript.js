// Это текстовый комментарий - однострочный
document.write("Hello World");

/*
	многострочный
	комментарий
*/


// Объявление переменных
var x1 = "dvsv"; 
var studentName1; // действует и до, и после объявления
let studentName2; // действует только после объявления


// Для того, чтобы определить тип данных, записанных в переменной, мы можем воспользоваться оператором typeof.
alert(typeof x1); 


// Тернарный оператор
friend = "aaa"; // глобальная переменная (если не используется var)
hiJack = (friend == "Jack") ? "Hi, Jack!" : "Hi";
console.log(hiJack); // вывод на консоль


var a = 5;
var b = 8;

if (a > b && b =='8') {
	document.write("Будет написано это сообщение...");
}
else if (a === 23) {
	a = 23 % 4;
}
else {
	console.log("fail");
}

switch(a) {
	case 0:
		document.write(0);
		break;
	case 1:
		document.write(1);
		break;
	case 2:
		document.write(2);
		break;
	case 5:
		document.write(5);
		break;
	default:
		console.log('fail');
}


// Циклы
for (let i = 1; i <= 5; i = i + 1) {
  console.log("i = " + i);
}

var xxx = 1; 
//объявляем и инициализируем переменную, которую 
//мы будем использовать как условие цикла
while (xxx <= 5) {
  console.log(" x= " + xxx);
  xxx++;
}

var x = 5;                //установка начального значения
do {                      //начало выполнения цикла
  console.log(x);         //вывод данных в консоль
  x = x - 1;              //уменьшение значения на 1
} while (x >= 1);         //проверка условия

for (let i = 1; i < 10; i = i + 1) {
  if (i == 5) {
    break;
    //continue;
  }
  console.log('i= '+i);
}

// Метки в JavaScript действуют только для циклов и оператора Switch
metka: for (i = 1; i <= 50; i++) {
  while (i < a) {
    console.log(i);
    if (i == a) {
      break metka; 
    }

    if (i == b) {
      continue metka; 
    }
  }
}



// Функция
function SimpleMethod(a) {
	var x = a;
	return x;
}

// Функция суммы
function Sum(a, b){
	//return a + b;
	
	let x = a + b;
	return x;
}

function testIf(a, b) {
    var x;
    if (a > b) {
        x = a + b;
    }
    else {
        x = a * b;
    }
    return x;
}
