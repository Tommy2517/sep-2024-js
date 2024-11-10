// #WpkK0ZH1
// --створити масив з:
// - з 5 числових значень
let arrFiveNums = [1,2,3,4,5];
// - з 5 стічкових значень
let arrFiveStr = [1,2,3,4,5];
// - з 5 значень стрічкового, числового та булевого типу
let arrFiveTypes = [1,'2',true,false,5];
// - та вивести його в консоль
console.log(arrFiveTypes);

// #4aDbSgh
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arrEmpty = [];
arrEmpty[0] = 'hello';
arrEmpty[1] = 'Okten';
console.log(arrEmpty);


// #qLQLJSeN7i
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
let randomArr1 = [2,17,13,6,22,31,45,66,100,-18];
// 1. перебрати його циклом while
let whileCounter = 0
while (whileCounter < randomArr1.length) {
    console.log(randomArr1[whileCounter]);
    whileCounter++
}
// 2. перебрати його циклом for
for (let i = 0; i < randomArr1.length; i++) {
    console.log(randomArr1[i]);
        
}
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
whileCounter = 0
while (whileCounter < randomArr1.length) {
    whileCounter % 2 !== 0 ? console.log(randomArr1[whileCounter]):null;
    whileCounter++
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = 0; i < randomArr1.length; i++) {
    i % 2 !== 0 ? console.log(randomArr1[i]):null;
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
whileCounter = 0
while (whileCounter < randomArr1.length) {
    whileCounter % 2 === 0 ? console.log(randomArr1[whileCounter]):null;
    whileCounter++
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = 0; i < randomArr1.length; i++) {
    i % 2 === 0 ? console.log(randomArr1[i]):null;
}
// 7. замінити кожне число кратне 3 на слово "okten"
randomArr1.forEach((element, index) => {
element % 3 === 0? randomArr1[index] = 'okten':null;
});
console.log(randomArr1);
// 8. вивести масив в зворотньому порядку.
for (let i = 1; i < randomArr1.length; i++) {
    console.log(randomArr1[randomArr1.length-i]);  
}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 7:
randomArr1.forEach((element, index) => {
    randomArr1[index] === 'okten' ? randomArr1[index] = 33 : null;
    });
    console.log(randomArr1);
    
// 6:
for (let i = 0; i < randomArr1.length; i++) {
    i % 2 !== 0 ? console.log(randomArr1[i]):null;
}
// 5:
whileCounter = 0
while (whileCounter < randomArr1.length) {
    whileCounter % 2 !== 0 ? console.log(randomArr1[whileCounter]):null;
    whileCounter++
}
// 4.
for (let i = 0; i < randomArr1.length; i++) {
    i % 2 === 0 ? console.log(randomArr1[i]):null;
}
// 3.
whileCounter = 0
while (whileCounter < randomArr1.length) {
    whileCounter % 2 === 0 ? console.log(randomArr1[whileCounter]):null;
    whileCounter++
}
// 2.
for (let i = 1; i < randomArr1.length; i++) {
    console.log(randomArr1[randomArr1.length-i]);
}
// 1.
whileCounter = 0;
while (whileCounter < randomArr1.length) {
    console.log(randomArr1[randomArr1.length - whileCounter]);
    whileCounter++
}
// #yHAwJOyiC
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arrTenNums = [12,13,14,24,34,23,21,31,41,51]
// #GamKju89ob
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arrTenStr = ['12','13','14','24','34','23','21','31','41','51']
// #Bm76xmg
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
const arrTenRand = [42,"Привет, мир!",true,null,undefined,{ name: "Иван" },[1, 2, 3],Symbol("id"),BigInt(1234567890),function() {return "Функция выполнена";}];
for (const element of arrTenRand) {console.log(element);}
// #u3vmD0YJXh
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// #9stMq2ou
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// #mK4pmM4
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// #0pm3EyTKy9
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// #mDMWMW5a
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// #4sXhaa5YMM
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// #s24slNyz7
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// #zananT5FR1
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// #Tfrwls7FM
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write


// #reLkOkTB29Q
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// - знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
