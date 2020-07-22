'use strict';
// Operators
let a = 10;
let b = 16;
// Бинарные операторы
console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a*b);
console.log(9%10); // деление нацело
console.log(2**10); //возведение в степень
let c = a+b;

// Унарные операторы
console.log(+"15"); // унарный плюс - переводит строку в число
console.log(c++); // увеличение значения на единицу, в консоли стартовое значение 
console.log(c--); // уменьшение значения на единицу, в консоли стартовое значение 
console.log(--c); // уменьшение значения на единицу, в консоли значение после выполнения операции
console.log(++c); // увеличение значения на единицу, в консоли значение после выполнения операции
let r = r + 5; //ниже альтернативные способы записи этой и подобных операций
r += 5;
r -= 5;
r *= 5;
r /= 5;

// Тернарный оператор
let a = 9;
a == 10 ? console.log("Hello") : console.log("Bye");

// Логические операторы
let l1 = true;
let l2 = false;

console.log(l1 && l2); // И
/*
    a && b = c
    0    0   0
    0    1   0
    1    0   0
    1    1   1
 */
console.log(l1 || l2); // ИЛИ
/*
    a && b = c
    0    0   0
    0    1   1
    1    0   1
    1    1   1
 */
console.log(!l2); // НЕ
/*
    !a = c
    0    1
    1    0
*/

// Операторы сравнения

console.log(l1 == l2); // равенство
console.log(l1 === l2); // строгое равенство
console.log(l1 > l2); // больше
console.log(l1 <= l2); // меньше или равно
console.log(l1 != l2); // не равно

// Операторы побитовые
console.log(11 | 15); // Побитовое или
console.log(11 & 15); // Побитовое и
console.log(11 ^ 15); // XOR побитовое исключающее или (сложение по модулю 2)
console.log(~15); // Побитовое НЕ
let o = 1;
o <<= 1; // Побитовый сдвиг влево на 1 разряд (умножение на 2)
o >>= 1; // Побитовый сдвиг вправо на 1 разряд (деление на 2)

// Условные операторы

/*
    if (<логическое выражение>) {
        <набор команд>
    } else if (<доп условия>) {
        <набор команд>
    } else {
        <набор команд>
    }
 */

if (a==10) {
    console.log("Hello")
} else if (a==9) {
    console.log("Bye")
} else {
    console.log("Goodbye")
}

    switch (a) {
        case 10:
            console.log("Hello");
            break;
        case 9:
            console.log("Bye");
        default:
            console.log("Goodbye");
    }

// Операторы цикла

/*
for(<начальное условие>; <условие выполнения>; <шаг>) {
    <тело цикла>
}
 */

let counter = 0;
for (counter = 0; counter<10; counter++) {
    console.log(counter);
}

while (counter < 10) {      // Цикл while с предусловием
    console.log(counter);
    counter++;
}

do {                        // Цикл while с постусловием
    console.log(counter);
    counter++;
} while (counter<10);
