// объекты


let user = {     // объект
    name: "John",  // под ключом "name" хранится значение "John"
    age: 30        // под ключом "age" хранится значение 30
};

console.log(user.name, 'мое имя');
console.log(user.age, 'мой возраст');
console.log(user['name'], 'мое имя')


let sameUser = user;

// console.log(sameUser === user, 'что мы равны');

// изменение обьекта обьявленного как константа
user.name = 'Leon'
console.log(user)

let clone = {}; // новый пустой объект

// давайте скопируем все свойства user в него
for (let key in user) {
    clone[key] = user[key];
}
// console.log(clone === user, 'что мы равны');

// методы объектов

 user.sayHello = function () {console.log('Привет всем')};
// console.log(user);
user.sayHello();

// user = {     // объект
//     name: "John",  // под ключом "name" хранится значение "John"
//     age: 30,        // под ключом "age" хранится значение 30
//     sayHi() {
//         console.log('Привет!')
//     }
// };
// user.sayHi();


// использование this
 user = {     // объект
    name: "John",  // под ключом "name" хранится значение "John"
    age: 30,        // под ключом "age" хранится значение 30
    sayHi() {
        console.log(`Привет ${user.name}!`)
    }
};
// user.sayHi();



// примеры использования обьектов в коде автотестов
// export const bookOfferpack =
//     {
//         checkin: 'random',
//         count: 2,
//         location: 'Тула',
//         hotel: 'Test Hotel (Do not book)',
//         payment: 'refundable',
//     };


