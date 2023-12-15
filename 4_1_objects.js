const user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";

delete user.name;


const isEmpty = (obj) => {
    for (let prop in obj) {
        return false
    }
    return true
}

// console.log(isEmpty(user));

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
// let sum = 0;
//
// for (let prop in salaries) {
//     sum += salaries[prop];
// }
// console.log(sum)

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let prop in obj) {
        if (isNumeric(obj[prop])) {
            obj[prop] *= 2;
        }
    }
}

function isNumeric(value) {
    return typeof(value) === "number"
}

multiplyNumeric(menu)
console.log(menu)