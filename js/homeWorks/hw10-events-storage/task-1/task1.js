// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//API
function create(params) {
    return document.createElement(params);
}
function appEnd(params) {
    document.body.append(params);
}
function getById(params) {
    return document.getElementById(params)
}

const button = create('button')
button.innerText = 'toggle'
appEnd(button)

const text = create('div');
text.classList.add('text')
text.id = 'text';
appEnd(text)

button.onclick = ()=>{
    if (getById('text')) {
        getById('text').remove()
    }
    else{
        appEnd(text)}
}


// text.style.width = '50px';
// text.style.height = '50px';
// text.style.background = 'purple';


