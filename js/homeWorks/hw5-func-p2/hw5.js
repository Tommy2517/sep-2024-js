document.open()//(скіп) не журіть будьласка, без цього не працюють імпорти через document.write


// Тут ті самі завдання, що і в занятті про базові функції, але зробити їх потрібно за допомоги стрілочних функцій
// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
    const squareFunc = (a, b)=> a * b; //проща прямокутніка строна а помножена на сторону б
    console.log(squareFunc(21,12));

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
    const circleAreaFunc = (rad) => Math.PI * rad ** 2;
    console.log(circleAreaFunc(5));

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
    const celindreAreaFunc = (rad, h) => (Math.PI * rad ** 2) * h;
    console.log(celindreAreaFunc(5,2));

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
    const arrShower = (arr) => {
        for(let i = 0; i < arr.length; i++){
            console.log(arr[i]);
        }
    }
    arrShower([3,4,5,1,2,3,5,6,8,9,6,])

// #59g0IsA
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const pCreator = (text) => `<p>${text}</p>`
document.write(pCreator('meow'))

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const createList = (text) => document.write(`<ul><li>${text}</li> <li>${text}</li> <li>${text}</li> </ul>`)
createList('wof')

// #0Kxco1edSN
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const dynamicList = (text,li) => {
    document.write(`<ul>`)
    for (let i = 0; i < li; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
dynamicList('aw',2)
// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const arrToList = (arr) => {
    document.write(`<ul>`)
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`)
    }
    document.write(`</ul>`)
}
arrToList(['aw',2,true,NaN,undefined,[123,{name:'buk',age:1}]])
// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const usersObject = (arr)=>{
    for (const element of arr) {
        for (const key in element) {
            document.write(`<div>${key} ${element[key]}</div>`)
        }
    }
}
usersObject([{id: 1, name:'Vova', age:40}])

// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
const minNumber = (arr) => {
    let min = arr[0]
    for (const num of arr) {
        if (num < min) min = num
    }
    return 'minimal number = ' + min
}
console.log(minNumber([9,8,7,6,5,7,8,9]));

// #EKRNVPM
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const sum = (arr) => {
    let sum = 0
    for (const element of arr) {
        sum += element
    }
    return sum
}
console.log(sum([12,13]));

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swap = (arr, index1, index2) => {
    let x = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = x
    return arr
}
console.log(swap([1,2,3,4,5,6],3,5));

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
const exchange = (sumUAH,currencyValues,exchangeCurrency) => {
        for (const element of currencyValues) {
            for (const i in element) {
                if (element.currency === exchangeCurrency) {
                    return sumUAH / element.value
                }
        }
    }
}
const result = exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD');
console.log(result);




document.close()