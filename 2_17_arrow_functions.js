// Объявление стрелочной функции
let sum = (a, b) => {
    return a + b;
}

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
    () => alert("Вы согласились!"),
    () => alert("Вы не согласились")
);