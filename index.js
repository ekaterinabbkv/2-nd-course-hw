//Задание 1

/*function min(a , b) {
    if (a < b) {
      return a;  
    } else {
        return b;
    }
}

console.log(min(8, 4));*/

//Задание 2

/*function num(c) {
    if (c % 2 == 0) {
      return ('Число четное');  
    } else {
        return ('Число нечетное');
    }
}

console.log(num(9));*/

//Задание 3
//3.1

/*function num(i) {
    i**2;
}

console.log(num(10));*/

//3.2

/*function num(i) {
    return (i ** 2);
}
console.log(num(10));*/

//Задание 4

/*let age = prompt ('Сколько вам лет?');

if (age <= 12) {
    function printMessage() {
        console.log('Привет, друг!');
    }
} else {
    function printMessage() {
        console.log('Добро пожаловать!');
    }
}
if (age < 0) {
    function printMessage() {
        console.log('Вы ввели неправильное значение');
    }
}
printMessage();*/

//Задание 5

/*function num(a , b) {

    if (isNaN(a) || isNaN(b)) {
        
        return 'Одно или оба значения не являются числом';

    }
        else {

        return a * b;

    }

}

console.log(num(4 , 5));*/


//Задание 6

/*let num = prompt ('Введите число');

if (isNaN(num)) {
    function answer(params) {
        console.log('Переданный параметр не является числом');
    }
} else {
    function answer(params) {
        console.log(`${num} в кубе равняется ${num ** 3}`);
    }
}
answer();*/

//Задание 7

/*function getArea() {
    return 3.14 * this.radius **2; 
}

function getPerimeter() {
    return 2 * 3.14 * this.radius;
}

const circle1 = {
    radius: 10,
    getAreaRheuf: getArea,
    getPerimeterRheuf: getPerimeter,
};

const circle2 = {
    radius: 15,
    getAreaRheuf: getArea,
    getPerimeterRheuf: getPerimeter,
};

console.log(circle1.getAreaRheuf());
console.log(circle1.getPerimeterRheuf());
console.log(circle2.getAreaRheuf());
console.log(circle2.getPerimeterRheuf());*/


//Задание 8

function seasons() {
    let answer = prompt('Введите номер месяца (от 1 до 12)');
    
    if (answer = 12 || (answer >= 1 && answer <=2)) {
        alert('Зима');
    }
    else if (answer >= 3 && answer <= 5) {
        alert('Весна');
    }
    else if (answer >= 6 && answer <= 8) {
        alert('Лето');
    }
    else if (answer >= 9 && answer <= 11) {
        alert('Осень');;
    }
    else {
        alert('Вы ввели не подходящее значение');
    }
        
}
