
class Animal {
    constructor(name) {
        this._speed = 0;
        this._name = name;
    }

    get getName() {
        console.log(`Привет, я животное по имени ${this._name}`)
        return this._name;
    }

    run(speed) {
        this._speed = speed;
        console.log(`${this._name} бежит со скоростью ${this._speed}.`);
    }

    stop() {
        this._speed = 0;
        console.log(`${this._name} стоит неподвижно.`);
    }

    hide() {
        console.log(`${this._name} не умеет прятаться!`);
    }
}

class Rabbit extends Animal {
    static ageOfLife = 25;
    constructor(name, earLength) {
        super(name);
        this.earLength = earLength;
    }

    get getName() {
        if(!this._name) {
            console.log('Для кролика не задано имя')
        }
        console.log(`Я кролик по имени ${this._name}`);
        return this._name;
    }


    set setName(name) {
        if(!name) {
            throw Error('Не задано имя, нужно задать')
        }
        this._name = name;
    }

    hide() {
        console.log(`${this._name} прячется!`);
    }

    showEarLength() {
        console.log(`${this._name} имеет уши длиной ${this.earLength}`);
    }

    static sayHrum() {
        console.log('Hrum hrum')
    }

}

//const rabbitRob = new Rabbit('Mike', 50);
// rabbitRob.run(1000);
// rabbitRob.hide();
// rabbitRob.showEarLength();
// rabbitRob.getName;

let rabbitNoName = new Rabbit('', 10);
console.log(rabbitNoName._name, 'так меня зовут')
console.log(rabbitNoName.getName, 'и тут тоже мое имя');
console.log(Rabbit.ageOfLife);


// console.log(Rabbit.ageOfLife, "лет я проживу")
 Rabbit.sayHrum()

/* "Домашнее задание"
Придумать обьект с минимум 4 полями и вывести в консоль лог значение всех полей, обратиться к полям по разному
 - через . и через []

Класс - написать три класса - класс родитель абстрактный и 2 класса наследника от 1 родителя, обязательно:
реализовать конструкторы в родителе и наследниках (не забыть в наследниках про super)
в одном классе наследнике переопределяется метод родителя (метод в родителе и ребенке содержит консоль лог, чтобы легко проверить)
создать обьект класса наследника, вызвать переопределенный метод
создать обьект второго класса наследника вызвать метод, определенный в родителе
*/
