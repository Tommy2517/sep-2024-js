// #whXxOBlYS0H
// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

const url = 'https://dummyjson.com/recipes'
fetch(url)
.then(value => value.json())
.then(value => {
    const recipes = [...value.recipes]
    
    const main = document.createElement('div');
    document.body.append(main)
    
    for (const recip of recipes) {


        const ulrecipeInfo = document.createElement('ul');
        main.append(ulrecipeInfo)

        for (const key in recip) {
            const liRecip = document.createElement('li')
            
            if (Array.isArray(recip[key])) {
                const ingridients = document.createElement('ul')
                ingridients.id = 'ingrid'
                ingridients.classList.add('hidden')

                if (key === "ingredients") {
                    ingridients.append('Ingridients')
                    ingridients.onclick = ()=>{
                        ingridients.classList.toggle('hidden')
                        console.log(ulrecipeInfo);
                        
                    } 
                    for (const ingridient of recip[key]) {

                        const liIngridient = document.createElement('li')
                        liIngridient.innerText = ingridient
                        ingridients.append(liIngridient)
                    }   
                }
                else if(key === 'instructions'){
                    ingridients.append('Recipe') 
                    ingridients.onclick = ()=>{
                        ingridients.classList.toggle('hidden')
                        console.log(ulrecipeInfo);
                        
                    }
                    for (const ingridient of recip[key]) {

                        const liIngridient = document.createElement('li')
                        liIngridient.innerText = ingridient
                        ingridients.append(liIngridient)
                    }
                }

                ulrecipeInfo.append(ingridients)
            }
            
            else{
                liRecip.innerText = `${key} - ${recip[key]}`
                ulrecipeInfo.append(liRecip)
            }
            
        }

    }
}
)