const calculator = {
    a: null,
    b: null,
    read: function () {
        this.a = +prompt("a?", "");
        this.b = +prompt("b?", "");
    },
    sum: function () {
        return this.a + this.b;
    },
    mul: function () {
        return this.a*this.b
    }
}

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
        },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { // показывает текущую ступеньку
        alert( this.step );
        return this;
    }
};

ladder.up().up().down().showStep().down().showStep();
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());
