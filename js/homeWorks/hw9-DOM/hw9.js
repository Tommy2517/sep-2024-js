//у цих завданнях багато выкористань document.body.append та document.createElement тому захотылось трохи скоротити
const bodyAe = function (params) {
    document.body.append(params);
}
const create = function (params) {
    return document.createElement(params);
}

// #8Nmt60ZT
// - створити блок,
const block = create('div');

// - додати йому класи wrap, collapse, alpha, beta
block.classList.add('wrap', 'collapse', 'alpha', 'beta');

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
block.style.backgroundColor = '#000';
block.style.color = 'white';
block.style.fontSize = 'white';

// - додати цей блок в body.
block.innerText = '123';
bodyAe(block);

// - клонувати його повністю, та додати клон в body.
const blockCopy = block.cloneNode(false);
blockCopy.innerText = 'weq';
bodyAe(blockCopy);

// #OPLI89c9G
// - Є масив:
const navigation = ['Main','Products','About us','Contacts'];
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let ul = create('ul');
bodyAe(ul);
for (const element of navigation) {
   let li = create('li');
   li.append(element);
   ul.append(li);
}
// #jeBqHV525U5
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
for (const element of coursesAndDurationArray) {
    const course = create('div');
    course.append(`${element.title} тривалість - ${element.monthDuration} місяців`);
    bodyAe(course);
}
// Завдання робити через цикли.

// =========================
// #Kx1xgoKy8
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
for (const element of coursesAndDurationArray) {
    
    const title = create('h1');
    title.classList.add('heading');
    title.innerText = element.title;
    
    const paragraph = create('p');
    paragraph.classList.add('description');
    paragraph.innerText = `тривалість - ${element.monthDuration}`;
    
    const item = create('div');
    item.classList.add('item');
    item.append(title, paragraph);
    bodyAe(item)

}
// ==========================



