// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

const inputKG = document.createElement('input')
inputKG.placeholder = 'KG'
inputKG.type = 'number'
inputKG.id = 'inputKG'
document.getElementById('kg').append(inputKG)

const inputFUN = document.createElement('input')
inputFUN.placeholder = 'FUNTS'
inputFUN.type = 'number'
inputFUN.id = 'inputFUN'
document.getElementById('funt').append(inputFUN)

inputKG.addEventListener('input',()=>{
    inputFUN.value = +(inputKG.value * 2.20462)

})

inputFUN.addEventListener('input',()=>{
    inputKG.value = +(inputFUN.value / 2.20462)
})
