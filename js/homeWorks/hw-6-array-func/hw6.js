// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
    const findLength = (arr) => {arr.map((item, index) => console.log(index+1,"-а стрінга має довжину",item.length,"символів"))}
    findLength(['hello world', 'lorem ipsum', 'javascript is cool'])

// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
    const lowCaseToUp = (arr) => {
        let newArr = new Array();
        for (const str of arr) {
            newArr.push(str.toUpperCase());
        }
        return newArr
    }
    console.log(lowCaseToUp(['hello world', 'lorem ipsum', 'javascript']))


// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
    let a ='HELLO WORLD'
    let b ='LOREM IPSUM'
    let c ='JAVASCRIPT IS COOL'
    console.log(a.toLowerCase());
    console.log(b.toLowerCase());
    console.log(c.toLowerCase());

// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
    let str = ' dirty string   '
    let clearStr = str.trim()
    console.log(str.length, clearStr.length);

// #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
    const stringToarray = (str) => {
        let lit = '';
        let arr = [];
        for (const item of str+' ') {
            if (item !== ' ') lit += item;
            else arr.push(lit), lit = '';
            // item !== ' ' ? lit += item : (arr.push(lit), lit = '');
        }
        return arr
    }

    console.log(stringToarray('Ревуть воли як ясла повні'))
    console.log('Ревуть воли як ясла повні'.split(' '));

// #Rbr5kEQ
// - є масив чисел [10,8,-7,55, 987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
    let arrNum = [10,8,-7,55, 987,-1011,0,1050,0];
    arrNum.map(obj => console.log(obj.toString())) //or obj+''

// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3];

    function sortNums(array, direction) {
        try {
            if (direction === 'ascending') {
            return array.sort((a,b) => a - b)
            }
            else if (direction === 'descending') {
            return array.sort((a,b) => b - a)
            }
            else {
                throw new Error("incorrect choise. enter 'ascending' or 'descending'");
                
            }
        } catch (e) {
            console.log(e.message);
            return array
        }
    }
    console.log(sortNums(nums,'ascending')); // [3,11,21]
    console.log(sortNums(nums,'descending')); // [21,11,3]
    console.log(sortNums(nums,'lsdajnkj'));// [21,11,3] + error

// ==========================
// #yo06d74c1C
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//  -- відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort((a,b) => b.monthDuration - a.monthDuration);
console.log(coursesAndDurationArray);
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
coursesAndDurationArray.map((item, index) => item.id = index + 1)
//  =========================
//  #bolvdlhP
//  описати колоду карт (від 6 до туза без джокерів)
let cards = []
const cardSuit = ['spade', 'diamond','heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'ace','jack','queen','king']
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
for (const suit of cardSuit) {
    for (const value of values) {
        const card = {cardSuit: suit, value: value}
        if (card.cardSuit === 'diamond' || card.cardSuit === 'heart') {
            card.color = 'red'
        }
        else {
            card.color = 'black'
        }

        cards.push(card)
    }
}
console.log(cards);


//  - знайти піковий туз
console.log(cards.find(card => card.cardSuit === 'spade' && card.value === 'ace'));
//  - всі шістки
console.log(cards.filter(card => card.value === '6'));
//  - всі червоні карти
console.log(cards.filter(card => card.color === 'red'));
//  - всі буби
console.log(cards.filter(card => card.cardSuit === 'diamond'));
//  - всі трефи від 9 та більше
console.log(cards.filter(card => card.cardSuit === 'clubs' && (card.value.length > 1))); //а ось i моглиб) 9:27 #bolvdlhP



// =========================

// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

    // console.log(users.reduce((accumulator, user) => {
    //     if (user.status) {
    //         accumulator.statT.push(user);
    //     } else {
    //         accumulator.statF.push(user);
    //     }
    //     return accumulator;
    // }, {statT: [], statF: []}));
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'

    const suits = cards.reduce((acc, card) => {
        switch (card.cardSuit) {
            case 'spade':
                acc.spades.push(card)
            break;
            case 'diamond':
                acc.diamonds.push(card)
            break;
            case 'heart':
                acc.hearts.push(card)
            break;
            case 'clubs':
                acc.clubs.push(card)
            break;
        
            default:
                break;  
        }        
        return acc
    },{spades:[],diamonds:[],hearts:[],clubs:[]}
)
console.log(suits);

// =========================
// #4LJn7zBx
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
const sassModules = coursesArray.filter(course => course.modules.find(value => value === 'sass'))
console.log(sassModules);
// --написати пошук всіх об'єктів, в яких в modules є docker
const dockerModules = coursesArray.filter(course => course.modules.find(value => value === 'docker'))
console.log(dockerModules);
