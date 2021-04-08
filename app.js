// 1 задание
var tf, tc = +prompt("1. Введите температуру в градусах по Цельсию:");

if (isNaN(tc) || tc == "") {
    alert("Вы ввели не число или поле пустое!");
} else {
    tf = tc * 9/5 + 32;
    alert("Ответ 1:\nТемпература по Фаренгейту: " + tf);
}

// // 2 задание
var admin, name = "Василий";

admin = name;
alert("Ответ 2:\n" + admin);

// // 3 задание
var x = 1000;
var y = "108";
var c = x + y;

alert("Ответ 3:\n" + c);

// // 4 задание
alert("Ответ 4:\n Разобрался с async и defer");

// 5 задание
var a = +prompt("a = ");
var b = +prompt("b = ");

if (isNaN(a) && isNaN(b) || a + b == "") {
    alert("Вы ввели не число или поле пустое!");
} else {
    a = a + b;
    b = a - b;
    a = a - b;
    alert("Ответ 5:\n a = " + a + "\n b = " + b);
}