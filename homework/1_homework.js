'use strict';

/*
Д\З 
Создать массив из двух объектов "автомобиль", содержащих следующие поля:

кол-во топлива
макс скорость
объем двигателя
ширина
длина
марка

Используя интерполяцию последовательно вывести в консоль
свойства обоих объектов, значения свойств получать, обращаясь к ним как в ассоциативном массиве. 

Изменить значения двух любых свойств каждого из автомобилей, обратившись к автомобилям через массив по номеру, а к соответствующим полям через оператор . (точка)

Снова вывести объекты на экран
*/

let car1 = {
    fuelAmt: 40,
    speedMax: 220,
    engineVolume: 300,
    objWidth: 1.6,
    objLength: 2,
    brand: 'Шкода'
};
// а можно изначально в объектах не указывать значения ключей?

// не вспомнила, как использовать шаблон объекта для создания другого объекта
// хотела сделать один прототип и из него получить 2 объекта
let car2 = {
    fuelAmt: 33,
    speedMax: 210,
    engineVolume: 320,
    objWidth: 1.5,
    objLength: 2.2,
    brand: 'Рено'
};


let carPark = [car1, car2];

// обращаюсь к значениям свойств как в ассоциативном массиве
let litersOfGasoline = car1['fuelAmt'];
let kmPerHour = car1['speedMax'];
let cubeSantimeters = car1['engineVolume'];
let widhtMeters = car1['objWidth'];
let lengthMeters = car1['objLength'];
let carbrand = car1['brand'];

// долго не получалась интерполяция, — не уяснила сразу, что кавычки `` должны быть именно такие. Думала, это для переноса текста
// это Ок, что я использую интерполяцию для вывода в консоль?
console.log(`car 1 description 
Количество топлива ${litersOfGasoline} л,
Максимальная скорость ${kmPerHour} км/ч,
Объем двигателя ${cubeSantimeters} куб. см,
Ширина ${widhtMeters} м,
Длина ${lengthMeters} м,
Марка ${carbrand}`
);

// переиспользую переменные, это нормально?)
litersOfGasoline = car2['fuelAmt'];
kmPerHour = car2['speedMax'];
cubeSantimeters = car2['engineVolume'];
widhtMeters = car2['objWidth'];
lengthMeters = car2['objLength'];
carbrand = car2['brand'];

console.log(`car 2 description 
Количество топлива ${litersOfGasoline} л,
Максимальная скорость ${kmPerHour} км/ч,
Объем двигателя ${cubeSantimeters} куб. см,
Ширина ${widhtMeters} м,
Длина ${lengthMeters} м,
Марка ${carbrand}`
);

carPark[0].brand = 'Москвич';
carPark[0].engineVolume = 150;

carPark[1].brand = 'Тойота';
carPark[1].objLength = 2.3;

// как я поняла, нужно просто вывести объекты
console.log(car1);
console.log(car2);