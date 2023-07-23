//Задача 1
/*const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
    if (numbs[i] == 10) break;

    console.log(numbs[i]);
}*/

//Задача 2
/*const numbs = [1, 5, 4, 10, 0, 3];

const i = numbs.indexOf(4)
console.log(i)*/

//Задача 3
/*let num = [1, 3, 5, 10, 20];
num = num.join(' ');
console.log(num);*/

//Задача 4
/*let arr = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];

for (let i = 1; i < 3; i++) {
    arr[i] = []; 
    
    for (let j = 0; j < 3; j++) {
        arr[i].push(1); 
    }
}
console.log(arr);*/

//Задача 5
/*let nums = [1, 1, 1];
nums.push('2, 2, 2');
console.log(nums);*/

//Задача 6
/*let arr = [9, 8, 7, 'a', 6, 5];
arr = arr.sort();
console.log(arr.pop());
console.log(arr);*/

//Задача 7

/*let arr = [9, 8, 7, 6, 5];

let num = prompt ('Введи число от 0 до 9?');

if (num >= 5 && num <= 9) {
    function numSearch() {
        alert('Угадал!');
    }
} else {
    function numSearch() {
        alert('Не угадал!');
    }
}
numSearch();*/

//Задача 8
/*let letters = 'abcdef';
letters = letters.split('');
letters.reverse();
letters = letters.join('');
console.log(letters);*/

//Задача 9
/*let arr = [1, 2, 3,];
let num = [4, 5, 6];
let res = arr.concat(num);
console.log(res);*/

//Задача 10 
/*let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = 0;
for (let i = 0; i < array.length; i++) {
  result += array[i];
}
console.log(result);*/

//Задача 11
/*let num = [2, 4, 6];
let numSquare = num.map((num) => num * num);
console.log(numSquare);*/

//Задача 12
/*let getLengthWords = ['слово', '', 'слог', 'длинное предложение', 'буква'];
let wordLenght = getLengthWords.map((word) => {
    return word.length;
})

console.log(wordLenght);*/

//Задача 13
/*let nums = [-1, 0, 5, -10, 56];
let num = [-25, 25, 0, -1000, -2];

function filterPositive(array) {
    array.forEach(function(item){

    if(item < 0){
            console.log(item);
    }
    });
    }
    
filterPositive(nums);
filterPositive(num);*/









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
