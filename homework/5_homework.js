'use strict';
/*
Создать класс HTTPRequest, содержащий поля и методы
basePath - по умолчанию ""

async get(path) - асинхронный метод, получающий данные из объекта data по ключу basePath+path (такой же как getData)

async post(path, body) - асинхронный метод для создания новых данных в объекте data с ключом basePath+path ( прим: data[basePath+path] = body) Если такой ключ в объекте уже есть, то вывести в консоль сообщение об этом.

async put(path, body) - то же что и post , но не может создавать новую пару ключ-значение, меняет значения только у уже определённых свойств объекта data

async deleteData(path) - асинхронный метод, удаляющий значение в объекте data по ключу basePath+path (прим delete data[basePath+path])

Пример 
data = {
          “lib.ru/authors/Dante” : {
                   name: “Dante”,
                   surname: “Alighieri”,
                   birth: 1265
           }
}

basePath будет lib.ru/authors/
path будет Dante


Придумать свой объект data с ключами с одинаковым началом(basePath)

Создать экземпляр класса HTTPRequest с таким basePath

Используя методы экземпляра :
1 Добавить новые данные в data
2 Получить их и вывести в консоль
3 Изменить данные в data
4 Получить изменённые и вывести в консоль
5 Удалить данные
*/

data = {
    "coffetea.ru/sale/tea": {
            type: 'green',
            area: 'Ceylon',
            amt: 2
        },
    "coffetea.ru/sale/coffe": {
            type: 'grain',
            area: 'Kenia',
            amt: 5
        }
};



class HTTPRequest {
    constructor (basePath = '') {
        basePath = this.basePath;
    }
    async get(path) {
        const getData = path => new Promise((resolve, reject) => {
            const result = data[path];
            setTimeout(resolve, 5000, result);
        });
        const response = await getData(basePath+path);
        return response;
    };
    async post(path, body) {
        const data = get(path);
        const body = data[basePath+path];
        if
    };
    async put(path, body) {};
    async deleteData(path) {};
};
