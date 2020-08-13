'use strict';
import { v4 as uuidv4 } from 'uuid';
uuidv4();
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

/*
Дз:
1. Создать модуль HTTPRequest, экспортирующий класс HTTPRequest
2. Создать модуль MyAPI, использующий модуль HTTPRequest
и экспортирующий методы для чтения/записи/обновления/добавления по конкретным путям(прим. getTea, setTea ...)
3. Создать и подключить к странице модуль, использующий готовый функционал
*/

data = {
    "drinks.ru/sale/tea": {
        type: 'green',
        area: 'Ceylon',
        amt: 2
    },
    "drinks.ru/sale/coffe": {
        type: 'grain',
        area: 'Kenia',
        amt: 5
    }
};
