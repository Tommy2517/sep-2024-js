// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
const num = document.createElement('div');
num.style.fontSize = '512px'
num.innerText = 0
document.body.append(num)
if (!localStorage.num) {
    localStorage.setItem('num', '0')
}else{
    let inc = +localStorage.getItem('num')
    // inc++
    localStorage.setItem('num', ++inc)
    num.innerText = `${inc}`;
}
