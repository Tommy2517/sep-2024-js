// 1. increments

    // let x = 0;
    // x = x + 1; // x = 1
    // console.log(x);
    // x++;
    // console.log(x); //2
    //
    // x += 1;
    // console.log(x);// 3
    //
    // x = x - 1; // 2
    // console.log(x);
    // x *= 1; // 1
    // console.log(x);
    // x--;
    // console.log(x); //0

    // let x = 0;
    // ++x;
    // console.log(x); // 1

    // let a = 0;
    // let b = ++a;
    // console.log(a, b); // a = 1 b =1


// 2. for loop

    // let users = [
    //     {name: 'vasya', age: 31, status: false},
    //     {name: 'petya', age: 30, status: true},
    //     {name: 'kolya', age: 29, status: true},
    //     {name: 'olya', age: 28, status: false},
    //     {name: 'max', age: 30, status: true},
    //     {name: 'anya', age: 31, status: false},
    //     {name: 'oleg', age: 28, status: false},
    //     {name: 'andrey', age: 29, status: true},
    //     {name: 'masha', age: 30, status: true},
    //     {name: 'olya', age: 31, status: false},
    //     {name: 'max', age: 31, status: true},
    //     {name: 'max', age: 31, status: true},
    //     {name: 'max', age: 31, status: true},
    //     {name: 'max', age: 31, status: true},
    //     {name: 'max', age: 31, status: true},
    //     {name: 'max', age: 31, status: true},
    //     {name: 'max', age: 31, status: true},
    // ];
    //
    //
    // for (let i = 0; i < users.length; i++) {
    //     let user = users[i];
    // }


    // let products = [
    //     {
    //         title: 'milk',
    //         price: 22,
    //         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    //     },
    //     {
    //         title: 'juice',
    //         price: 27,
    //         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    //     },
    //     {
    //         title: 'tomato',
    //         price: 47,
    //         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    //     },
    //     {
    //         title: 'tea',
    //         price: 15,
    //         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    //     },
    // ]; // DB

    // for (let i = 0; i < products.length; i++) {
    //     const product = products[i];
    //     document.write(`<div class="target">
    //                         <h2>${product.title} - ${product.price} UAH</h2>
    //                         <img src="${product.image}" alt="">

    //                   </div>`);
    // }


// 3.for of


    // let users = [
    //     {name: 'vasya', age: 31, status: false},
    //     {name: 'petya', age: 30, status: true},
    //     {name: 'kolya', age: 29, status: true},
    //     {name: 'olya', age: 28, status: false},
    //     {name: 'max', age: 30, status: true},
    //     {name: 'anya', age: 31, status: false},
    //     {name: 'oleg', age: 28, status: false},
    //     {name: 'andrey', age: 29, status: true},
    //     {name: 'masha', age: 30, status: true},
    //     {name: 'olya', age: 31, status: false},
    //     {name: 'max', age: 31, status: true}
    // ];
    //
    // for (let user of users) {
    //     console.log(user);
    // }

    // let products = [
    //     {
    //         title: 'milk',
    //         price: 22,
    //         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    //     },
    //     {
    //         title: 'juice',
    //         price: 27,
    //         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    //     },
    //     {
    //         title: 'tomato',
    //         price: 47,
    //         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    //     },
    //     {
    //         title: 'tea',
    //         price: 15,
    //         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    //     },
    // ]; // DB

    // for (let product of products) {

    //     document.write(`<div class="target">
    //                         <h2>${product.title} - ${product.price} UAH</h2>
    //                         <img src="${product.image}" alt="">

    //                   </div>`);
    // }


// 4. for in

    // let user = {
    //     id: 1,
    //     name: 'vasya',
    //     status: true,
    //     skills: [],
    //
    // }
    //
    // for (let fieldName in user) {
    //     console.log(fieldName, user[fieldName]);
    // }


    // let users = [
    //     {name: 'vasya', age: 31, status: false},
    //     {name: 'petya', age: 30, status: true},
    //     {name: 'kolya', age: 29, status: true},
    //     {name: 'olya', age: 28, status: false},
    //     {name: 'max', age: 30, status: true},
    //     {name: 'anya', age: 31, status: false},
    //     {name: 'oleg', age: 28, status: false},
    //     {name: 'andrey', age: 29, status: true},
    //     {name: 'masha', age: 30, status: true},
    //     {name: 'olya', age: 31, status: false},
    //     {name: 'max', age: 31, status: true}
    // ];

    // for (const user of users) {

    //     for (const fieldName in user) {
    //         console.log(fieldName, user[fieldName]);

    //     }
    //     console.log('');


    // }


// 5. while

    // let users = [
    //     {name: 'vasya', age: 31, status: false},
    //     {name: 'petya', age: 30, status: true},
    //     {name: 'kolya', age: 29, status: true},
    //     {name: 'olya', age: 28, status: false},
    //     {name: 'max', age: 30, status: true},
    //     {name: 'anya', age: 31, status: false},
    //     {name: 'oleg', age: 28, status: false},
    //     {name: 'andrey', age: 29, status: true},
    //     {name: 'masha', age: 30, status: true},
    //     {name: 'olya', age: 31, status: false},
    //     {name: 'max', age: 31, status: true}
    // ];
    // let i = 0;
    // while (i < users.length) {
    //     let user = users[i];
    //     console.log(user);
    //     i++;
    //
    // }


    // do {
    //     console.log('adshgfahsgdfhgsafd');
    // } while (false)

