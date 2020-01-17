'use strict'

var number = 5;
var string = "Hello";
var sym = Symbol();
var boolean = true; // and - false
null;
undefined;
var obj = {};


var man = {
	name: "Michael",
	old: 39,
	data: 1980
}

console.log(man.old);

let images = ['image1.jpg', 'image2.png', 'image3.svg'];

console.log(images[1]);

let incr = 10,
	decr = 10;

/*incr++;
decr--;

console.log(incr);
console.log(decr);*/

console.log(++incr);
console.log(--decr);

console.log("2" == 2); // true, так как сравнивает, непосредственно, значения
console.log("2" === 2); // false. Сравнивает конкретно. А здесь строка и цифра


let one = true,
	second = false;

console.log(one && second); // false, т.к есть и правда и ложь, поэтому выбирается ложь
// true выбирается, если всё правда

console.log(one || second); // true если хотя бы одно правда
// !second - обратное значение переменной, из-за ! 

// УСЛОВИЯ

let num = 60;

if (num < 50) {
	console.log("Мало")
} else if (num > 100) {
	console.log("Много")
} else {
	console.log("Верно")
};

(num == 50) ? console.log("Верно") : console.log("Неверно");

switch (num) {
	case num < 49:
		console.log('Неверно');
		break;
	case num > 100:
		console.log('Много');
		break;
	case 60:
		console.log('Верно');
		break;
	default:
		console.log('Что-то пошло не так');
		break;
}

// Циклы

while (num < 65) {
	console.log(num);
	num++;
};

for (let i = 1; i < 6; i++) {
	console.log(i);
};

for (let i = 1; i < 6; i++) {
	if (i == 3) {
		break;
	};
	console.log(i);
}

for (let i = 1; i < 6; i++) {
	if (i == 3) {
		continue;
	};
	console.log(i);
};

// Функции

let name = 20;
function showFirstMessage(text) {
	alert(text);
	let name = 10;
	console.log(name);
}

showFirstMessage('Hello');
console.log(name);

/*function calc(a,b) {
	return (a + b);
}*/

console.log(3 + 6);
console.log(8 - 23);


let calc = (a,b) => a+b // сокращенная запись вывода функции

console.log(5 + 11);

let str = "Irina";
console.log(str.length);

console.log(str.toUpperCase()); // буквы верхнего регистра
console.log(str.toLowerCase()); // буквы нижнего регистра

let crew = "12.3";
console.log(Math.round(crew)); // приводит к целому числу

let crewToo = "12.3px";
console.log(parseInt(crewToo)); // приводит к целому числу, убирая всё после точки
console.log(parseFloat(crewToo)); // оставляет только число
