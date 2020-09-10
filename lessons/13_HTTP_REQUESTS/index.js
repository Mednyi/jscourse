'use strict';
/*
Реализовать добавление, фильтрацию, удаление, редактирование товаров. По клику на buy - увеличивать счётчик товаров в корзине.
*/
let products = [
    {
        productName: 'Suspendisse potenti',
        productDescription: 'Suspendisse potenti. Nullam vehicula elit ac purus ullamcorper finibus.'
    },
    {
        productName: 'Integer placerat',
        productDescription: 'Integer placerat sollicitudin odio, sed molestie tortor auctor nec.'
    }
];

class Component {
    constructor(data = {}) {
        this.data = data;
        // Переписываем свойство methods результатом выполнения функции methods, возвращающей новый объект
        // методов, определенных в дочернем классе. Таким образом теперь methods - конкретный объект (синглтон) с методами, а не функция
        this.methods = this.methods();
        Object.keys(this.methods).forEach(methodName => this.methods[methodName] = this.methods[methodName].bind(this));
    }
    template () {return ''}
    onRender () {}
    render () {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = this.template();
        if (this.$el) {
            this.$el.innerHTML = wrapper.firstElementChild.innerHTML
        } else {
            this.$el = wrapper.firstElementChild
        }
        wrapper.remove();
        this.onRender();
        return this.$el
    }

}
class BitcoinView extends Component {
    template () {
        return `<main></main>`
    }
    methods () {
        return {}
    }
    async onRender() {
/*        let xhr = new XMLHttpRequest();
        xhr.open('GET', "https://api.coindesk.com/v1/bpi/currentprice/RUB.json");
        // xhr.setRequestHeader(name, value) - request headers
        xhr.send(); // xhr.send([body]) for Post or Put body may be specified
        xhr.onload = () => {
            const newEl = document.createElement('div');
            newEl.className = 'rate';
            const response = JSON.parse(xhr.response); // JSON.parse - parse JSON to Object
            const date = new Date(response.time.updatedISO);
            const rate = response.bpi.RUB.rate_float;
            newEl.innerHTML = `<span>${date.toLocaleString()}</span><span>${rate}</span>`;
            this.$el.append(newEl);
        };
        xhr.onprogress = event => {
            console.log(event);
        };
        xhr.onerror = error => {
            console.log(error);
        };*/
        const response = await fetch("https://api.coindesk.com/v1/bpi/currentprice/RUB.json", {
            method: 'GET',
            headers: {
            }
            // body: {}
        });
        const data = await response.json(); // text formData blob arrayBuffer

    }
}
document.getElementsByTagName('body')[0].appendChild(new BitcoinView().render());
