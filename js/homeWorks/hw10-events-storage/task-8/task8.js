// #kUSgFqWY
//  Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

console.log(document.forms[0].column.value);

document.forms[0].addEventListener('submit',(e)=>{
    
    document.getElementById('main').innerHTML = ''

    for (let i = 0; i < document.forms[0].row.value; i++) {
        const cardRow = document.createElement('div');
        cardRow.classList.add('card');
        document.getElementById('main').append(cardRow)

        for (let j = 0; j < document.forms[0].column.value; j++) {
            const cardCol = document.createElement('div');
            cardCol.classList.add('card');
            cardCol.innerText = document.forms[0].text.value
            cardRow.append(cardCol)
        }
                
    }
})
