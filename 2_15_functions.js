// Объявление функции
function printHello(username) {
    console.log(`Hello ${username}`)
}

// Значение по умолчанию
function printHelloUser(user = "Неизвестный пользователь") {
    console.log(`Привет ${user}`)
}

function checkAge1(age) {
    return (age > 18) ? true : confirm('Родители разрешили?')
}

function checkAge2(age) {
    return (age > 18) || confirm('Родители разрешили?')
}

function min(a, b) {
    return a > b ? a : b;
}

function pow(x, n) {
    return x**n;
}

function isNatural(x) {
    return (x % 1 === 0) && (x >= 1);
}

function calcNumberPow () {
    let x = prompt("Insert x", "");
    let n = prompt("Insert n", "");

    if (isNatural(n)) {
        alert(pow(x, n));
    } else {
        alert("n должно быть натуральным!")
    }
}

calcNumberPow();