class Equipment {
    constructor (name, power) {
        this.name = name;
        this.power = power;
        this.works = false;
    };

    plugIn () {
        console.log(this.name + ' is plugged')
        this.works = true;
    };

    plugOff () {
        console.log(this.name + ' is unplugged')
        this.works = false;
    };
}


class Computer extends (Equipment) {
    constructor (name, power) {
        super(name, power);
        this.category = 'Computer';
    };
}


class Notebook extends (Equipment) {
    constructor (name, power) {
        super(name, power);
        this.category = 'Notebook';
    };
}


const homePC = new Computer('Hp', 450);
const homeNotebook = new Notebook('Lenovo', 100);

homePC.plugIn();
homeNotebook.plugOff();

console.log(homePC);
console.log(homeNotebook);
