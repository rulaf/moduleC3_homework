function Equipment(name, power) {
    this.name = name;
    this.power = power;
    this.works = false;
};

Equipment.prototype.plugIn = function() {
    console.log(this.name + ' is plugged')
    this.works = true;
};

Equipment.prototype.plugOff = function() {
    console.log(this.name + ' is is unplugged')
    this.works = false;
};


function Computer(name, power) {
    this.name = name;
    this.power = power;
    this.works = true;
}


function Notebook(name, power) {
    this.name = name;
    this.power = power;
    this.works = false;
}


Computer.prototype = new Equipment();
Notebook.prototype = new Equipment();


const homePC = new Computer("HP", 450);
const homeNotebook = new Notebook("Lenovo", 100);


homePC.plugIn();
homeNotebook.plugOff();


console.log(homePC);
console.log(homeNotebook);
