// Функция - это значение
let sayHi = function() {
    alert("Hello")
};

// Коллбэки
// Question - текст вопроса, yes, no - функции
function ask (question, yes, no) {
    if (confirm(question)) {
        yes();
    } else {
        no();
    }
}
function answerYes() {
    alert("YES");
}
function answerNo() {
    alert("NO");
}

// Анонимные функции
ask(
    "Are u gay?",
    function () {alert("YES")},
    function () {alert("NO")},
    )

// function expression создается, когда выполнение доходит до него, function declaration может быть вызвана раньше чем объявлена
// function expression 