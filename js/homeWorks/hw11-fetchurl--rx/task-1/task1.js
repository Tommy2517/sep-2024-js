// // #HmvAfRQM
// // - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

//дуже намудрив але сподобалось. питання та проблеми описав внизу
const dom = {
    getById: (id) => document.getElementById(id),
    add: (block) => document.body.append(block),
    div: () => document.createElement('div'),
    li: () =>   document.createElement('li'),
    ul: () =>   document.createElement('ul'),
}
const main = dom.getById('main');
const urlCarts = 'https://dummyjson.com/carts/';


fetch(urlCarts)
.then(data => data.json())
.then(data => {
    cardReader([...data.carts])
})


function cardReader(arr) {
    

    for (const object of arr) {
let toggler = ''

        // вікно корзини
        const cart  = dom.div();
        cart.classList.add('cart', 'widther')

        // вікно інфи корзини
        const cartInfo = dom.div();
        cartInfo.classList.add('cartInfo')
        
        // вікно пропозицій доданих у корзину
        const products = dom.div();
        products.classList.add('products')

        // інфо одиниці товару
        const content = dom.div();
        content.classList.add('content', 'hidden')
        
        const ul = dom.ul()
        products.append(ul)

        const ulCart = dom.ul()
        cartInfo.append(ulCart)
        // ітеруємо об,єкт корзини
        for (const key in object) {

            // відсортовуємо масиви
            // створюємо та додаємо інфу корзини як список
            if (!Array.isArray(object[key])) {
                const li = dom.li()
                li.innerText = `${key} - ${object[key]}`
                ulCart.append(li)
            }
            else {
                // ітеруємо знадений масив та витягуємо об,єкт
                // створюємо список та наповнюємо назвами товарів
                for (const element of object[key]) {
                    const li = dom.li()
                    li.innerText = element['title']

                    // обробляємо клік по товару та виводимо подробиці
                    li.addEventListener('click',(e) => {
                        //довелось додати костілв для динамiчностi
                        if (e.target === toggler) {
                            cart.classList.toggle( 'widther')   
                            content.classList.toggle('hidden')
                            if (cart.classList.length > 1) { //ще костиль
                                toggler = ''
                            }                            
                        } else{
                            if(!toggler){
                                cart.classList.toggle( 'widther')   
                                content.classList.toggle('hidden')
                                toggler = e.target
                            } else{
                                toggler = e.target
                            } //усі ці іфи дуже негарні кастилі здається можно набагато вишцканіше. колись перероблю
                        }
                        // додаємо опис товару у відповідне вікно 
                        const description = dom.div()
                        description.classList.add('description')
                        const ul = dom.ul()
                        description.append(ul)
                        for (const key in element) {
                            if (key !== "thumbnail") {
                                const li = dom.li()
                                li.innerText = `${key} - ${element[key]}`
                                ul.append(li)
                            }
                        }
                        
                        // додаємо фото товару 
                        const image = dom.div()
                        image.classList.add('image')
                        image.style.backgroundImage = `url(${element["thumbnail"]})`
                        
                        // оновлюємо вікно інфи товару
                        content.innerHTML = ''
                        content.append(description,image)}
                    )

                    // додаємо список обраних пропозицій у відповідне віконце
                    ul.append(li)
                    
                }
            }
        }
        // додаємо інформаційні віконця до вікна корзини 
        cart.append(cartInfo,products,content)
        //додаємо корзину у головний блок сторінки(перший нащадок bоді)
        main.append(cart)
    }
}


//сорі за стилі
// , якщо немае часу то не витрачайте на ці питання ❤

// ..FIXED> кастилі з іфів порішали..
// при переміканні між товарами в середені однієї корзини все норм, але при фокусі на іншій теба тіцяти 2 рази щоб зїявився опис. на що звернути увагу? 


//намагавзя зробити більш динамічний та універсальний обробник обїектів
//щоб автоматично визначались потрібні блоки, кількість, розташування
//щоб можна було застосувати до будь яких обїектів
//але не дотямив)

// const ull = dom.getById('ul')
// ull.addEventListener('click',()=>foo(ull))

// function foo(parent) {
//     console.log(parent);
//     for (const child of parent.children) {
//         child.classList.toggle('hidden')
//     }
    
// }



// function qwe(object,i,j) {
//     for (const element of object) {
//         const ul = document.createElement('ul');
//         ul.addEventListener('click',()=>foo(ul))

        
//         for (const key in element) {
//             if (Array.isArray(element[key])) {
//                 console.log('hi',key);
//                 qwe(element[key],ul,key)
//             }
//             else{
//                 const li = document.createElement('li')
//                 li.innerText = `${key} - ${element[key]}`
//                 ul.append(li)
//             }
//         }
//         // i.append(ul) || dom.add(ul)
//         if (i) {
//             i.append(j,ul)
//         i.style.color = 'gold'
//         }else dom.add(ul)
//     }
// }

// //element[key] === 'object' && !

// const arr = [1,2,3]













