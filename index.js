//Задача 1 
/*const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

people.sort((a, b) => a.age > b.age ? 1 : -1);
console.log(people.sort());*/

//Задача 2 

/*function isPositive(el) {
    if (el > 0) {
        return el;    
    }
    }
    function isMale(el) {
        if (el.gender === 'male') {
            return el;
        }
    }
    function filter(arr, ruleFunction) {
        const output = [];
        for (let i = 0; i < arr.length; i++) {
            if (ruleFunction(arr[i])) 
                output.push((ruleFunction(arr[i])));   
        }
        return output;
    }
    
    console.log(filter([3, -4, 1, 9], isPositive)); 
    
    const people = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    
    console.log(filter(people, isMale)); */

//Задача 3 

/*console.log(new Date);

let timerId = setInterval(() => console.log(new Date), 3000);
setTimeout(() => { clearInterval(timerId); console.log('30 секунд прошло'); }, 30000);*/


//Задача 4

/*function delayForSecond(callback) {
    
    setTimeout(() => {
        callback();
    }, 1000);
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})*/

//Задача 5 


/*function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:

delayForSecond((cb) => sayHi('Глеб'));*/

    







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

function memorizeWords() {
    let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    words = words.sort(() => Math.random() - 0.5);
    
    alert(`Запомни слова: ${words}`);

    const wordsOne = prompt ('Какое было первое слово?');

    const wordsTwo = prompt ('Какое было последнее слово?');

    if (wordsOne === words[0] && wordsTwo === words[words.length-1]) {
        alert('Угадал');

    } else if (wordsOne === words[0]) {
        alert('Вы были близки к победе!');

    } else if (wordsTwo === words[words.length-1]) {
        alert('Вы были близки к победе!');

    } else {
        alert('Не угадал');
    }
}