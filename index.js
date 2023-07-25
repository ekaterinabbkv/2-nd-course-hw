//Задача 1

/*let str = 'Строка';
console.log(str.toUpperCase());*/

//Задача 2

/*let animals = ['Кошка', 'Кит', 'Комар', 'Носорог'];
let search = 'ко';
animals.forEach((animal) => {
    if (animal.toLowerCase().startsWith(search.toLowerCase())) {
		console.log(animal);
	}
});*/

/*let products = ['яблоко', 'груша', 'гриб', 'огурец'];
let search = 'гру';
products.forEach((product) => {
    if (product.toLowerCase().startsWith(search.toLowerCase())) {
		console.log(product);
	}
});*/

/*let buildings = ['Дом', 'Банк', 'Больница', 'Театр'];
let search = 'кино';
buildings.forEach((building) => {
    if (building.toLowerCase().startsWith(search.toLowerCase())) {
		console.log(building);
	}
});*/

//Задача 3

/*console.log(Math.floor(32.58884));
console.log(Math.ceil(32.58884));
console.log(Math.round(32.58884));*/

//Задача 4

/*function minmax(...nums) {
    return [Math.min(...nums), Math.max(...nums)];
    }
console.log(minmax(52, 53, 49, 77, 21, 32));*/

//Задача 5

/*function getRandomInt(minValue, maxValue) {
    return Math.round(Math.random() * maxValue);
}
console.log(getRandomInt(1 , 10));*/

//Задача 6


//Задание 7

/*function getRandomInt(minValue, maxValue) {
    return Math.round(Math.random() * (maxValue - minValue) + minValue);
}
console.log(getRandomInt(2 , 15));*/

//Задание 8

/*let myDate = new Date;
console.log(myDate);*/

//Задание 9

/*let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);*/

//Задание 10

/*const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let myDate = new Date();
let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " - это " + days[myDate.getDay()];
console.log(fullDate);

let hour = myDate.getHours();
let minute = myDate.getMinutes();
let second = myDate.getSeconds();

if (minute < 10) {
    minute = "0" + minute;
}
if (second < 10) {
    second = "0" + second;
}
console.log("время: " + hour + ":" + minute + ":" + second);*/

//Задание 11









//onclick

function seasons() {
    let answer = prompt('Введите номер месяца (от 1 до 12)');
    
    if (answer == 12 || answer == 1 || answer == 2) {
        alert('Зима');
    }
    else if (answer == 3 || answer == 4 || answer == 5) {
        alert('Весна');
    }
    else if (answer == 6 || answer == 7 || answer == 8) {
        alert('Лето');
    }
    else if (answer == 9 || answer == 10 || answer == 11) {
        alert('Осень');
    }
    else {
        alert('Вы ввели не подходящее значение');
    }        
}
