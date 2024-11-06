// 1. arrays base
    // let arr;

    // arr = [123, 234, 345, -123, 0, true, 'asiugahd'];
    // console.log(arr);
    // console.log(arr[0]);
    // console.log(arr[2]);
    // console.log(arr[4]);
    // console.log(arr.length);

    // arr[0] = 'new value';
    // console.log(arr);
    // arr[7] = 'okten';
    // console.log(arr);// 8 7 8
    // arr[arr.length] = 1293883;
    // console.log(arr);
    // arr[arr.length] = 'aiffysadf';
    // console.log(arr);


// 2. Array in array
    // let arr = [
    //     //    0   1   2
    //         [11, 22, 33], // 0
    //         [], // 1
    //         [] // 2
    //     ];
    //     console.log(arr);
    //     //                           0  1  2
    //     let innerArray = arr[0]; // 11 22 33
    //     console.log(innerArray[1]); // 22

    //     console.log(arr[0][1]);


//3. Objects create
    // let user1 = {
    //     id: 1,
    //     name: 'vaysa',
    //     age: 31
    // }

    // console.log(user1);


// 4. embeded objs

    // let user1 = {
    //     id: 1,
    //     name: 'vaysa',
    //     age: 31,
    //     skills: ['html', 'js', 'java'],
    //     wife: {
    //         name: 'olya',
    //         age: 28
    //     }
    // }

    // console.log(user1);
    // console.log(user1.id);
    // console.log(user1['age']);
    // console.log(user1.skills[2]);

    // console.log(user1.wife.name);


//5. array of obj
    // let users = [
    //     {skills: ['html', 'mysql', 'mongo'], id: 1, name: 'vasya', age: 31, status: true},
    //     {skills: ['html', 'js'], id: 2, name: 'petya', age: 33, status: false},
    //     {skills: ['html', 'js'], id: 3, name: 'anna', age: 28, status: true},
    //     {skills: ['html', 'mysql', 'mongo'], id: 4, name: 'olya', age: 29, status: false}
    // ];
    // console.log(users);
    // let user0 = users[0];

    // console.log(user0.age);
    // console.log(user0['age']);

    // console.log(users[0].skills[2]);
    // console.log(users[0]['skills'][2]);
    // console.log(users[0]['skills'][2]);


// 6. add fields to obj
    // let user = {
    //     id: 1,
    //     name: 'vasya',
    // };

    // user.age = 31;
    // user['status'] = false;
    // console.log(user);

    // delete user.id;
    // console.log(user);


// 7. refs vs primitives
    // number
    // string
    // boolean

    // let a = 100;
    // let b = a;
    // b = b + 10; //110
    // console.log(a); //100

    // let user = {name: 'vasya'};
    // let user2 = user;
    // console.log(user2);
    // user2.age = 31;
    // console.log(user2);

    // console.log(user);

//8. if
    // let age = +prompt('enter your age');
    // console.log(age);
    //
    // // if (age >= 18) {
    // //     console.log('watch your movie');
    // // }
    //
    //
    // if (age >= 18) {
    //     document.write('<h2>watch movie</h2>');
    // } else {
    //     document.write('<h2>go away</h2>');
    // }


    // let color = prompt('enter color');
    //
    // if (color === 'green') {
    //     console.log('you can go');
    // } else if (color === 'yellow') {
    //     console.log('wait');
    // } else if (color === 'red') {
    //     console.log('stop');
    // } else {
    //     console.log('?????');
    // }


    // let color = prompt('enter color');
    // let isRoadClear = prompt('is road clear?');
    //
    // if (color === 'green') {
    //     if (isRoadClear === 'yes') {
    //         console.log('you can go');
    //     } else {
    //         console.log('wait pls');
    //     }
    //
    // } else if (color === 'yellow') {
    //     console.log('wait');
    // } else if (color === 'red') {
    //     console.log('stop');
    // } else {
    //     console.log('?????');
    // }


    // let color = prompt('enter color');
    // let isRoadClear = prompt('is road clear?');
    //
    // if (color === 'green' && isRoadClear === 'yes') {
    //     console.log('you can go');
    // } else if (color === 'yellow') {
    //     console.log('wait');
    // } else if (color === 'red') {
    //     console.log('stop');
    // } else {
    //     console.log('?????');
    // }


    // switch ('yellow') {
    //     case 'green':
    //         console.log('go!');
    //         break;
    //     case 'yellow':
    //         console.log('wait');
    //         break;
    //     case 'red':
    //         console.log('stop');
    //         break;
    //     default:
    //         console.log('????');
    // }


    // switch ('green') {
    //     case 'green':
    //     case 'light green':
    //     case 'light blue':
    //     case 'blue':
    //         console.log('go!');
    //         break;
    //     case 'yellow':
    //         console.log('wait');
    //         break;
    //     case 'red':
    //         console.log('stop');
    //         break;
    //     default:
    //         console.log('????');
    // }


    // let conf = confirm('asdf');
    // console.log(conf);
    // let x;
    //
    // if (conf) {
    //     x = 100;
    // } else {
    //     x = 200;
    // }
    // console.log(x);
    //
    // let x = conf ? 100 : 200;
    // console.log(x);


    // let name = prompt('enter you name');
    // if (!!name) {
    //     console.log('....')
    // } else {
    //     name = 'john doe';
    // }
    //
    //
    // let name = prompt('enter you name') || 'john doe';
    // console.log(name);


    // let user = {};
    // console.log(user.age);
    // if (user.age) {
    //     console.log('true');
    // }else {
    //     console.log('false');
    // }


//9. switch
    // let color = prompt('enter color');


    // switch (color) {
    //     case 'green':
    //     case 'yellow':
    //         console.log('go!');
            
    //         break;
    //     case 'red':
    //         console.log('stop');
    //         break;
    //     default:
    //         console.log('????');
    // }


//10. ternary

