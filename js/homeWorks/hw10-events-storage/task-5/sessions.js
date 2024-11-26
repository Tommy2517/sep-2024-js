JSON.parse(localStorage.getItem('sessions')).forEach((element,index) => {
    
    const title = document.createElement('h3');
    title.innerText = `session # ${index}`
    
    const p = document.createElement('p')
    p.innerText = element;
    
    const card = document.createElement('div')
    card.classList.add('card')
    card.append(title,p)

    document.getElementById('sessions').append(card)
});