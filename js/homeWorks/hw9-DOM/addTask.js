// =========================
const append = function(params) {
    document.body.append(params);
}

const create = function(params) {
    return document.createElement(params);
}
// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
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


// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
const main = create('div')
main.style.display = 'flex';
main.style.justifyContent = 'center';
main.append(cardCreator(coursesArray))
append(main)


function cardCreator(obj){
    const list = create('div');
    list.style.border = 'solid 2px'
    list.style.padding = '20px'
    list.style.width = '800px'

    for (const element of obj) {
        const card = create('div');
        card.style.border  = 'solid 2px';
        card.style.borderColor = 'red';
        card.style.marginBottom = '20px';
        card.style.padding = '20px';
        card.classList.add('q1')
        list.append(card);
        
        const title = create('h2');
        title.innerText = element.title;
        title.style.border = 'solid 2px';
        title.style.display = 'flex';
        title.style.justifyContent = 'center';

        card.append(title);

        const details = create('h3');
        details.style.display = 'flex';
        // details.style.border = 'solid 2px';
        card.append(details);

        
        const month = create('div');
        month.innerText = `тривалість - ${element.monthDuration} місяців`;
        month.style.border = 'solid 2px'
        month.style.padding = '0px 20px'
        details.append(month)
        
        const hours = create('div');
        hours.innerText = ` загальна кількість годин - ${element.hourDuration}`;
        hours.style.border = 'solid 2px'
        hours.style.marginLeft = '20px'
        hours.style.padding = '0px 20px'

        details.append(hours)



        const modules = create('ul');
        modules.style.border = 'solid 2px';
        modules.classList.add('q2')
        card.append('Modules')
        card.append(modules)
        for (const item of element.modules) {
            const module = create('li');
            module.classList.add('q3')
            module.innerText = item;
            modules.append(module);
        }
    }
    return list
}

    


// ------------------



// створити три блоки з різним текстовим контентом. зробити так, щоб всі блоки мали висоту найбільшого з них.
//текст для блоків
const textes = [
    'створити три блоки з різним текстовим',
    'створити три блоки з різним текстовим контентом. зробити так, щоб всі блоки мали висоту найбільшого з них.',
    'створити три блоки з різним текстовим контентом. зробити так, щоб всі'
]

//ящик для блоків
const blocks = create('div');
blocks.style.display = 'flex'
blocks.style.gap= '20px'
blocks.style.alignItems = 'flex-start'  //якщо це прибрати блоки автоматично будуть мати висоту найбільшого
append(blocks)

//додаємо блоки
for (const element of textes) {
    const block = create('div');
    block.classList.add('block')
    block.style.backgroundColor = 'gray'
    block.style.width = '200px'
    block.innerText = element
    blocks.append(block)
}


const items = [...document.querySelectorAll('.block')];
function qwer(params) {
    let maxH = 0;
    params.map(item => {
        if (item.offsetHeight > maxH) maxH = item.offsetHeight
    })
    return maxH;
}

document.querySelectorAll('.block').forEach(item => {
    item.style.height = `${qwer(items)}px`; //робить всi блоки однаковi по висотi
})
qwer(items)


//завдання з вiдео
// https://www.loom.com/share/be2a73928a6c425898172aa08dd7dc16?sid=f230dc44-a649-46b9-aa01-f97d7d40c00b
