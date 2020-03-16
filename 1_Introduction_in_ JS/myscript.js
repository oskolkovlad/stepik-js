// Это текстовый комментарий - однострочный
document.write("Hello World");

/*
	многострочный
	комментарий
*/


// Объявление переменных
var x1 = "dvsv"; 
var studentName1;
let studentName2;


// Для того, чтобы определить тип данных, записанных в переменной, мы можем воспользоваться оператором typeof.
alert(typeof x1); 


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


// Тернарный оператор
friend = "aaa";
hiJack = (friend == "Jack") ? "Hi, Jack!" : "Hi";
console.log(hiJack);