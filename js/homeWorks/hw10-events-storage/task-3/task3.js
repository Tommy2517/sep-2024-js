// #ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
const main = document.createElement('div')
main.id = 'main'
document.body.append(main);


const form = document.createElement('form');
form.id = 'form';

const btn = document.createElement('button');
btn.id = 'btn';
btn.innerText = 'send';
form.append(btn)

main.append(form)

for (const element of ['name','surname','age']) {
    const input = document.createElement('input');
    input.id = element;
    input.placeholder = `${element}`
    input.required = 'true'
    if (input.id === 'age') input.type = 'number'
    form.append(input)
}

const userBlock = document.createElement('div');
userBlock.classList.add('userBlock');

form.addEventListener('submit', (e) => {
    const block = userBlock.cloneNode(false);
    block.innerText = `user - ${document.querySelectorAll('.userBlock').length+1}`
    main.append(block);

    e.preventDefault();

    for (const element of document.getElementById('form')) {
        switch (element.id) {
            case 'name':
                const name = document.createElement('h3')
                name.innerText = `name - ${element.value}`
                block.append(name)
                break;
                case 'surname':
                const surname = document.createElement('h3')
                surname.innerText = `surname - ${element.value}`
                block.append(surname)
                break;
                case 'age':
                const age = document.createElement('h3')
                age.innerText = `age - ${element.value}`
                block.append(age)
                break;
            default:
                break;
        }
        element.value = ''
    }
})