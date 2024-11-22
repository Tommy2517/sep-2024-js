// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
const obj7 = {
    name:'my name is',
    age:33,
    skills:['js','html','c++'],
    info: function() {return this},
    cloneFunc: function(){console.log('cloneFunc');
    },
    wife:{
        name:'Zayka',
        wifeInfo: function() {return this},
        parents: {
            mom:'Mama',
            dad:'Papa',
            parentsInfo: function() {return (this)}
        }
    },
    popo:{
        name:'qwe',
        status:true,
        nums:[1,2,3,4]
    }
}

const clone = function(obj) {
    if (obj && typeof obj !== null) {
        let clone = JSON.parse(JSON.stringify(obj))
        const cloneFunc = (innerObj,cloneObj)=>{
            for (const item in innerObj) {
                if (typeof innerObj[item] === 'function') {
                    cloneObj[item] = innerObj[item].bind(cloneObj)
                }
                else if(typeof innerObj[item] === 'object' && !Array.isArray(innerObj[item])){
                        cloneFunc(innerObj[item],cloneObj[item])                        
                    }
            }
        }
        cloneFunc(obj,clone)
        return clone
    }
    else{
        return console.error('wrong type');
        
    }
}
let newClone = clone(obj7)
newClone.name = 'momo'
console.log( newClone,obj7);
console.log(newClone.wife.parents.parentsInfo())


// #iz6emEsP2BA
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
coursesAndDurationArray = coursesAndDurationArray.map((itm,index) => ({...itm,id:index+1}))
console.log(coursesAndDurationArray);

// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
// Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції
