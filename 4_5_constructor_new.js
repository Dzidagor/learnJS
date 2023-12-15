// Функция-конструктор с большой буквы
function User (name) {
    this.name = name;
    this.isAdmin = false;
}

// Вызов только с оператором new
let user = new User("Jack");

function Calculator() {
    this.a = null;
    this.b = null;

    this.read = function() {
        this.a = +prompt("a?", "");
        this.b = +prompt("b?", "");
    };

    this.sum = function () {
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a*this.b
    };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );