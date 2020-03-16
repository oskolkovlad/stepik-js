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