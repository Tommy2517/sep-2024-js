// #y7crMeFwHcS
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
document.write(`<div>
        hi
    </div>`)
}

// #TYj7ncx
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div style="">
            this index is - ${i}
        </div>`)
    }

// #uzkt71dp
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let wH = 0;
while (wH < 20) {
    wH++
    document.write(`<h1>while iteration ${wH}</h1>`)
}
// #OeT7t3uUMFi
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
wH = 0
while (wH < 20) {
    document.write(`<h1 style="color:green;">${wH} index iteration</h1>`)
    wH++
}


// #vLSZKMlO
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

// ШАБЛОН:
document.write`<ul>`
    for (const item of listOfItems) {        
        document.write(`<li style="font-size:32px;">${item}</li>`)
    }
document.write(`</ul>`)
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

// -----------------------------------------------
// #Hdjws7E
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

// ШАБЛОН
for (const item of products) {
    document.write(`<div class="product-card">`)
    document.write(`
                <h3 class="product-title">${item.title}. Price - ${item.price}</h3>
                <img src="${item.image}" width="200px" alt="" class="product-image">
        `)
    document.write(`</div>`)
}
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту



// --------------------
// #4WrHwFTEop0
// є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
//  за допомоги циклу вивести:
//  - користувачів зі статусом true
//  - користувачів зі статусом false
//  - користувачів які старші за 30 років
for (const item of users) {
    if(item.age > 30)document.write(`
            <div> ${item.name} has ${item.age} age</div>
        `);
    
}
for (const item of users) {
    if(!item.status)document.write(`
            <div> ${item.name} has status ${item.status}</div>
        `);
    
}
for (const item of users) {
    if(item.status)document.write(`
            <div> ${item.name} has status ${item.status}</div>
        `);
    
}
