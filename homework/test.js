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
        this.basePath = basePath;
    }
    async get(path = '') {
        const response = await getData(this.basePath+path);
        console.log(response);
        return response;
    }
}

const myAPI = new HTTPRequest('drinks.ru/sale/');

const getTea  = async () => {
   const result = await myAPI.get('tea');
   console.log(response);
};
getTea();
