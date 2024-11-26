// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM
const now = new Date();
let sessions = [];
if (!localStorage.getItem('sessions')) {
    sessions.push(now);
    localStorage.setItem('sessions',JSON.stringify(sessions));
    document.getElementsByTagName('b')[0].innerText = 'Biтаю'
}
else {
    document.getElementsByTagName('b')[0].innerText = 'Знов Biтаю 😊'
    
    sessions = [...JSON.parse(localStorage.getItem('sessions'))];
    sessions.push(now);
    localStorage.setItem('sessions',JSON.stringify(sessions));
}

