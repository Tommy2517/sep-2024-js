// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
    function squareFunc(a, b) {
        return a + b
    }
// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
    function circleFunc(radius) {
        return Math.PI * radius **2
    }
    console.log(circleFunc(5));
// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
    function celinderFunc(hight, radius) {
        return (Math.PI * radius **2) * hight
    }
    console.log(celinderFunc(2,5));
// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
    function arrShower(arr) {
        arr.forEach(element => {        
            console.log(element);
        });
    }
    arrShower(['hello', 'Okten', '❤'])
// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
    function paragraphFunc(p) {
        return document.write(`<p style="color:red">${p}</p>`)
    }
    paragraphFunc('You')
// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
    function ulFunc(text) {
        return document.write(`
                <ul>
                    <li>${text}</li>
                    <li>${text}</li>
                    <li>${text}</li>
                </ul>
            `)
    }
    ulFunc('bem')
// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
    function wtFunc(text,li) {
        return (document.write(
            `
                <ul>
                    <script>
                        for(let i =0; i<${li};i++){
                            document.write(\`<li>${text}</li>\`)
                        }
                    </script>
                </ul>
            `)
        )
    }
    wtFunc('wow',2)
// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
    function wtFuncArr(arr) {
        document.write(`<ul>`)
        for (let i = 0; i< arr.length; i++) {
            document.write(`<li>${arr[i]}</li>`)
        }
        document.write(`</ul>`)
    }
    wtFuncArr(['hello', 'Okten', '❤'])
// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function userFunc(users) {
for (const user of users) {   
    for (const key in user) {
        document.write(`<div>user ${key} - ${user[key]}</div>`)
    }
}
}
userFunc([{id:1,name:'pipa',age:2},{id:2,name:'bubu',age:5302489}])
// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
function returnMin(arr) {
    let min = arr[0];
    for (const num of arr) {
        if(min > num) min = num 
    }
    return min
}
console.log( returnMin([312,312,11,432,453,33,22]))
// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr){
    let sum = 0;
    for (const value of arr) {
        sum += value
    }
    return sum
}
console.log(sum([1,2,10]))
// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заначення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr,index1,index2){
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr
}
console.log(swap([99,88,77,66,55],0,2));

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
function exchange(sumUAH,currencyValues,exchangeCurrency){
    for (const element of currencyValues) {
        if(element.currency === exchangeCurrency) return sumUAH / element.value
    }
}
console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD')) 
