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

        const getData = path => new Promise((resolve, reject) => {
            const result = data[path];
            setTimeout(resolve, 5000, result);
        });

class HTTPRequest {
    constructor (basePath = '') {
        basePath = this.basePath;
    };
    path = '';
    async get(path) {
        const response = await getData(basePath+path);
        return response
    };
};

new HTTPRequest('drinks.ru/sale/').get('tea');