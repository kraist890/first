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

