// Масиви та об'єкти
// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
    let arr = [1, 'Hello', true, 3.14, null, {name: 'John'}, [1, 2, 3], undefined, Symbol('symbol'), () => console.log('Function')];
    console.log(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7],arr[8],arr[9]);



// #LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

    let book1 = {
        title: 'The Great Gatsby',
        pageCount: 180,
        genre: 'Fiction'
    };

    let book2 = {
        title: '1984',
        pageCount: 328,
        genre: 'Dystopian'
    };

    let book3 = {
        title: 'To Kill a Mockingbird',
        pageCount: 281,
        genre: 'Southern Gothic'
    };


// #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
    // let book1 = {
    //     title: 'The Great Gatsby',
    //     pageCount: 180,
    //     genre: 'Fiction',
    //     authors: [
    //         { name: 'F. Scott Fitzgerald', age: 44 }
    //     ]
    // };

    // let book2 = {
    //     title: '1984',
    //     pageCount: 328,
    //     genre: 'Dystopian',
    //     authors: [
    //         { name: 'George Orwell', age: 46 }
    //     ]
    // };

    // let book3 = {
    //     title: 'To Kill a Mockingbird',
    //     pageCount: 281,
    //     genre: 'Southern Gothic',
    //     authors: [
    //         { name: 'Harper Lee', age: 89 }
    //     ]
    // };

// #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    { name: 'Adam West ', username: 'adamWst', password: 'pass1234' },
    { name: 'Bert Cole ', username: 'bertCol', password: 'qwerty123' },
    { name: 'Cara Long ', username: 'caraLng', password: 'abcde123' },
    { name: 'Dave King ', username: 'daveKng', password: 'wonder2023' },
    { name: 'Evan Snow ', username: 'evanSnw', password: 'securepass' },
    { name: 'Faye Hill ', username: 'fayeHil', password: 'fionapass' },
    { name: 'Gary Bell ', username: 'garyBel', password: 'guitar2023' },
    { name: 'Hana Cook ', username: 'hanaCok', password: 'pass123456' },
    { name: 'Iris Root ', username: 'irisRot', password: 'joydivision' },
    { name: 'June Star ', username: 'juneStr', password: 'roberts123' }
];

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);




// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
let weekWeather = [
    [9,8,7],
    [9,8,7],
    [9,8,7],
    [9,8,7],
    [9,8,7],
    [9,8,7],
    [9,8,7],
]

let temperatures = [
    { sunday: [{morning: 15}, {afternoon: 22},{ evening: 18}] },
    { monday: [{morning: 15}, {afternoon: 22},{ evening: 18}] },
    { tuesday: [{morning: 15}, {afternoon: 22},{ evening: 18}] },
    { wednesday: [{morning: 15}, {afternoon: 22},{ evening: 18}] },
    { day: 5, morning: 13, afternoon: 20, evening: 16 },
    { day: 6, morning: 12, afternoon: 19, evening: 15 },
    { day: 7, morning: 14, afternoon: 22, evening: 17 }
];

console.log(temperatures[0].sunday[1]);


// Логічні розгалуження:

// #bAUsaq6LI
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = +prompt('task logic 1 enter once number of 1, 0, -3');
// if (x !== 0) console.log("Вірно");
// else console.log("Невірно");


// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = prompt("what time is it?")
if (time <= 15 && time > 0) {
    console.log("first quarter" );
}
else if (time <= 30 && time > 15) {
    console.log("second quarter" );
}
else if (time <= 45 && time > 30) {
    console.log("third quarter" );
}
else if (time <=     59 && time > 45) {
    console.log("fourth quarter" );
}
else console.log("can't be 🤦‍♂️");


// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = prompt("which number day of month today?");
if (day <= 10 && day > 0)console.log("first decade");
else if (day <= 20 && day > 10)console.log("second decade");
else if (day <= 30 && day > 20)console.log("third decade");
else if (day <= 31 && day > 30)console.log("fourth decade");
else console.log("can't be 🤦‍♂️");


// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let dayOfWeek = parseInt(prompt("which day of week you need?: "), 10)
switch (dayOfWeek) {
    case 1:
        console.log("hollyday");
        break;
    case 2:
        console.log("school");
        break;
    case 3:
        console.log("school");
        break;
    case 4:
        console.log("school");
        break;
    case 5:
        console.log("school");
        break;
    case 6:
        console.log("school");
        break;
    case 7:
        console.log("hollyday");
        break;

    default:
        console.log("can't be 🤦‍♂️")
        break;
}
// #uwsz1RnTQJ1
// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
let num1 = prompt("enter first number: ");
let num2 = prompt("enter second number: ");

num1 > num2 ? console.log(num1) 
: num1 < num2? console.log(num2) 
: console.log(num1," = ", num2)

// #iBvqtjEm
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
let x;
x = null
if(!x) x = "default"
console.log(x);



// #awLXL6TBzg
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const item of coursesAndDurationArray) {
    if(item.monthDuration > 5)console.log(item.title + " = is super!");
    
}
if(coursesAndDurationArray[0].monthDuration > 5) console.log("Super!");
if(coursesAndDurationArray[1].monthDuration > 5) console.log("Super!");
if(coursesAndDurationArray[2].monthDuration > 5) console.log("Super!");
if(coursesAndDurationArray[3].monthDuration > 5) console.log("Super!");
if(coursesAndDurationArray[4].monthDuration > 5) console.log("Super!");
if(coursesAndDurationArray[5].monthDuration > 5) console.log("Super!");
