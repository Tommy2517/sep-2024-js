// #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//  зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
const now = new Date()
console.log(now.getTime());

const uah = document.createElement('div');
uah.style.fontSize = '64px'
document.body.append(uah)

if (!localStorage.uah) {
    uah.innerText = 100
    localStorage.setItem('uah', uah.innerText)
    localStorage.setItem('time', now.getTime())
}else{
    
    const oldTime = localStorage.getItem('time')
    const inc = +localStorage.getItem('uah')
    uah.innerText = `${inc} - UAH`;
    
    if (+oldTime + 10000 <= now.getTime()) {
        localStorage.setItem('time', now.getTime())
        // let inc = +localStorage.getItem('uah')
        localStorage.setItem('uah', inc+10)
        uah.innerText = `${inc+10} - UAH`;
    }
}