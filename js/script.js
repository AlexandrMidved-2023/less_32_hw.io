'use strict';

// 2 Створи функцію, яка буде виводити кількість переданих їй аргументів.

function sum_3(...args) {
    let sum = 0;

    console.log(args.length);

    for (let i = 0; i < args.length; i++) {
        sum += (args[i]);
    }

    console.log(sum);
}

sum_3(1, 2);


// 3 .    Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше < друге; 
// 1 - якщо перше > друге; 
// 0 - якщо числа ===.


function comparisonTwoNumb() {
    let num_1 = +prompt('first', '');
    let num_2 = +prompt('second', '');

    if (num_1 < num_2) {
        alert(`-1`);
    } else if (num_1 > num_2) {
        alert(`1`);
    } else if (num_1 === num_2) {
        alert(`0`);
    } else {
        alert(`Непавильно ввів`);
    }
}
let btn_comparison = document.querySelector('#btn_comparison');
btn_comparison.addEventListener('click', comparisonTwoNumb);



// 4. Напиши функцію, яка обчислює факторіал переданого їй числа.

let factorialNumb = factorialNum => {
    factorialNum = +prompt('Введи число для знаходження факторіала');

    function factorial(n) {
        return (n !== 1) ? n * factorial(n - 1) : 1;
    }
    alert(factorial(factorialNum));
}

let btnFactorial = document.querySelector('#btn_factorial');
btnFactorial.addEventListener('click', factorialNumb);

// 5. Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

let joinNumb = joinNumber => {
    let num_1 = +prompt('Введи перше число');
    let num_2 = +prompt('Введи друге число');
    let num_3 = +prompt('Введи третье число');

    function join() {
        return ('' + num_1 + num_2 + num_3);
    }
    alert(join(joinNumber));
}

let btnJoinNumb = document.querySelector('#btn_joinNumb');
btnJoinNumb.addEventListener('click', joinNumb);

// 5.  Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

// function squareAreaRectangle() {
//     let sideA = +prompt('first', '');
//     let sideB = +prompt('second', '');
//     let sumAB = 0;
//     if (sideA > 0 && sideB > 0) {
//         lsumAB = 
//         alert(lsumAB);
//     } else if (sideA > sideB) {
//         alert(`1`);
//     } else if (num_1 === num_2) {
//         alert(`0`);
//     } else {
//         alert(`Непавильно ввів`);
//     }
// }