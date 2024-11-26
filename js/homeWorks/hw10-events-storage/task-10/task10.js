// #NKB0tgWIK1G 
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
const lorem = document.getElementById('hundre')
const arr = lorem.innerText.split(' ')
lorem.remove()

const main = document.getElementById('main')
let counter = 0;
if (!main.children.length) {
    for (let i = counter; i < counter + 10; i++) {
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerText = arr[i]+i
        main.append(card)
    }
    counter = 10;
}

function name1(arr) {
    main.innerHTML =''
    for (let i = counter; i < counter + 10; i++) {
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerText = arr[i]+i
        main.append(card)
        
    }
    
}
function name2(arr) {
    main.innerHTML =''
    for (let i = counter; i < counter + 10; i++) {
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerText = arr[i]+i
        main.append(card)
    }
}

const prew = document.getElementById('prew');
const next = document.getElementById('next');
let togle = 0  // хз шо це але працює вже запіздно і мозок щось відумує сам я вже його е розумію) 
next.onclick = (e) => {
    togle = 1
    if (!togle) {
        counter+=10
    }
    if (counter <= 90) {
        name1(arr)
        counter+=10
    }
}
prew.onclick = (e) => {
    if (togle) {
        counter-=10
    }
    togle=0 //мабуть перевіряю шо тицяли перед цим і воно допомогає вірішити проблему, коли тицяєш вперед а потім щоб показало попередні 10 блоків преба тицьнути 2 рази
    if (counter >= 10) {
        counter-=10
        name2(arr)
    }
}


