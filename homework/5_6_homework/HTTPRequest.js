'use strict';

const createItem = (type, area, amt) => ({type, area, amt});
const getData = path => new Promise((resolve, reject) => {
    const result = data[path];
    setTimeout(resolve, 5000, result);
});

class HTTPRequest {
    constructor(basePath = '') {
        this.basePath = basePath
    }
    async get(path = '') {
        const response = await getData(this.basePath + path);
        console.log(response);
        return response
    }
    async post(path= '', body = {}) {
        const result = await getData(this.basePath + path);
        if (result !== undefined) {
            console.log('такой напиток уже добавлен')
        }
        else {
            const newItem = createItem(body);
            result[this.basePath + path] = newItem
        }
        return result
    }
    async put(path = '', body = {}) {
        let result = await getData(this.basePath + path);
        if (result === undefined) {
            console.log('такой напиток еще не добавлен');
        } else {
            result = {...result, ...body};
        }
        return result
    }
    async deleteData(path = '', body= {}) {
        let result = await getData(this.basePath + path);
        if (result === undefined) {
            console.log('такой напиток еще не добавлен');
        }
        else {
            delete result[this.basePath + path];
        }
        return result;
    }
};


export default {
    HTTPRequest
}