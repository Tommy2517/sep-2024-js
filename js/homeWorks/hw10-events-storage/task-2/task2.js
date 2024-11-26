// #j693ca8
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
const main = document.getElementById('main');
document.body.append(main);
const wind = document.createElement('div')
wind.id = 'wind';
wind.innerText = 'how old are you?'
main.append(wind);

const form = document.createElement('form');

const input = document.createElement('input');

const btn = document.createElement('button');
btn.innerText = 'try';

btn.onclick = (e) => {
    const tableDOM = document.getElementById('wind')
    e.preventDefault();
    const value = +input.value
    if (typeof value === 'number' && !isNaN(value)) {
        if (value >= 18) tableDOM.innerText = `you are ${value} year old`;
        else tableDOM.innerText = `${value} you are not old enough. Try later`;
        
    }
    else tableDOM.innerText = 'enter only numbers'
}

form.append(input,btn);
main.append(form)

// function getInput(e) {
//     e.preventDefault();
//     console.log(e);
    
// }

// function create(params) {
//     return document.createElement(params);
// }
// function appEnd(params) {
//     document.body.append(params);
// }
// function getById(params) {
//     return document.getElementById(params)
// }