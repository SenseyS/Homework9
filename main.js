// 1) Створити масив з 20 чисел та:
//     a) відсортувати його від меншого до більшого.
//     b) відсортувати його від більшого до меншого.
//     c) Відфілтрувати числа які є кратними 3.
// d) Відфілтрувати числа які є більшими за 10.
// e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
// f) За допомогою map збільшити кожен елемент в масиві в три рази.
//     g) Порахувати загальну суму всіх елментів у масиві (reduce)
//
const numbers = [0, 4, 15, 13, 14, 8, 18, 19, 9, 5, 10, 7, 12, 6, 1, 2, 3, 11, 16, 17,];

let numbersA = numbers.sort((a, b) => {
    return a - b;
});
console.log(numbersA);

let numbersB = numbers.sort((a, b) => {
    return b - a;
});
console.log(numbersB);

let numbersC = numbers.filter(value => {
    return value % 3 === 0;
});
console.log(numbersC);


numbersD = numbers.filter(value => {
    return value > 10;
});
console.log(numbersD);

numbers.forEach(num => document.write(num));


let numbersF = numbers.map(value => value * 3);
console.log(numbersF);

let numbersG = numbers.reduce((acc, curentValue) => {

    return acc + curentValue;
});
console.log(numbersG);

// 2) Створити масив з 20 стрічок та:
//     a) Відсортувати його в алфавітному порядку
// b) Відсортувати в зворотньому порядку
// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
//
const str = ['ant', 'bison', 'camel', 'duck', 'elephant', 'yak', 'doc', 'hamster ', 'rabbit', 'wolf', 'zebra', 'lamb', 'salmon', 'sparrow', 'giraffe', 'crocodile', 'shark', 'penguin', 'monkey', 'horse'];
console.log(str);

let strA = str.sort();
console.log(strA);

let strB = str.sort((x, y) => {
    if (x < y) {
        return 1
    }
    return -1
});
console.log(strB);

let strC = str.filter(value => {
    if (value.length > 4) {
        return value
    }
});
console.log(strC);

let strD = str.map(value => 'Sam says' + ' ' + value);
console.log(strD);


// 3) Все робити тільки за допомогою методів масивів!
//     Дано масив :
const users = [
    {name: 'vasya', age: 31, isMarried: false},
    {name: 'petya', age: 30, isMarried: true},
    {name: 'kolya', age: 29, isMarried: true},
    {name: 'olya', age: 28, isMarried: false},
    {name: 'max', age: 30, isMarried: true},
    {name: 'anya', age: 31, isMarried: false},
    {name: 'oleg', age: 28, isMarried: false},
    {name: 'andrey', age: 29, isMarried: true},
    {name: 'masha', age: 30, isMarried: true},
    {name: 'olya', age: 31, isMarried: false},
    {name: 'max', age: 31, isMarried: true}
];
// a) відсортувати його за  віком (зростання , а потім окремо спадання)
let users1 = users.sort((a, b) => {
    return a.age - b.age
});
console.log(users1);
// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
let users2 = users.sort((a, b) => {
    if (b.name.length < a.name.length) {
        return 1
    }
    return -1
});
console.log(users2);

// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)
let id = 0;
let user3 = users.map(value => {
    value.id = Math.floor(Math.random() * 100);
    return value;
});

console.log(user3);

// d) відсортувати його за індентифікатором
let user4 = users.sort((a, b) => {
    return a.id - b.id;

});
console.log(user4);

// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)

//Не зміг зробити через reduce
let sweetHome = {street: 'kn. Olgi', num: 100};
let newUsers = [];
users.forEach(value => {
    if (value.isMarried === true) {
        value.home = sweetHome;
        newUsers.push(value)
    }

});
console.log(newUsers);