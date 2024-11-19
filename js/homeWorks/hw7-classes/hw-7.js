//увага на всяк випадок якщо коли Сергій робить зауваження с приводу використання чат жпт та списувань з лекції,
//я трохи наляканий чи не мають на увазі мене, то хочу сказати що я роблю домашку потім дивлюсь вже відео з вирішенями якщо немає впевненості що та як.
//але після перегляду роблю вже по пам"яті. що до чату то в домашках не використовую його навіть для створення масивів з юзерами.
//використовую якщо хочу пояснення чому щось працює а щось не працює і тільки тоді коли багато часу вітрачаю на те щоб зрозуміти і не можу
//дякую за увагу, приємного тиждня😊


// // #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname , email, phone) {
    this.id = id; 
    this.name = name; 
    this.surname = surname; 
    this.email = email; 
    this.phone = phone; 
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = [];
let names = ['vasya', 'petya', 'vika', 'masha', 'max', 'alex', 'sofa','rita','kolya','tanya'];
let surNames = ['juravel', 'vovk', 'bik', 'juravel', 'zayats', 'sinica', 'kit', 'tuman', 'vasileva', 'pupkin', 'kokosova'];
names.forEach((element,index) => { 
    users.push(new User(index+1, element, surNames[index], `${element}.${surNames[index]}` + '@mail.com','+380(63)'+(Math.floor(1000000 + Math.random()*9000000))))
});
console.log(users);

// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(users.filter(value => value.id % 2 === 0));

// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(users.sort((a,b) => a.id - b.id));  


// #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client extends User{
    constructor(id, name, surname , email, phone, order) {
        super(id, name, surname , email, phone)
        this.order = order
    }
}
let clients = []
let inv = [
    {title:'apple', price:15},
    {title:'milk', price:13},
    {title:'bread', price:8},
    {title:'butter', price:25},
    {title:'tea', price:25},
    {title:'juice', price:12},
    {title:'qukumber', price:999},
    {title:'potato', price:9},
    {title:'banana', price:16},
    {title:'tomato', price:20},
    {title:'cola-coca', price:22},
]
const random = (minNum, maxNum) => Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;


function basket(products,count) {
    let basket = []
    let countOfProducts = random(1,10)
    for (let i = 0; i < countOfProducts; i++) {
        basket.push(products[random(1,10)])
    }
    return basket
}

names.forEach((element, index) => {
    clients.push(new Client(index+1, element, surNames[index], `${element}.${surNames[index]}` + '@mail.com','+380(63)'+random(1000000, 9000000),[...basket(inv)]))
});
console.log(clients);

// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clients.sort((a, b) => a.order.length - b.order.length));


// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, maker, year, maxSpeed, engine,) {
    this.model = model 
    this.maker = maker 
    this.year = year 
    this.maxSpeed = maxSpeed 
    this.engine = engine

    this.drive = () => console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
    this.info = () => {
            for(const key in this) {
                if( typeof(this[key]) !== "function")
                console.log(key, this[key])
            };
        }
    // this.info = () => {for(const key in this) if( typeof(this[key]) !== "function") console.log(key, this[key]);} можливо так кращє але не прийнято
    this.increaseMaxSpeed = (newSpeed) => this.maxSpeed += maxSpeed //по опису треба +=. по назві аргументу просто =. бо там як би підвищіти треба а у назві аргумента наче як нове значення 
    this.changeYear = (newValue) => this.year = newValue
    this.addDriver = (driver) => this.driver = driver
}

let car = new Car('vv', 'io', 2077, 700, 999)
car.addDriver(clients[1])
car.info()


// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class CarC extends Car{
    constructor(model, maker, year, maxSpeed, engine) {
        super(model, maker, year, maxSpeed, engine)
        
    }
}
let car2 = new CarC('1vv', 'io1', 20771, 7001, 9991)
car2.info()
car2.addDriver(users[7])
car2.info()


// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name,age,futSize){
        this.name = name
        this.age = age
        this.futSize = futSize
    }
}
let cinderellas = [];

for (const cinderella of names) {
    cinderellas.push(new Cinderella(cinderella,random(17,19), random(35,39)));//попелюшку не завжди можна знайти
}
console.log(cinderellas);
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince extends Cinderella{
    constructor(name,age,futSize) {
        super(name,age,futSize)
    }
}
const prince = new Prince(users[1].name, 18, random(35,39))
console.log(prince);

// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
function findCin(cins) {
    for (const cinderella of cins) {
        if (cinderella.futSize === prince.futSize){
            return cinderella
        }
    }
}
console.log(findCin(cinderellas));

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
function findCin2(cins) {
    return cins.find(cin => cin.futSize === prince.futSize)
}
console.log(findCin2(cinderellas))



// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

Array.prototype.myForeach = function (callback) {
    const arr = this;
    for (const item of arr) {
        callback(item)
    }}
cinderellas.myForeach(value => console.log(value))

Array.prototype.myFind = function(callback) {
    const arr = this;
    for (const item of arr) {
        if (callback(item)) {
            return item
        }
    }
}
console.log(clients.myFind(cin => cin.name === 'vika'));

Array.prototype.myFilter = function(callback) {
    const arr = this;
    const newArr = []
    for (const item of arr) {
        if (callback(item)) {
            newArr.push(item)
        }
    }
    return newArr
}
console.log(cinderellas.myFilter(cin => cin.age === 18));
